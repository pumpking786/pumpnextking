import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Pramit
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio saepe
            dolorum dicta reiciendis quas esse magnam non, labore ad quidem
            dolores obcaecati optio voluptas nemo, sunt ipsa qui exercitationem
            suscipit!
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-3 lg:ml-1">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-2">
            <Image
              src="/images/ok.jpg"
              alt="Profile"
              className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={400} // Match the parent container's width for large screens
              height={400} // Match the parent container's height for large screens
              objectFit="cover" // Ensures the image covers the circular area without distortion
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
