"use client";

import { use, useState } from "react";

import Calendar from "@/components/ui/calendar";
import { startOfToday } from "date-fns";
import ConfirmationCard from "@/components/contact-form/confirmation-card";

export default function Home() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  return (
    <main>
      <Calendar selected={selectedDay} setSelected={setSelectedDay} className="max-w-xs"/>
      <ConfirmationCard />
    </main>
  );
}
