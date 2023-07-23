"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const Navbar=() => {
  return (
    <nav className={`bg-white px-2 py-2 border-2  fixed top-5 m-4 rounded-3xl  shadow-2xl  shadow-white mt-1 animate-bounce`}>
      <ul className="text-black  text-xl flex gap-4">
        <li className="bg-white px-5 py-1  rounded-2xl shadow-gray-800 hover:shadow-have-shadow border-transparent">
          <a href="#home">Home</a>
        </li>
        <li className=" bg-white px-5 py-1  rounded-2xl shadow-gray-800 hover:shadow-have-shadow border-transparent">
          <a href="#works">work</a>
        </li>
        <li className=" bg-white px-5 py-1  rounded-2xl shadow-gray-800 hover:shadow-have-shadow border-transparent">
          <a href="#about">about</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
