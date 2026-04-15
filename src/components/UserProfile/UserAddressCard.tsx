export default function UserAddressCard() {
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Course details
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Course profiles
              </p>
              <div className="flex flex-col gap-1">
                {[
                  "Learning Support",
                  "Academic Integrity - 2025S1",
                  "Develop Academic Writing - 2025S1",
                  "ICT802 Capstone Project 2026-SEM1",
                  "ICT801 Advanced Research Topics in Information Technology 2026-SEM1",
                  "ICT709 Enterprise Resource Planning 2026-SEM1",
                ].map((course) => (
                  <a
                    key={course}
                    href="#"
                    className="text-sm font-medium text-brand-500 hover:underline dark:text-brand-400"
                  >
                    {course}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
