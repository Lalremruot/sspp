"use client";


import { BookOpen, Users, HandHeart } from "lucide-react";

const Motto = () => {
  const mottos = [
    {
      title: "Sin in",
      desc: "Learning is the foundation of growth. We encourage students to acquire knowledge that empowers them to face the future with confidence.",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Sem in",
      desc: "Labour is dignity. Hard work and perseverance are the values we instill to help students reach their fullest potential.",
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Zuun in",
      desc: "Service is our guiding light. We believe in giving back to the community through volunteerism and philanthropy.",
      icon: <HandHeart className="w-10 h-10 text-pink-600" />,
    },
  ];

  return (
    <section className="w-full bg-white py-6 lg:py-10 px-6">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center space-y-6 mb-6 lg:mb-16">
        <h1 className="text-xl lg:text-4xl md:text-5xl font-bold text-gray-800">
          Sin in, Sem in, Zuun in
        </h1>
        <p className="text-xs lg:text-lg text-gray-600 text-justify">
          <span className="font-semibold  text-blue-600">Siamsinpawlpi (SSPP) </span> 
          is a Students’ Welfare Organisation founded on the principles of 
          philanthropy and volunteerism. Our motto — 
          <span className="italic">“Learn, Labour, Serve”</span> — guides our mission 
          to uplift and empower communities through education and service.
        </p>
      </div>

      {/* Mottos Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {mottos.map((motto, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="p-4 rounded-full bg-white shadow-md">
              {motto.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {motto.title}
            </h2>
            <p className="text-gray-600 text-xs lg:text-lg text-justify">{motto.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Motto;
