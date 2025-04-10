import React from "react";
import EventApplication from "./EventApplication/EventApplication";
import AppRes from "./ResApp/AppRes";
function Home() {

  return (
    // <div className="flex flex-col items-center justify-center">
    //   <div className="py-3.5 text-center">
    //     <h1 className="mb-6 font-bold sm:text-sm md:text-md lg:text-3xl">Preview Event Application</h1>
    //     <div className="flex flex-wrap gap-3 justify-center sm:flex-row md:flex-col lg:flex-row">
    //       {data.map((img) => (
    //         <div className="div" key={img.id}>
    //           <div>
    //             <img src={`/image/${img.imageSrc}`} alt={img.title} width={250} className="rounded-lg"/>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="mt-4.5">
    //     <button class="rounded-full bg-gray-300 m-[10px] p-[15px] text-lg font-medium ">
    //         <a href="/demo">View Demo</a>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-100 bg-auto flex flex-col items-center justify-center">
      <h1 className="font-bold lg:text-3xl md:text-md sm:text-sm py-4"> My Mobile App Projects </h1>
       <EventApplication />

       <AppRes/>
    </div>

  );
}

export default Home;
