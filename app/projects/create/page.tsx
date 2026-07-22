'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';


const initialState: State = {
  message: null,
  errors: {}
};


export default function CreateProjectPage() {

  const [state, formAction, isPending] =
    useActionState(createProject, initialState);


  return (
    <main className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Create New Project
      </h1>


      <form 
        action={formAction}
        className="flex flex-col gap-4"
      >


        {/* TITLE */}
        <div>

          <label 
            htmlFor="title"
            className="block font-medium"
          >
            Project Title
          </label>


          <input
            id="title"
            name="title"
            type="text"
            required
            className="border rounded w-full p-2"
            aria-describedby="title-error"
          />


          <div
            id="title-error"
            aria-live="polite"
            aria-atomic="true"
          >

            {
              state.errors?.title?.map((error)=>(
                <p 
                  key={error}
                  className="text-red-600 text-sm"
                >
                  {error}
                </p>
              ))
            }

          </div>

        </div>




        {/* DESCRIPTION */}
        <div>

          <label 
            htmlFor="description"
            className="block font-medium"
          >
            Description
          </label>


          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="border rounded w-full p-2"
            aria-describedby="description-error"
          />


          <div
            id="description-error"
            aria-live="polite"
            aria-atomic="true"
          >

            {
              state.errors?.description?.map((error)=>(
                <p 
                  key={error}
                  className="text-red-600 text-sm"
                >
                  {error}
                </p>
              ))
            }

          </div>

        </div>




        {/* TYPE */}
        <div>

          <label 
            htmlFor="type"
            className="block font-medium"
          >
            Type
          </label>


          <select
            id="type"
            name="type"
            required
            className="border rounded w-full p-2"
          >

            <option value="">
              Select type
            </option>

            <option value="school">
              School
            </option>

            <option value="personal">
              Personal
            </option>

            <option value="opensource">
              Open Source
            </option>


          </select>

        </div>






        {/* TECHNOLOGIES */}
        <div>


          <label
            htmlFor="technologies"
            className="block font-medium"
          >
            Technologies (comma-separated)
          </label>


          <input

            id="technologies"

            name="technologies"

            type="text"

            required

            placeholder="Next.js, TypeScript, Tailwind"

            className="border rounded w-full p-2"

            aria-describedby="technologies-error"

          />



          <div
            id="technologies-error"
            aria-live="polite"
            aria-atomic="true"
          >

          {
            state.errors?.technologies?.map((error)=>(
              <p
                key={error}
                className="text-red-600 text-sm"
              >
                {error}
              </p>
            ))
          }


          </div>


        </div>








        {/* YEAR COMPLETED */}
        <div>


          <label
            htmlFor="yearCompleted"
            className="block font-medium"
          >
            Year Completed
          </label>


          <input

            id="yearCompleted"

            name="yearCompleted"

            type="number"

            required

            min="2000"

            max="2099"

            className="border rounded w-full p-2"

            aria-describedby="yearCompleted-error"

          />



          <div
            id="yearCompleted-error"
            aria-live="polite"
            aria-atomic="true"
          >


          {
            state.errors?.yearCompleted?.map((error)=>(
              <p
                key={error}
                className="text-red-600 text-sm"
              >
                {error}
              </p>
            ))
          }


          </div>


        </div>









        {/* LINK */}
        <div>

          <label
            htmlFor="link"
            className="block font-medium"
          >
            Link (optional)
          </label>


          <input

            id="link"

            name="link"

            type="url"

            placeholder="https://..."

            className="border rounded w-full p-2"

          />


        </div>




        {/* GENERAL ERROR */}
        {
          state.message && (

            <p className="text-red-600">
              {state.message}
            </p>

          )
        }






        {/* BUTTON */}
        <button

          type="submit"

          disabled={isPending}

          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"

        >

          {
            isPending
              ? "Saving..."
              : "Save Project"
          }


        </button>



      </form>


    </main>
  );
}
