"use client";

import Image from "next/image";


const Welcome = () => {
  return (
    <section className="w-full lg:mt-12 bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-lg lg:text-4xl md:text-5xl text-center lg:text-start font-bold text-gray-800">
            Welcome to{" "}
            <span className="text-blue-600">Siamsinpawlpi</span>
          </h2>
          <p className="text-gray-500 leading-relaxed text-xs lg:text-lg">
            Siamsinpawlpi (SSPP) is a students' welfare organisation founded on
            the principles of <span className="font-semibold">philanthropy</span> 
            and <span className="font-semibold">volunteerism</span>, driven by 
            the motto: <span className="italic">“Learn, Labour, Serve.”</span>
          </p>
          <p className="text-gray-600 text-xs lg:text-lg leading-relaxed">
            We aim to empower first-generation learners and create an
            educationally enabling environment for the Paite community and 
            kindred groups, fostering growth, unity, and knowledge.
          </p>
          <button className="px-3 py-1.5 text-xs lg:text-base lg:px-6 lg:py-2 bg-blue-600 text-white font-medium rounded-sm shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="relative">
          <Image
          priority
          width={500}
          height={500}
            src="/Images/sspp-icon.jpg"
            alt="Students studying together"
            className="rounded-2xl w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md">
            <p className="text-blue-600 font-bold text-xl">📚 500+ Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
