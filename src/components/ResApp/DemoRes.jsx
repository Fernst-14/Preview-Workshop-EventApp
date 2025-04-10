import React from "react";


function DemoRes() {
  return (
    <div className="bg-gray-100 bg-auto flex flex-col items-center justify-center ">
      <div className="py-2.5 text-center">
        <div className="mt-4">
            <h1 className="font-bold lg:text-3xl md:text-md sm:text-sm">Demo App</h1>
            <div className="mt-4">
                <video width={280}  controls className="rounded-lg shadow-lg">
                    <source src="./clip/PreviewRes.mov" type="video/mp4" />
                    <source src="./clip/PreviewRes.mov" type="video/quicktime" />
                </video>
            </div>
        </div>
        <div className="mt-4.5">
        <button class="rounded-full bg-gray-300 m-[10px] p-[15px] text-lg font-medium ">
            <a href="/">Back to Home</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoRes;
