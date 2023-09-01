"use client";
import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
type notify = {
  message: string;
  error: boolean;
};
const notify = ({ message, error }: notify) => {
  if (error) {
    toast.error(message);
  } else {
    toast.success(message);
  }
};

const Nasa = async () => {
  try {
    const response = await fetch("/nasa", { cache: "force-cache" });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error to handle it in the calling code if needed
  }
};
type NasaImage = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

const skills = [
  {
    name: "Mysql",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg",
  },
  {
    name: "Mongodb",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
  },
  {
    name: "Nodejs",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Nextjs",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "Typescript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
  {
    name: "Javascript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Html",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
  },
  {
    name: "Css",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  },
  {
    name: "Tailwindcss",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Github",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  },
  {
    name: "Php",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg",
  },
  {
    name: "Express",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  },
];

type Repo = {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string;
  private: boolean;
  created_at: string;
};

export default function Home() {
  const [nasaImage, setNasaImage] = useState<NasaImage>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [Subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const imageData = await Nasa();
        if (imageData) {
          setNasaImage(imageData);
        }
      } catch (error) {
        // Handle the error here if needed
        console.log(error);
      }
    };

    fetchNasaImage();
  }, []);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/AnasAitzouinet/repos",
        {
          headers: {
            "User-Agent": "AnasAitzouinet",
          },
        }
      );
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic data validation
    if (!name || !email || !Subject || !message) {

      notify({ message: "Please fill in all required fields.", error: true });
      return;
    }

    // Email format validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      notify({ message: "Please enter a valid email address.", error: true });      
      return;
    }

    // Character validation
    const invalidCharsRegex = /[!@#$%^&*()_+={}\[\]:;"'<>,?/\\|]/;
    if (
      invalidCharsRegex.test(name) ||
      invalidCharsRegex.test(Subject) ||
      invalidCharsRegex.test(message)
    ) {
      notify({
        message: "Please remove any invalid characters from the form fields.",
        error: true,
      });

      return;
    }

    const data = {
      name,
      email,
      Subject,
      message,
    };

    try {
      const response = await fetch("/Contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to submit the form. Status code: ${response.status}`
        );
      }

      const res = await response.json();
      notify({ message: 'Thank you for contacting us. We will get back to you soon.', error: false });
      // Handle success here, e.g., show a success message to the user
    } catch (error: any) {
      notify({ message: error.message, error: true });
      // Handle the error here, e.g., show an error message to the user
    }
  };

  return (
    <main className="z-10 ">
      <Toaster />
      
      <video
        src="/bg.mp4"
        loop
        muted
        autoPlay
        className="object-cover w-full h-full fixed z-[-1] "
      />
      <header
        className=" flex flex-row sm:justify-center justify-end items-center  backdrop-blur-lg overflow-hidden 
      fixed border-b border-zinc-100/20 shadow-lg z-10 w-screen
      "
      >
        <Nav />
      </header>
      <main className="pt-10">
        <section className="grid sm:grid-cols-2 h-[89vh]  " id="home">
          <aside className="flex flex-col justify-center w-full items-center py-20">
            <p className="text-[40px]  sm:text-[86px] font-light text-white/60 sm:leading-[4rem] px-5">
              Hello i&apos;m <span className="text-white">Anas</span> <br />
              <span className="sm:text-[56px] text-2xl py-[-20px] ">
                a Full stack Developer
              </span>
            </p>
            <p className="sm:text-[20px] py-5 sm:py-10 px-10 text-white/80">
              Ahoy there! Front-end, back-end—I handle it all like a pro!
              Let&apos;s team up and build some digital magic! ✨💻 Let the
              coding journey begin!
            </p>
          </aside>
          <section className="flex flex-col justify-center items-center mx-2 sm:mx-0">
            {nasaImage && (
              <Image
                src={nasaImage?.url}
                alt={nasaImage?.title}
                width={500}
                height={500}
                className=" rounded-md shadow-lg shadow-purple-500/10"
              />
            )}
            <span className="text-sm text-right w-full px-[6rem] py-2 text-[#A49C9C]">
              Generated By Nasa Open Api
            </span>
          </section>
        </section>

        <article
          className="flex flex-col sm:h-1/2 justify-center items-center py-5 px-4
          sm:mx-10 rounded-xl mt-60 mx-2
          bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
        >
          <h1 className="sm:text-[60px] uppercase py-5 text-white font-thin" id="about_me">
            About me
          </h1>
          <p className="sm:text-xl   text-white/60 text-center sm:px-10 ">
            <span className="text-white">
              Anas is a dedicated Full Stack Developer
            </span>{" "}
            with a broad range of technical skills. He has a proven track record
            of successfully delivering web development projects for clients,
            building dynamic and captivating websites. Anas is actively seeking
            internship opportunities to further enhance his skills and
            contribute to a forward-thinking team. Passionate about continuous
            learning and staying updated with the latest technologies, he is
            driven to create innovative and efficient web solutions.
          </p>
        </article>
        <h1
          id="skills"
          className="sm:text-[60px] text-[40px] uppercase mt-10 text-white font-thin text-center bg-white/5
        border  sm:w-1/3 sm:mx-auto mx-5 border-white/10 shadow-lg rounded-xl
        backdrop-blur-xl"
        >
          Skills
        </h1>
        <article className="p-5 py-10 grid grid-cols-2 sm:grid-cols-7 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10  backdrop-blur-xl rounded-xl p-5
               flex justify-center items-center border border-white/10 shadow-lg
               cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-110
               "
            >
              <Image
                alt={skill.name}
                className="text-white"
                src={skill.url}
                width={500}
                height={500}
              />
            </div>
          ))}
        </article>
        <h1
          id="Projects"
          className="sm:text-[60px] text-[30px] uppercase mt-10 text-white font-thin text-center bg-white/5
        border  sm:w-1/2 sm:mx-auto mx-5 border-white/10 shadow-lg  rounded-xl
        backdrop-blur-xl"
        >
          My Projects
        </h1>
        <p className="text-sm text-center  pt-5 text-[#A49C9C] ">
          These are some of my projects that i&apos;ve worked on some of them
          are not finished yet but i&apos;m working on them , these are
          generated from my github account by using github api
        </p>
      </main>
      <article className="p-5 py-10 grid sm:grid-cols-4 gap-6">
        {repos.map(
          (skill, index) =>
            skill && (
              <a
                href={skill.html_url}
                target="_blank"
                rel="noreferrer"
                key={index}
                className={`bg-white/10   backdrop-blur-xl rounded-xl py-5 gap-5
                 border border-white/10 shadow-lg 
                cursor-pointer hover:bg-white/20 transition-all duration-300 relative
                col-span-${skill.name.length > 15 ? 2 : 1}
                `}
              >
                <Image
                  src={skills[10].url}
                  alt={skills[10].name}
                  className="h-8 absolute top-2 right-2 w-auto"
                  height={500}
                  width={500}
                />
                <div className="flex flex-col justify-start items-start px-5">
                  <h1 className="text-white text-xl ">{skill.name} </h1>
                  <p className="text-white/60 text-sm">{skill.description}</p>
                </div>
              </a>
            )
        )}
      </article>
      <h1
        id="skills"
        className="sm:text-[60px] text-[30px] uppercase mt-10 text-white font-thin text-center bg-white/5
        border  sm:w-1/2 sm:mx-auto mx-5 border-white/10 shadow-lg  rounded-xl
        backdrop-blur-xl"
      >
        Contact me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="h-1/2 flex flex-col bg-white/10 backdrop-blur-lg
        rounded-xl shadow-lg border border-white/10 gap-5
        py-5 px-10 mx-5 my-10"
      >
        <h2 className="text-white text-center text-[30px] font-thin">
          Send me a Message{" "}
        </h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className=" rounded-xl p-5"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="rounded-xl p-5"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className=" rounded-xl p-5"
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className=" rounded-xl p-5"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="submit"
          value="Send"
          className=" rounded-xl p-5 bg-white/10 text-white
            cursor-pointer hover:bg-white/60 hover:text-gray-800 hover:font-bold transition-all duration-300 backdrop-blur-xl
            "
        />
      </form>
    </main>
  );
}
