import React from "react";
import { useTheme } from "@/context/theme-context";

type VerticalTimelineProps = {
  children: React.ReactNode;
};

export function VerticalTimeline({ children }: VerticalTimelineProps) {
  return (
    <div className="mt-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-white/10 hidden sm:block" />
      <div className="absolute top-0 left-5 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-white/10 sm:hidden" />
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
  const { theme } = useTheme();
  const isOdd = index % 2 !== 0;

  return (
    <div className={`relative ${!isLast ? "mb-10 sm:mb-16" : ""}`}>
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full absolute left-5 sm:left-1/2 -translate-x-1/2 z-10"
        style={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem"
        }}
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
            className="bg-gray-100 dark:bg-white/5 p-5 rounded-lg border border-black/5 relative"
            style={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem"
            }}
          >
            <p className="sm:hidden font-semibold mb-2">{date}</p>
            {children}
          </div>
        </div>
        <div
          className={`sm:w-1/2 mt-3 sm:mt-0 ${
            isOdd ? "sm:text-right sm:pr-8" : "sm:pl-8"
          } hidden sm:block`}
        >
          <p className="font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
}
