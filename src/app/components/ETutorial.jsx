"use client";

import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

const eTutorial = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-bold text-xl lg:text-3xl">e-Tutorial</h2>
        <p className="font-thin italic text-xs lg:text-lg text-gray-500 pb-4 pt-4 max-w-4xl mx-auto text-justify">
          "Our platform also provides e-tutorials featuring interactive video
          lessons, thoughtfully designed to support flexible and effective
          learning at your convenience. These tutorials make it easier to grasp
          concepts step by step, offering clear explanations and visual guidance
          that enhance understanding. Whether you want to learn on the go,
          revisit lessons at your own pace, or strengthen your knowledge in
          specific areas, our e-tutorials are tailored to fit your schedule and
          learning style. With easy access anytime and anywhere, you’ll have the
          tools you need to achieve your learning goals more effectively."
        </p>
        <Link href="/e-tutorial" className="flex items-center text-xs lg:text-[14px] gap-2 hover:animate-bounce text-blue-600 hover:text-blue-700 text-center">View more <LucideArrowRight size={16} /></Link>
      </div>
    </div>
  );
};

export default eTutorial;
