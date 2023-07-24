"use client";

import Image from "next/image";
import Contact from "@/components/Contact";
import { Fragment, useRef, useState } from 'react'

const skils = [
  {
    id: 1,
    name: "NextJS",
    image: "/nextjs.jpg",
  },
  {
    id: 2,
    name: "Firebase",
    image: "/firebase.png",
  },
  {
    id: 3,
    name: "NodeJS",
    image: "/nodejs.png",
  },
  {
    id: 4,
    name: "MongoDB",
    image: "/mongodb.png",
  },
  {
    id: 5,
    name: "NodeJS",
    image: "/python.png",
  },
  {
    id: 6,
    name: "Supabase",
    image: "/supabase.png",
  },
  {
    id: 7,
    name: "MySQL",
    image: "/myql.png",
  },
  {
    id: 8,
    name: "ExpressJS",
    image: "/express.png",
  },
  {
    id: 9,
    name: "Php",
    image: "/php.png",
  },
  {
    id: 10,
    name: "TailwindCSS",
    image: "/tailwind.png",
  },
  {
    id: 11,
    name: "PostgreSQL",
    image: "/postgres.png",
  },
  {
    id: 12,
    name: "typescript",
    image: "/ts.png",
  },
];
const About = () => {
  const [opens, setOpens] = useState(false)
  const cancelButtonRefs = useRef(null)
  return (
    <section>
      <p className="text-center text-lg">
        <span className="text-purple-500">
          Anas is a dedicated Full Stack Developer
        </span>{" "}
        with a broad range of technical skills. He has a proven track record of
        successfully delivering web development projects for clients, building
        dynamic and captivating websites. Anas is actively seeking internship
        opportunities to further enhance his skills and contribute to a
        forward-thinking team. Passionate about continuous learning and staying
        updated with the latest technologies, he is driven to create innovative
        and efficient web solutions.
      </p>
      <h1 className="text-center my-10 text-2xl underline underline-offset-8">
        Skills
      </h1>
      <div className=" flex flex-row flex-wrap text-center">
        {skils.map((skill) => (
          <div className="border border-dashed p-10" key={skill.id}>
            <Image
              src={skill.image}
              className="p-1"
              alt={skill.name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center ">  
        <button
        onClick={() => setOpens(true)}
        className="border border-dashed p-5 text-center m-10 text-2xl underline underline-offset-8 transition-all hover:bg-white hover:text-black hover:border-dashed hover:border-black ">
          Contact me
        </button>
        <Contact open={opens} setOpen={setOpens} cancelButtonRef={cancelButtonRefs}/>
      </div>
    </section>
  );
};

export default About;
