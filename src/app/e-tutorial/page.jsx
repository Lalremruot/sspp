"use client";

import { ChevronDown, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const course = [
  { name: "English", subject: ["Grammar", "Poetry", "Prose", "Course"] },
  { name: "Science", subject: ["Physics", "Chemistry", "Biology"] },
  { name: "Social Science", subject: ["History", "Geography", "Civics"] },
  { name: "MIL (Paite)", subject: ["Reading", "Writing", "Translation"] },
  { name: "Mathematics", subject: ["Algebra", "Geometry", "Calculus"] },
];

const eTutorial = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (name) => {
    setOpenCard(openCard === name ? null : name);
  };

  return (
    <div className="w-full mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Course Materials
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Browse through our comprehensive collection of study resources by
          subject
        </p>
      </div>

      <div className="grid grid-cols-1 max-w-2xl mx-auto sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {course.map((c) => (
          <div
            key={c.name}
            className="border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            {/* Card Header */}
            <button
              onClick={() => toggleCard(c.name)}
              className="flex items-center justify-between p-5 w-full transition-colors duration-200 hover:bg-gray-50"
              aria-expanded={openCard === c.name}
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 text-left">
                  {c.name}
                </h2>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                  openCard === c.name ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Subjects */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openCard === c.name
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 border-t border-gray-300 bg-gray-50 space-y-3">
                {c.subject.map((sub) => (
                  <Link
                    key={sub}
                    href={`/e-tutorial/${sub.toLowerCase()}`}
                    className="block text-blue-600 hover:underline"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default eTutorial;
