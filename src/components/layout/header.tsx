"use client";

import { useState } from "react";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
    const [open, setOpen] = useState(false);
  return (
    <header className={cn(`h-20 flex items-center ${className}`)}>
      <div className="flex items-center justify-between mx-auto container">
        <p>Manuel Alejandro</p>
        <nav>
          <ul className="flex">
            <li>
              <Button variant={"link"} asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant={"link"} asChild>
                <Link href="/">Services</Link>
              </Button>
            </li>
            <li>
              <Popover onOpenChange={()=>setOpen(prev => !prev)}>
                <PopoverTrigger asChild>
                  <Button variant={"ghost"}>
                    Services <ChevronDownIcon className={cn("transition-all", open && "rotate-x-180")}/>
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="center">
                  <ul className="grid grid-cols-3 gap-x-4 text-sm">
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant={"link"} className="p-0" asChild>
                        <Link href="/">Lorem, ipsum.</Link>
                      </Button>
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            </li>
            <li>
              <Button variant={"link"} asChild>
                <Link href="/">Team</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <Button className="bg-yellow-600 rounded-full" asChild>
          <Link href="#">Schedule A Consultation</Link>
        </Button>
      </div>
    </header>
  );
}
