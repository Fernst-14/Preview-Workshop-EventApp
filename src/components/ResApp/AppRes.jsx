import React from 'react'
import data from "../../data/imageRes.json";
function AppRes() {
  return (
     <div className="flex flex-col items-center justify-center">
     <div className="py-3.5 text-center">
       <h1 className="mb-6 font-bold sm:text-sm md:text-md lg:text-xl">Preview App Thai Restaurant</h1>
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
           <a href="/DemoRes">View Demo</a>
         </button>
       </div>
     </div>
   </div>
  )
}

export default AppRes