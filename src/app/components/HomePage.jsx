"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { LucideArrowRight, LucideArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const HomePages = () => {
  const [text] = useTypewriter({
    words: ["Siamsin Education Initiative"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 700,
  });

  return (
    <div className="w-full  h-[40vh] lg:h-[80vh]">
      {/* <Splide
          options={{
            type: "loop",
            perPage: 1,
            arrows: false,
            speed: 600,
            interval: 2000,
            autoplay: true,
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-b6UOQqz6_ocGmE2Xu_bqpQTurxkmVNEXwTtjrFEo7WJJWWcrBFVsBOkjQNMIEKJgkM6Pz0mqo_7nKldsJwxsWzfzUMTFcuvt47LDOY3MZQBFibQkwWoneP4_WYYLuwiCS-6EKw=s680-w680-h510-rw"
              alt="Image 1"
              className="w-full h-[40vh] lg:h-[80vh] object-cover"
            />
            <div className="absolute h-[40vh] inset-0 lg:h-[80vh] bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-2xl lg:text-7xl max-w-md lg:max-w-4xl font-semibold text-center">
                Sustainable Livelihoods
              </h1>
              <p className="text-gray-300 pt-1 text-center text-xs lg:text-lg max-w-xs lg:max-w-3xl">
                We promote rural enterprises through beekeeping, organic
                farming, and small-scale entrepreneurship. These initiatives
                help families increase their income while building long-term
                community resilience.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://www.facebook.com/photo/?fbid=1241708125952648&set=p.1241708125952648"
              alt="Image 2"
              className="w-full h-[40vh] lg:h-[80vh] object-cover"
            />
            <div className="absolute inset-0 h-[40vh] lg:h-[80vh] bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-2xl lg:text-7xl max-w-xs lg:max-w-4xl font-semibold text-center">
                Community-Driven Progress
              </h1>
              <p className="text-gray-300 pt-3 text-center text-xs lg:text-lg max-w-xs lg:max-w-3xl">
                Learn about out participatory approach to rural development,
                empowering Meghalaya's communities to lead their own sustainable
                future.
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img
              src=""
              alt="Image 3"
              className="w-full h-[40vh] lg:h-[80vh] object-cover"
            />
            <div className="absolute inset-0 h-[40vh] lg:h-[80vh] bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white text-2xl lg:text-7xl max-w-xs lg:max-w-4xl font-semibold text-center">
                Empowering Rural Communities in Meghalaya
              </h1>
              <p className="text-gray-300 pt-3 text-center text-xs lg:text-lg max-w-xs lg:max-w-3xl">
                Join us in fostering sustainable development through community
                engagement initiatives in the beautiful state of Meghalaya.
              </p>
            </div>
          </SplideSlide>
        </Splide> */}
      <div className="relative -z-10 w-full h-[40vh] lg:h-[80vh]">
        <Image
          src="/Images/unnamed.webp"
          alt=""
          fill
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute  inset-0 backdrop-blur-xs bg-black/20" />
        <div className="absolute px-2 lg:px-30 inset-0 flex flex-col items-start justify-center">
          <h1 className="text-gray-100  text-[11px] lg:text-2xl max-w-xs lg:max-w-4xl font-semibold text-center">
            SIAMSINPAWLPI
          </h1>
          <p className="text-white lg:pt-2 text-start text-2xl lg:text-8xl font-extrabold max-w-xs lg:max-w-4xl">
            {text}
          </p>
          <p className="text-gray-300 text-xs lg:text-xl pt-2 max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            aspernatur harum vero ea unde fuga voluptatum fugiat sunt.
          </p>
          <button className="bg-pink-600 hover:scale-105 text-white px-2 py-1 text-xs  lg:text-base items-center justify-center lg:px-5 lg:py-2.5 rounded-sm mt-3 flex gap-2">
            Learn more <LucideArrowRight className="w-4 lg:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePages;
