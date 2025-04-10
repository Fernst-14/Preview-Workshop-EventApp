import React from 'react'
import Demo from './Demo'
import data from "../../data/image.json";

function EventApplication() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-3.5 text-center">
        <h1 className="mb-6 font-bold sm:text-sm md:text-md lg:text-xl">Preview Event Application</h1>
        <div className="flex flex-wrap gap-3 justify-center sm:flex-row md:flex-col lg:flex-row">
          {data.map((img) => (
            <div className="div" key={img.id}>
              <div>
                <img src={`/image/${img.imageSrc}`} alt={img.title} width={250} className="rounded-lg"/>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4.5">
        <button class="rounded-full bg-gray-300 m-[10px] p-[15px] text-lg font-medium ">
            <a href="/demo">View Demo</a>
        </button>
        <hr className="border-t-2 border-gray-500 my-4" />
        </div>
      </div>
    </div>

  )
}

export default EventApplication