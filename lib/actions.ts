'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const ProjectFormSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  type: z.enum(['school', 'personal', 'opensource'], {
    errorMap: () => ({ message: 'Type must be school, personal, or opensource' }),
  }),
  technologies: z.string().min(2, 'Add at least one technology'),
  link: z.string().url('Invalid URL').optional().or(z.literal('')),
});

export async function createProject(formData: FormData) {
 
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
  };

  
  const parsed = ProjectFormSchema.safeParse(raw);

  if (!parsed.success) {
   
    const errors = parsed.error.flatten().fieldErrors;
    throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
  }

  
  const { title, description, type, technologies, link } = parsed.data;

 
  const techArray = technologies
    .split(',')
    .map((tech) => tech.trim())
    .filter((tech) => tech.length > 0);

  
  await sql`
    INSERT INTO projects (title, description, type, technologies, link)
    VALUES (${title}, ${description}, ${type}, ${JSON.stringify(techArray)}, ${link || null})
  `;

  
  revalidatePath('/projects');
  redirect('/projects');
}


export async function getProjectById(id: string) {
  const data = await sql`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE id = ${id}
  `;

  
  if (data.rows.length === 0) {
    return null;
  }

  return data.rows[0];
}



export async function updateProject(id: string, formData: FormData) {
  
  const raw = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link'),
  };

 
  const parsed = ProjectFormSchema.safeParse(raw);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    throw new Error(`Validation failed: ${JSON.stringify(errors)}`);
  }

  
  const { title, description, type, technologies, link } = parsed.data;

  
  const techArray = technologies
    .split(',')
    .map((tech) => tech.trim())
    .filter((tech) => tech.length > 0);

 
  await sql`
    UPDATE projects
    SET 
      title = ${title},
      description = ${description},
      type = ${type},
      technologies = ${JSON.stringify(techArray)},
      link = ${link || null}
    WHERE id = ${id}
  `;

  
  revalidatePath('/projects');
  redirect('/projects');
}


export async function deleteProject(id: string) {
  
  await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;

 
  revalidatePath('/projects');
  
}