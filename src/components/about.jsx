import React from "react";
import Typewriter from "typewriter-effect";

import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMediumSquare,
    AiFillMail,
  } from "react-icons/ai";

const About = () => {
  return (
    <div className="text-center p-40 lg:p-40 md:p-20" id="about">
      <h2 className="text-5xl py-10 bg-gradient-to-r from-green-700 via-red-500 to-yellow-400 text-transparent bg-clip-text animate-gradient font-californiaSun md:text-6xl">
        <Typewriter
          options={{
            strings: ["Hey! I'm Clairol! :)"],
            autoStart: true,
            loop: true,
            delay: 90,
            skipAddStyles: true,
            deleteSpeed: 50,
            pauseFor: 1000,
          }}
        />
      </h2>

      <h3 className="text-3xl py-2 dark:text-white md:text-3xl">
        Full Stack Developer and Cloud Enthusiast
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto">
        Or call me Clay for short! I'm a full-stack developer with a passion for
        cloud computing and fintech, with a Bachelor's degree in Information
        Technology and a Postgraduate degree in Financial Technology and Cloud
        Architecture and Administration. I thrive on innovation, bridging
        front-end and back-end technologies to create impactful solutions. My
        world revolves around technology, art, and security. With expertise in
        DevOps and a sharp eye for cybersecurity, I'm committed to crafting
        robust systems. Join me on an exciting journey into the ever-evolving
        realm of tech and innovation. Beyond the screen, I'm an adventurous
        spirit, capturing the world through my camera lens and exploring new
        activities, from coding to sports. Let's connect and explore the world
        of technology and innovation together!
      </p>
      {/* flex justify-center flex-col items-center */}
      <div className="text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 ">
        {/* <a
          href="https://twitter.com/clayrollsome"
          className="hover:text-red-800"
        >
          <AiFillTwitterCircle />
        </a> */}
        <a
          href="https://www.linkedin.com/in/clairolzamcs/ "
          className="hover:text-red-800"
        >
          <AiFillLinkedin />
        </a>
        {/* <a href='https://youtube.com/@kshitijdarwhekar'  className='hover:text-red-800'><AiFillYoutube /></a> */}
        <a
          href="https://github.com/clairolzamcs"
          className="hover:text-red-800"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://medium.com/@clairolzamcs"
          className="hover:text-red-800"
        >
          <AiFillMediumSquare />
        </a>
        <a
          href="mailto:clairolzamsalazar@gmail.com"
          className="hover:text-red-800"
        >
          <AiFillMail />
        </a>
      </div>
      <div className="flex items-center justify-center text-center mx-auto overflow-hidden">
        {/* <div className="relative mx-auto bg-gradient-to-b from-red-800 rounded-full w-64 h-64 mt-20 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96">
                <Image  src={clay} fill={true} />
              </div> */}
      </div>
    </div>
  );
};

export default About;
