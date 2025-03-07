"use client";

import { cn } from "@/lib/utils";
import React, {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import { Button } from "./button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isEqual,
  isSameMonth,
  isWeekend,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";

interface CalendarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: Date;
  setSelected: Dispatch<SetStateAction<Date>>;
  disableAfter?: Date | string;
}
const daysOfTheWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export default function Calendar({
  selected,
  setSelected,
  className,
  disableAfter,
  ...props
}: CalendarProps) {
  const today = startOfToday();
  const firstDayOfMonth = startOfMonth(today);

  const [firstDayOfCurrentMonth, setFirstDayOfCurrentMonth] =
    useState<Date>(firstDayOfMonth);
  const daysOfTheMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  });

  function isDisabled(d: Date): boolean {
    if (isBefore(d, today)) return true;
    if (isWeekend(d)) return true;
    return false;
  }
  function handleClick(d: Date) {
    setSelected(d);
    if(isSameMonth(d, firstDayOfCurrentMonth)) return;
    setFirstDayOfCurrentMonth(startOfMonth(d))
  }
  function nextMonth() {
    setFirstDayOfCurrentMonth((prev) => addMonths(prev, 1));
  }
  function previousMonth() {
    setFirstDayOfCurrentMonth((prev) => addMonths(prev, -1));
  }
  return (
    <div
      className={cn(
        `p-4 text-sm text-center rounded-lg border shadow ${className}`
      )}
      {...props}
    >
      <div className="flex items-center justify-between mb-2">
        <Button size="icon" variant="ghost" onClick={previousMonth}>
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon aria-hidden />
        </Button>
        <p className="font-semibold">{format(firstDayOfCurrentMonth, "MMMM yyyy")}</p>
        <Button size="icon" variant="ghost" onClick={nextMonth}>
          <span className="sr-only">Next month</span>
          <ChevronRightIcon aria-hidden />
        </Button>
      </div>
      <div role="grid" className="grid grid-cols-7 gap-1">
        {daysOfTheWeek.map((d) => (
          <div key={d} className="aspect-video">
            {d}
          </div>
        ))}
        {daysOfTheMonth.map((d) => (
          <button
            key={d.toDateString()}
            className={cn(
              "aspect-square hover:bg-neutral-200 rounded-md disabled:opacity-50 disabled:hover:bg-transparent transition",
              isEqual(d, today) && "text-blue-500",
              isEqual(d, selected) &&
                "bg-primary hover:bg-primary/90 text-white"
            )}
            disabled={isDisabled(d)}
            onClick={() => handleClick(d)}
          >
            <time dateTime={d.toDateString()}>{format(d, "d")}</time>
          </button>
        ))}
      </div>
    </div>
  );
}
