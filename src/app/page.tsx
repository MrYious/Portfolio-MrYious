"use client"

import { FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa"

import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import { MyData } from './_data/data'
import NavBar from './Navbar'
import Project from "./Project"
import Skill from "./Skill"
import { Typewriter } from 'react-simple-typewriter'
import avatar from './_assets/images/avatar.png'

export default function Home() {
  return (<>
    <NavBar></NavBar>
    <main id='home' className="flex min-h-screen items-center bg-white text-black">
      <div className="flex border-black  items-center justify-between w-full px-40 py-10 border-y-2 ">
        <div className="flex flex-col gap-5">
          <div className=" text-5xl font-bold">{MyData.intro.name}</div>
          <div className=" text-2xl font-bold">{MyData.intro.title}</div>
          <div className=" font-medium ">
            <Typewriter
              words={MyData.intro.desc}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={30}
              deleteSpeed={10}
              delaySpeed={2000}
            />
          </div>
          <div className="flex gap-5">
            <a href="/Resume - Mark Edison Rosario.pdf" download="Resume - Mark Edison Rosario">
              <button onClick={()=>{}} className="flex border-[3px] border-black px-2 py-2 text-sm rounded items-center gap-2 font-medium hover:shadow-black shadow-md">
                <FaFileDownload />
                CV / Resume
              </button>
            </a>
            <button onClick={()=>{window.open(MyData.intro.links.github, "_blank", "noreferrer")}} className="flex border-[3px] border-black px-4 py-2 rounded items-center text-sm gap-2 font-medium  hover:shadow-black shadow-md">
              <FaGithubSquare />
              GitHub
            </button>
            <button onClick={()=>{window.open(MyData.intro.links.linkedin, "_blank", "noreferrer")}} className="flex border-[3px] border-black px-4 py-2 rounded items-center text-sm gap-2  font-medium  hover:shadow-black shadow-md">
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
        <img src={avatar.src} className=' h-[450px]' alt="avatar" />
      </div>
    </main>
    <About about={MyData.about}/>
    <Skill skills={MyData.skills}/>
    <Project projects={MyData.projects}/>
    <Contact contact={MyData.contact}/>
    <Footer/>
  </>);
}
