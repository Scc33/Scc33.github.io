import React from "react";

type VerticalTimelineProps = {
  children: React.ReactNode;
  "aria-label"?: string;
};

export function VerticalTimeline({
  children,
  "aria-label": ariaLabel
}: VerticalTimelineProps) {
  return (
    <div
      className="mt-8 relative"
      role="list"
      aria-label={ariaLabel || "Timeline of events"}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-white/10 hidden sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-5 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-white/10 sm:hidden"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

type VerticalTimelineElementProps = {
  children: React.ReactNode;
  date?: string;
  icon?: React.ReactNode;
  index: number;
  isLast?: boolean;
};

export function VerticalTimelineElement({
  children,
  date,
  icon,
  index,
  isLast
}: VerticalTimelineElementProps) {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`relative ${!isLast ? "mb-10 sm:mb-16" : ""}`}
      role="listitem"
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full absolute left-5 sm:left-1/2 -translate-x-1/2 z-10 bg-white dark:bg-white/15 text-2xl"
        aria-hidden="true"
      >
        {icon}
      </div>

      <div
        className={`sm:flex items-center ${
          isOdd ? "sm:flex-row-reverse" : ""
        } ml-16 sm:ml-0`}
      >
        <div className={`sm:w-1/2 ${isOdd ? "sm:pl-8" : "sm:pr-8"}`}>
          <div
            className="bg-gray-100 dark:bg-white/5 p-[1.3rem_2rem] rounded-lg border border-black/5 relative shadow-none text-left"
            role="article"
          >
            {date && (
              <p
                className="sm:hidden font-semibold mb-2"
                aria-label={`Date: ${date}`}
              >
                {date}
              </p>
            )}
            {children}
          </div>
        </div>
        {date && (
          <div
            className={`sm:w-1/2 mt-3 sm:mt-0 ${
              isOdd ? "sm:text-right sm:pr-8" : "sm:pl-8"
            } hidden sm:block`}
          >
            <p className="font-semibold" aria-label={`Date: ${date}`}>
              {date}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
