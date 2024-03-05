import React from 'react'
import { FaInstagram,FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
             <a href='https://www.instagram.com/its_vidsinghal_/'><FaInstagram /></a> 
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/21vidushi'><FaGithub /> </a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/vidushi-singhal-ba3980226/'> <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media