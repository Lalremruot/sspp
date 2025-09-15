"use client";

import { BookOpen, Users, GraduationCap } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Quality Education",
      desc: "Providing access to resources",
      icon: <BookOpen className="w-4 h-4 lg:w-8 lg:h-8 text-blue-600" />,
    },
    {
      title: "Community Support",
      desc: "Fostering unity and volunteerism",
      icon: <Users className="w-4 h-4 lg:w-8 lg:h-8 text-green-600" />,
    },
    {
      title: "Empowering Students",
      desc: "Helping first-generation learners",
      icon: <GraduationCap className="w-4 h-4 lg:w-8 lg:h-8 text-pink-600" />,
    },
  ];

  return (
    <section className="w-full lg:max-w-7xl mx-auto -mt-12 lg:-mt-20 relative z-10 px-2 lg:px-6">
      <div className="grid-cols-3 grid md:grid-cols-3 gap-2 lg:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-md lg:rounded-2xl shadow-md p-1 lg:p-6 flex flex-col items-start space-y-4 hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="p-1 lg:p-3 rounded-xl bg-gray-100">
              {feature.icon}
            </div>
            
            {/* Text */}
            <div>
              <h2 className="text-[10px] lg:text-2xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-start text-[10px] lg:text-lg">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
