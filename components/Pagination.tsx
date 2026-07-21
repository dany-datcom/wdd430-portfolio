'use client';

import {
  usePathname,
  useSearchParams,
} from 'next/navigation';


interface PaginationProps {
  totalPages: number;
}


export default function Pagination({
  totalPages,
}: PaginationProps) {

  const pathname = usePathname();
  const searchParams = useSearchParams();


  const currentPage =
    Number(searchParams.get('page')) || 1;


  function createPageURL(pageNumber: number) {

    const params = new URLSearchParams(searchParams);

    params.set(
      'page',
      pageNumber.toString()
    );

    return `${pathname}?${params.toString()}`;
  }


  return (
    <div className="flex justify-center gap-4 mt-8">


      {currentPage > 1 && (

        <a
          href={createPageURL(currentPage - 1)}
          className="
            rounded-md
            border
            px-4
            py-2
            hover:bg-slate-100
          "
        >
          ← Previous
        </a>

      )}



      <span className="px-4 py-2">

        Page {currentPage} of {totalPages}

      </span>



      {currentPage < totalPages && (

        <a
          href={createPageURL(currentPage + 1)}
          className="
            rounded-md
            border
            px-4
            py-2
            hover:bg-slate-100
          "
        >
          Next →
        </a>

      )}


    </div>
  );
} 