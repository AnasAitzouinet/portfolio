"use client"
import About from "@/components/About";
import Works from "@/components/Works";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {

  return (
    <div className="font-mono ">
      <div className="flex flex-row justify-center items-center">
        <Navbar />
      </div>
      <main className="mt-28" >
        <Hero  />
        <h1 className="text-center my-20 text-4xl underline underline-offset-8 " id="works">My work</h1>
        <div className=" m-8">
          <Works/>
        </div>
        <h1 className="text-center my-18 text-4xl underline underline-offset-8 " id="works">About me</h1>
        <div className="m-10">
          <About/>
        </div>
      </main>
    </div>
  );
}
