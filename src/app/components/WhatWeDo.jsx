"use client";


import { BookOpenCheck, Users2, Globe, HeartHandshake } from "lucide-react";

const WhatWeDo = () => {
  const programs = [
    {
      title: "Educational Support",
      desc: "Providing scholarships, tutoring, and resources for first-generation learners to thrive academically.",
      icon: <BookOpenCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Community Building",
      desc: "Organizing workshops, cultural programs, and outreach to strengthen bonds among students and the community.",
      icon: <Users2 className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Global Awareness",
      desc: "Equipping students with the knowledge and skills to engage with global issues and opportunities.",
      icon: <Globe className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Volunteerism & Service",
      desc: "Encouraging a spirit of service and philanthropy by engaging students in impactful community work.",
      icon: <HeartHandshake className="w-10 h-10 text-pink-600" />,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-6 lg:py-20 px-6">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center space-y-6 mb-6 lg:mb-16">
        <h1 className="text-lg lg:text-4xl md:text-5xl font-bold text-gray-800">
          What We <span className="text-blue-600">Do</span>
        </h1>
        <p className="text-xs lg:text-lg text-gray-500 text-justify">
          At <span className="font-semibold text-blue-600">Siamsinpawlpi</span>,
          we strive to empower students through education, community, and
          service. Our initiatives are designed to create opportunities and
          inspire future leaders.
        </p>
      </div>

      {/* Program Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start space-y-4 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="p-4 rounded-xl bg-gray-100">
              {program.icon}
            </div>
            <h2 className="lg:text-xl font-semibold text-gray-800">
              {program.title}
            </h2>
            <p className="text-gray-600 text-xs lg:text-lg text-justify">
              {program.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
