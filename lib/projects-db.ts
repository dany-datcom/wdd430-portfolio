import { sql } from '@vercel/postgres';


export interface Project {
  id:number;
  title:string;
  description:string;
  type:
    | 'opensource'
    | 'school'
    | 'personal';
  technologies:string[];
  yearCompleted:number;
  link?:string;
}






export async function getProjects(
  type?: string | null
): Promise<Project[]> {


  if(type){


    const {rows} =
    await sql<Project>`

      SELECT
        id,
        title,
        description,
        type,
        technologies,
        year_completed AS "yearCompleted",
        link

      FROM projects

      WHERE type=${type}

      ORDER BY id

    `;


    return rows;


  }






  const {rows} =
  await sql<Project>`

    SELECT

      id,
      title,
      description,
      type,
      technologies,
      year_completed AS "yearCompleted",
      link


    FROM projects

    ORDER BY id

  `;



  return rows;

}









export async function getProjectById(
  id:number
):Promise<Project|null>{


  const {rows} =
  await sql<Project>`

    SELECT

      id,
      title,
      description,
      type,
      technologies,
      year_completed AS "yearCompleted",
      link


    FROM projects


    WHERE id=${id}


  `;



  return rows[0] ?? null;

}









const ITEMS_PER_PAGE = 6;








export async function fetchFilteredProjects(

  query:string,

  currentPage:number

):Promise<Project[]>{



  const offset =
  (currentPage - 1) *
  ITEMS_PER_PAGE;



  const search =
  `%${query}%`;





  const {rows}=

  await sql<Project>`

    SELECT

      id,
      title,
      description,
      type,
      technologies,
      year_completed AS "yearCompleted",
      link


    FROM projects


    WHERE

      title ILIKE ${search}

      OR description ILIKE ${search}


    ORDER BY id


    LIMIT ${ITEMS_PER_PAGE}

    OFFSET ${offset}


  `;



  return rows;


}








export async function fetchProjectsPages(

query:string

):Promise<number>{



  const search =
  `%${query}%`;




  const {rows}=

  await sql<{count:number}>`

    SELECT COUNT(*)::int


    FROM projects


    WHERE

      title ILIKE ${search}

      OR description ILIKE ${search}


  `;



  const totalProjects =
  rows[0].count;



  return Math.ceil(
    totalProjects /
    ITEMS_PER_PAGE
  );

}