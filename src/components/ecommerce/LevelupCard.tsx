import React from "react";

export default function LevelupCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">
        Levelup Dashboard
      </h3>
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="text-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs text-gray-500 mb-1">Points</p>
          <p className="text-lg font-bold text-gray-800 dark:text-white">0</p>
        </div>
        <div className="text-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs text-gray-500 mb-1">Level</p>
          <p className="text-lg font-bold text-gray-800 dark:text-white">1</p>
        </div>
        <div className="text-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs text-gray-500 mb-1">Rank</p>
          <p className="text-lg font-bold text-gray-800 dark:text-white">#--</p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-2">Top Students</p>
        <div className="flex items-center justify-between py-0.5">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-brand-500">#1</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Student 01</span>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500">Active</span>
        </div>
        <div className="flex items-center justify-between py-0.5 opacity-60">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-400">#2</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Student 21</span>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">Inactive</span>
        </div>
        <div className="flex items-center justify-between py-0.5 opacity-60">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-400">#3</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Student 02</span>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">Inactive</span>
        </div>
      </div>
    </div>
  );
}