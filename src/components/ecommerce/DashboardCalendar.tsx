import React, { useState, useMemo } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import FullCalendarPage from "../../pages/Calendar";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const events: Record<string, string> = {
  "2026-04-03": "Assessment 1 Part A",
  "2026-04-05": "Feedback Closes",
  "2026-04-12": "Research Proposal",
  "2026-04-19": "Project Plan",
  "2026-04-26": "ERP Proposal",
};

export default function DashboardCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // Start at April 2026
  const { isOpen, openModal, closeModal } = useModal();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const dates = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    // Adjust for Monday start (0=Sun, 1=Mon... -> 0=Mon, 6=Sun)
    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDates = [];
    for (let i = 0; i < startOffset; i++) {
      calendarDates.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      calendarDates.push(d);
    }
    return calendarDates;
  }, [year, month]);

  const handleMonthChange = (offset: number) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  const handleYearChange = (offset: number) => {
    setCurrentDate(new Date(year + offset, month, 1));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Calendar
          </h3>
          <div className="flex items-center gap-1.5">
            <button onClick={() => handleYearChange(-1)} title="Previous Year" className="text-gray-400 transition-colors hover:text-brand-500 dark:hover:text-brand-400">«</button>
            <button onClick={() => handleMonthChange(-1)} title="Previous Month" className="text-gray-400 transition-colors hover:text-brand-500 dark:hover:text-brand-400">‹</button>
            <span className="min-w-[100px] text-center text-xs font-semibold text-gray-600 dark:text-gray-400">
              {monthName} {year}
            </span>
            <button onClick={() => handleMonthChange(1)} title="Next Month" className="text-gray-400 transition-colors hover:text-brand-500 dark:hover:text-brand-400">›</button>
            <button onClick={() => handleYearChange(1)} title="Next Year" className="text-gray-400 transition-colors hover:text-brand-500 dark:hover:text-brand-400">»</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((day) => (
          <div key={day} className="text-center text-[10px] font-bold uppercase text-gray-400 py-2">
            {day}
          </div>
        ))}
        {dates.map((date, index) => {
          const dateStr = date ? `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}` : null;
          const hasEvent = dateStr && events[dateStr];

          return (
            <div
              key={index}
              className={`relative flex h-8 items-center justify-center rounded-lg text-xs font-medium
                ${date ? "text-gray-800 dark:text-white/90" : ""}
                ${hasEvent ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400" : ""}
              `}
            >
              {date}
              {hasEvent && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-current"></span>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={openModal}
        className="w-full rounded-lg border border-gray-200 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/5 transition-colors"
      >
        Full calendar
      </button>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[1000px] m-4">
        <div className="relative w-full p-4 bg-white dark:bg-gray-900 rounded-3xl lg:p-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Full Academic Calendar</h3>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
            <FullCalendarPage />
          </div>
        </div>
      </Modal>
    </div>
  );
}