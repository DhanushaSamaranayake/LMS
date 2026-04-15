import React from "react";

const stats = [
  {
    title: "Courses",
    percentage: 33,
    total: 6,
    incomplete: 4,
    completed: 2,
    color: "bg-blue-500",
  },
  {
    title: "Assignments",
    percentage: 17,
    total: 18,
    incomplete: 15,
    completed: 3,
    color: "bg-orange-500",
  },
  {
    title: "Quizzes",
    percentage: 100,
    total: 12,
    incomplete: 0,
    completed: 12,
    color: "bg-green-500",
  },
  {
    title: "Discussions",
    percentage: 0,
    total: 1,
    incomplete: 1,
    completed: 0,
    color: "bg-purple-500",
  },
];

export default function LmsStatsDetailed() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h4>
            <span className="text-lg font-bold text-gray-800 dark:text-white/90">{stat.percentage}%</span>
          </div>
          <div className="relative h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800 mb-5">
            <div 
              className={`absolute left-0 top-0 h-full rounded-full ${stat.color}`} 
              style={{ width: `${stat.percentage}%` }}
            ></div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-gray-500"><span>Total :</span> <span className="font-semibold text-gray-800 dark:text-white">{stat.total}</span></div>
            <div className="flex justify-between text-gray-500"><span>Incomplete :</span> <span className="font-semibold text-gray-800 dark:text-white">{stat.incomplete}</span></div>
            <div className="flex justify-between text-gray-500"><span>{stat.title === "Courses" ? "Completed :" : "Submitted :"}</span> <span className="font-semibold text-gray-800 dark:text-white">{stat.completed}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
}