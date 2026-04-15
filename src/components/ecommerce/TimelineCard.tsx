import React from "react";

const timelineEvents = [
  {
    time: "23:59",
    type: "Activity event",
    title: "Mid-Semester Feedback",
    description: "Questionnaire requires action",
    course: "ICT709 Enterprise Resource Planning 2026-SEM1",
  },
  {
    time: "23:59",
    type: "Activity event",
    title: "Mid-Semester Feedback",
    description: "Questionnaire requires action",
    course: "ICT801 Advanced Research Topics in Information Technology 2026-SEM1",
  },
  {
    time: "23:59",
    type: "Activity event",
    title: "Mid-Semester Feedback",
    description: "Questionnaire requires action",
    course: "ICT802 Capstone Project 2026-SEM1",
  },
];

export default function TimelineCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">
        Timeline
      </h3>
      
      <div className="mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by activity type or name"
            className="w-full rounded-lg border border-gray-200 bg-transparent py-2 pl-4 pr-4 text-sm outline-none focus:border-brand-500 dark:border-gray-800 dark:text-white/90"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-800 dark:text-white/90 mb-4">
            Sunday, 5 April 2026
          </h4>
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 w-10 shrink-0">
                  {event.time}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase text-brand-500">{event.type}</span>
                  <h5 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                    {event.title}
                  </h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {event.description} <span className="mx-1">·</span> {event.course}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}