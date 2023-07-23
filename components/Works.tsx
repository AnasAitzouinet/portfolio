"use client";
import Image from "next/image";
import React from "react";

const worksProject = [
  {
    id: 1,
    title: "Microservice architecture project",
    status: {
        code : "done",
        color : "green"
    },
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse aspernatur dolor ratione quisquam beatae corrupti quaerat obcaecati eius veniam itaque assumenda temporibus alias maxime, quidem, magni ut rem officia.",
    image: "/hero.png",
    link: "",
  },
  {
    id: 2,
    title: "FreeLance project ",
    status: {
        code : "on progress",
        color : "orange"
    },
    description:
      "this website is a freelance project that i made for a client, it's a website for startup company that provide a service for people who want to make a money using their car, the website is made using nextjs and tailwindcss, with supabase as the database",
    image: "/hero.png",
    link: "https://github.com/AnasAitzouinet/AdRoad-typscript",
  },
];
const Works = () => {
  return (
    <div className="flex flex-row flex-wrap ">
      {worksProject.map((project) => (
        <div
          key={project.id}
          className="flex flex-col w-[30%] h-[80vh] m-5 border-white border border-dashed p-5 overflow-auto"
        >
          <div className="border-white border border-dashed">
            <Image src={project.image} alt="random" width={300} height={300} />
          </div>
          <h1 className="text-purple-500 pt-2 underline underline-offset-10 leading-tight">
            <a target="_blank" href={project.link}>
            {project.title} <br />
            </a>
          </h1>
            <span className={`text-[15px] pb-2 ${project.status.code === "on progress" && `text-orange-500`} ${project.status.code === "done" && `text-green-500`}`}>{project.status.code}</span>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Works;
