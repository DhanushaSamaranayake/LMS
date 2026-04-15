import React from "react";

const recentCourses = [
  { category: "MITS", name: "ICT802 Capstone Project 2026-SEM1" },
  { category: "MITS", name: "ICT709 Enterprise Resource Planning 2026-SEM1" },
  { category: "MITS", name: "ICT801 Advanced Research Topics 2026-SEM1" },
  { category: "Learning Support", name: "Student Academic Skills" },
  { category: "SLS-2025S1", name: "Academic Integrity - 2025S1" },
  { category: "SLS-2025S1", name: "Develop Academic Writing - 2025S1" },
];

export default function RecentlyAccessedCourses() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">
        Recently accessed courses
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recentCourses.map((course, index) => (
          <div 
            key={index} 
            className="group flex flex-col gap-3 rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-500 transition-colors">
                {course.category}
              </span>
              <h4 className="mt-1 text-sm font-semibold text-gray-800 dark:text-white/90 line-clamp-2">
                {course.name}
              </h4>
            </div>
            <div className="mt-auto flex items-center justify-between pt-2">
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900"></div>
                <div className="h-6 w-6 rounded-full border-2 border-white bg-gray-300 dark:border-gray-900 text-[8px] flex items-center justify-center font-bold text-gray-600">+12</div>
              </div>
              <svg className="h-5 w-5 text-gray-300 group-hover:text-brand-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}