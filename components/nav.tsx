"use client";
import React, { useState } from "react";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Close } from "@radix-ui/react-dialog";

const Nav = () => {
  const [checked, setChecked] = useState(false);

  return (
    <nav className="py-2   sm:py-5">
      <Sheet>
        <SheetTrigger asChild>
          <UseAnimations
            animation={menu2}
            size={40}
            color="#fff"
            strokeColor="#fff"
            reverse={checked}
            // onClick={() => setChecked(false)}
            className="sm:hidden z-50 cursor-pointer text-white"
          />
        </SheetTrigger>

        <SheetContent className="bg-  border-none shadow-none" side={"left"}>
          <ul className=" flex flex-col  gap-5 text-xl text-[#f9f0facc] font-light uppercase">
            <li className="text-white ">
              <a href="/">Home</a>
            </li>
            <li className="text-white ">
              <a href="/">About me</a>
            </li>
            <li className="text-white ">
              <a href="/">Skills</a>
            </li>
            <li className="text-white ">
              <a href="/">Projects</a>
            </li>
          </ul>
          <SheetClose asChild>
            <UseAnimations
              animation={menu2}
              size={40}
              color="#fff"
              strokeColor="#fff"
              reverse={true}
              onClick={() => setChecked(false)}
              className="absolute right-[-40px] top-1 z-50 cursor-pointer text-white"
            />
          </SheetClose>
        </SheetContent>
      </Sheet>

      <ul className=" hidden sm:flex flex-row  gap-5 text-xl text-[#f9f0facc] font-light uppercase">
        <li className="hover:text-white hover:scale-125  hover:px-2 transition-all duration-300 ease-in-out">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-white hover:scale-125  hover:px-2 transition-all duration-300 ease-in-out">
          <a href="/">About me</a>
        </li>
        <li className="hover:text-white hover:scale-125  hover:px-2 transition-all duration-300 ease-in-out">
          <a href="/">Skills</a>
        </li>
        <li className="hover:text-white hover:scale-125  hover:px-2 transition-all duration-300 ease-in-out">
          <a href="/">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
