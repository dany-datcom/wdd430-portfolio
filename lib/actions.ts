'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



const currentYear = new Date().getFullYear();



const ProjectFormSchema = z.object({

  title: z
    .string()
    .min(3, 'Title must be at least 3 characters.'),


  description: z
    .string()
    .min(20, 'Description must be at least 20 characters.'),


  type: z.enum(
    ['school', 'personal', 'opensource'],
    {
      errorMap: () => ({
        message:
        'Type must be school, personal, or opensource'
      })
    }
  ),


  technologies: z
    .string()
    .min(2, 'Add at least one technology.'),


  yearCompleted: z.coerce
    .number()
    .int('Year must be a whole number.')
    .gte(
      2000,
      'Year must be 2000 or later.'
    )
    .lte(
      currentYear,
      `Year cannot be greater than ${currentYear}.`
    ),


  link: z
    .string()
    .url('Invalid URL')
    .optional()
    .or(z.literal(''))

});





export type State = {

  errors?: {

    title?: string[];

    description?: string[];

    type?: string[];

    technologies?: string[];

    yearCompleted?: string[];

    link?: string[];

  };


  message?: string | null;

};







export async function createProject(
  prevState: State,
  formData: FormData
): Promise<State | void> {

  const validatedFields =
  ProjectFormSchema.safeParse({

    title:
    formData.get('title'),


    description:
    formData.get('description'),


    type:
    formData.get('type'),


    technologies:
    formData.get('technologies'),


    yearCompleted:
    formData.get('yearCompleted'),


    link:
    formData.get('link'),

  });





  if (!validatedFields.success) {


    return {

      errors:
      validatedFields.error.flatten().fieldErrors,


      message:
      'Missing or invalid fields. Failed to create project.'

    };

  }





  const {
    title,
    description,
    type,
    technologies,
    yearCompleted,
    link

  } = validatedFields.data;






  const techArray =
  technologies
    .split(',')
    .map((tech)=>tech.trim())
    .filter(
      (tech)=>tech.length > 0
    );






  try {


    await sql`

      INSERT INTO projects 
      (
        title,
        description,
        type,
        technologies,
        year_completed,
        link
      )

      VALUES
      (
        ${title},
        ${description},
        ${type},
        ${techArray},
        ${yearCompleted},
        ${link || null}
      )

    `;



  } catch(error) {


    return {

      message:
      'Database Error: Failed to create project.'

    };


  }





  revalidatePath('/projects');

  redirect('/projects');

}









export async function getProjectById(id:number) {


  const data =
  await sql`

    SELECT 
      id,
      title,
      description,
      type,
      technologies,
      year_completed,
      link

    FROM projects

    WHERE id = ${id}

  `;



  if(data.rows.length === 0){

    return null;

  }


  return data.rows[0];

}


export async function updateProject(
id:string,
formData:FormData
){


  const validatedFields =
  ProjectFormSchema.safeParse({

    title:
    formData.get('title'),


    description:
    formData.get('description'),


    type:
    formData.get('type'),


    technologies:
    formData.get('technologies'),


    yearCompleted:
    formData.get('yearCompleted'),


    link:
    formData.get('link'),

  });




  if(!validatedFields.success){

    throw new Error(
      "Validation failed"
    );

  }




  const {
    title,
    description,
    type,
    technologies,
    yearCompleted,
    link

  } = validatedFields.data;




  const techArray =
  technologies
    .split(',')
    .map(
      tech=>tech.trim()
    );




  await sql`

    UPDATE projects

    SET

      title=${title},

      description=${description},

      type=${type},

      technologies=${techArray},

      year_completed=${yearCompleted},

      link=${link || null}


    WHERE id=${id}

  `;




  revalidatePath('/projects');

  redirect('/projects');


}








export async function deleteProject(id:string){


  try{


    await sql`

      DELETE FROM projects

      WHERE id=${id}

    `;



  }catch(error){


    console.error(
      "Delete error:",
      error
    );


    throw new Error(
      "Failed to delete project"
    );


  }



  revalidatePath('/projects');

}