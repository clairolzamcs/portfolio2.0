import React from "react";
import Typewriter from "typewriter-effect";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumSquare,
  AiFillMail,
} from "react-icons/ai";

const socialIcons = [
  // { icon: AiFillTwitterCircle, href: "https://twitter.com/clayrollsome" },
  { icon: AiFillInstagram, href: "https://www.instagram.com/clayrollsnaps/" },
  { icon: AiFillLinkedin, href: "https://www.linkedin.com/in/clairolzamcs/" },
  { icon: AiFillGithub, href: "https://github.com/clairolzamcs" },
  { icon: AiFillMediumSquare, href: "https://medium.com/@clairolzamcs" },
  { icon: AiFillMail, href: "mailto:clairolzamsalazar@gmail.com" },
];

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
        <span className="text-red-600 font-bold"> Clay </span> for short! :) I'm
        a full-stack developer with a passion for cloud computing and fintech,
        with a Bachelor's degree in Information Technology and a Postgraduate
        degree in Financial Technology and Cloud Architecture and
        Administration. I thrive on innovation, bridging front-end and back-end
        technologies to create impactful solutions. My world revolves around
        technology, art, and security. With expertise in DevOps and a sharp eye
        for cybersecurity, I'm committed to crafting robust systems. Join me on
        an exciting journey into the ever-evolving realm of tech and innovation.
        Beyond the screen, I'm an adventurous spirit, capturing the world
        through my camera lens and exploring new activities, from coding to
        sports. Let's connect and explore the world of technology and innovation
        together!
      </p>

      <div className="text-5xl flex justify-center gap-10 text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 ">
        {socialIcons.map((social, index) => (
          <a key={index} href={social.href} className="hover:text-red-800">
            {React.createElement(social.icon)}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center text-center mx-auto overflow-hidden">
        {/* Your image code here */}
      </div>
    </div>
  );
};

export default About;
