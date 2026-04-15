import React from "react";

const announcements = [
  {
    date: "2 April 2026, 9:30 AM",
    title: "Using AI as learning tools – Academic skills and learning support workshops for students",
    author: "LMS VIT",
  },
  {
    date: "27 March 2026, 2:18 PM",
    title: "2026 Easter Break",
    author: "LMS VIT",
  },
  {
    date: "24 March 2026, 10:52 AM",
    title: "Using ProQuest module",
    author: "LMS VIT",
  },
  {
    date: "24 March 2026, 9:00 AM",
    title: "Declaration of Elected Student Representatives for VIT’s Academic Board 2026",
    author: "LMS VIT",
  },
];

export default function AnnouncementsCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Latest announcements
        </h3>
        <button className="text-sm font-medium text-brand-500 hover:underline">
          Older topics ...
        </button>
      </div>
      <div className="space-y-6">
        {announcements.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{item.date}</span>
              <span className="h-1 w-1 rounded-full bg-gray-300"></span>
              <span className="font-medium text-brand-500">{item.author}</span>
            </div>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-brand-500 dark:text-white/90 dark:hover:text-brand-400 transition-colors">
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}