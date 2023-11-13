"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useForm } from "@formspree/react";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumSquare,
  AiFillMail,
} from "react-icons/ai";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoPython,
  BiLogoJavascript,
  BiLogoAngular,
  BiLogoNodejs,
  BiLogoAws,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoFigma,
  BiLogoGitlab,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import {
  SiExpress,
  SiMysql,
  SiMicrosoftazure,
  SiMiro,
  SiTerraform,
  SiAnsible,
  SiGnubash,
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiBitbucket,
  SiJira,
  SiConfluence,
  SiAsana,
  SiMicrosoftsharepoint,
  SiTrello,
  SiDribbble,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiLinux } from "react-icons/di";

import medicalAvenue from "../../public/images/medical-avenue-web.png";
import payroll from "../../public/images/payroll.png";
import twoTierK8sEks from "../../public/images/two-tier-k8s-eks.png";
import twoTierTf from "../../public/images/two-tier-tf.png";
import socio from "../../public/images/socio.png";
import wealy from "../../public/images/wealy.png";

const portfolioStyle = {
  layout: "responsive",
  hover: "opacity-75",
};

const scroll = {
  scrollBehavior: "smooth !important",
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, handleSubmit] = useForm("xwkdzjzw");
  const notify = () => toast("Email submitted successfully!");

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950">
        <section className=" min-h-screen">
          <nav className="py-14 mb-12 flex justify-between dark:text-white">
            <h1 className="text-4xl hover:text-red-800 font-lucyTheCat px-6 py-2 ">
              {" "}
              <a href="#"> Clay </a>{" "}
            </h1>
            <nav className="hidden lg:block md:block">
              <ul className="flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4">
                <li className="hover:text-red-800">
                  {" "}
                  <a href="#about" style={scroll}>
                    About
                  </a>{" "}
                </li>
                <li className="hover:text-red-800">
                  {" "}
                  <a href="#skills" style={scroll}>
                    Skills
                  </a>{" "}
                </li>
                <li className="hover:text-red-800">
                  {" "}
                  <a href="#projects" style={scroll}>
                    Projects
                  </a>{" "}
                </li>
                <li className="hover:text-red-800">
                  {" "}
                  <a href="#contact" style={scroll}>
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </nav>

            <ul className="flex items-center justify-end">
              <li>
                {" "}
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl hover:text-red-800 dark:text-gray-200 "
                />{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1VoumIAA5ZWDu0zV31e_tTmvY3GmF9BKL/view?usp=sharing"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-400 hover:to-yellow-500 px-6 py-2 text-white rounded-xl ml-8">
                    Resume{" "}
                  </button>{" "}
                </a>
              </li>
            </ul>
          </nav>

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
              Or call me Clay for short! I'm a full-stack developer with a
              passion for cloud computing and fintech, with a Bachelor's degree
              in Information Technology and a Postgraduate degree in Financial
              Technology and Cloud Architecture and Administration. I thrive on
              innovation, bridging front-end and back-end technologies to create
              impactful solutions. My world revolves around technology, art, and
              security. With expertise in DevOps and a sharp eye for
              cybersecurity, I'm committed to crafting robust systems. Join me
              on an exciting journey into the ever-evolving realm of tech and
              innovation. Beyond the screen, I'm an adventurous spirit,
              capturing the world through my camera lens and exploring new
              activities, from coding to sports. Let's connect and explore the
              world of technology and innovation together!
            </p>
            {/* flex justify-center flex-col items-center */}
            <div className="text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 ">
              <a
                href="https://twitter.com/clayrollsome"
                className="hover:text-red-800"
              >
                <AiFillTwitterCircle />
              </a>
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
        </section>

        {/* Skills */}
        <div id="skills">
          <div>
            <h1 className="text-5xl py-3 text-black dark:text-gray-200">
              {" "}
              My Tech Stack
            </h1>
          </div>
          <div className="text-center rounded-xl my-10">
            <h2 className="text-3xl p-12 dark:text-gray-200">
              {" "}
              Software Development{" "}
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoHtml5 className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                HTML
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoCss3 className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                CSS
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoJavascript className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Javascript
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoReact className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                React
              </div>
              <div className="p-2 text-lg dark:text-gray-400 ">
                <BiLogoAngular className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Angular
              </div>

              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoPython className="w-20 h-20 md:w-36 md:h-36 lg:w-20 lg:h-20 text-red-800" />
                Python
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <TbBrandNextjs className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Next Js
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoNodejs className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Node Js
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiExpress className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />{" "}
                Express Js
              </div>

              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoTailwindCss className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Tailwind CSS
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoBootstrap className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Bootstrap
              </div>

              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoMongodb className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                MongoDB
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiMysql className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                MySQL
              </div>
            </div>

            <div className="flex flex-wrap justify-evenly"></div>

            <h2 className="text-3xl p-12 dark:text-gray-200">
              Cloud Computing and DevOps
            </h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoAws className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />{" "}
                AWS
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiMicrosoftazure className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Azure
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiTerraform className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Terraform
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiAnsible className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Ansible
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiGnubash className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Bash
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <DiLinux className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Linux
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiKubernetes className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Kubernetes
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiDocker className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Docker
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiJenkins className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Jenkins
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoGit className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Git
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoGitlab className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                GitLab
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoGithub className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                GitHub
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiBitbucket className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                BitBucket
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiVercel className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Vercel
              </div>
            </div>

            <h2 className="text-3xl p-12 dark:text-gray-200">UI/UX Design</h2>
            <div className="flex flex-wrap justify-evenly">
              <div className="p-2 text-lg dark:text-gray-400">
                <BiLogoFigma className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Figma
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiMiro className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Miro
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiDribbble className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Dribbble
              </div>
            </div>

            <h2 className="text-3xl p-12 dark:text-gray-200">
              Other Technologies
            </h2>
            <div className="flex flex-wrap justify-evenly mb-5">
              <div className="p-2 text-lg dark:text-gray-400">
                <SiJira className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Jira
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiConfluence className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Confluence
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiAsana className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Asana
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiTrello className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Trello
              </div>
              <div className="p-2 text-lg dark:text-gray-400">
                <SiMicrosoftsharepoint className="w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20" />
                Sharepoint
              </div>
            </div>
          </div>
        </div>

        <section className="py-10" id="projects">
          <div>
            <h3 className="text-5xl py-2 mb-6 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-grey-800 dark:text-gray-200">
              My portfolio is a showcase of my diverse skills in{" "}
              <span className="text-red-500">
                {" "}
                Full Stack development, UI/UX design, and DevOps
              </span>
              . It features a variety of projects, including deploying a{" "}
              <span className="text-red-500">
                {" "}
                <a
                  href="https://github.com/clairolzamcs/2-tiered-web-app-k8s-eks"
                  target="_blank"
                  className="hover:underline"
                >
                  two-tiered web application to a managed kubernetes cluster on
                  Amazon EKS with pod auto-scaling and automation
                </a>
                ,{" "}
                <a
                  href="https://github.com/clairolzamcs/2-tiered-web-app-automation-terraform"
                  target="_blank"
                  className="hover:underline"
                >
                  {" "}
                  automating a Two-Tier web application with Terraform
                </a>
              </span>
              , creating{" "}
              <span className="text-red-500">
                <a
                  href="https://dashboard.medicalavenuekorea.com/en/login"
                  target="_blank"
                  className="hover:underline"
                >
                  Medical Avenue Web and Mobile,{" "}
                </a>

                <a
                  href="https://github.com/clairolzamcs/payroll-to-csv-generator"
                  target="_blank"
                  className="hover:underline"
                >
                  Payroll to CSV Generator
                </a>
              </span>
              , and designing{" "}
              <span className="text-red-500">
                {" "}
                <a
                  href="https://www.figma.com/file/ylQNt49TtIGsqGIl6pylPI/Mobile-App-for-Financial-Community?type=design&node-id=0%3A1&mode=design&t=nms9LIwJizguumYC-1"
                  target="_blank"
                  className="hover:underline"
                >
                  Socio Mobile App{" "}
                </a>
              </span>{" "}
              and{" "}
              <span className="text-red-500">
                <a
                  href="https://www.figma.com/file/DEkrHK026HYM4FqGYOK19E/Web-Financial-Application?type=design&node-id=683%3A734&mode=design&t=1aQMlOJlZl2s2sP4-1"
                  target="_blank"
                  className="hover:underline"
                >
                  Wealy Financial web application.
                </a>
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-grey-800 dark:text-gray-200">
              I've curated this collection to not only highlight my past
              accomplishments but also to demonstrate my creativity,
              problem-solving abilities, and professional growth. Whether you're
              an employer, client, or collaborator, my portfolio aims to provide
              a comprehensive view of my capabilities. It offers insights into
              my thought process, project approach, and overall professional
              journey. Take a dive into my portfolio, and you'll gain a deeper
              understanding of my skills and assess how well I align with your
              specific needs.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://dashboard.medicalavenuekorea.com/en/login"
                className="relative"
                target="_blank"
              >
                <Image
                  src={medicalAvenue}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Checkout code on Github"
                />
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl text-center text-black hover:text-3xl md:text-2xl lg:text-2xl">
                    Checkout the website
                  </p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/clairolzamcs/payroll-to-csv-generator"
                className="relative"
                target="_blank"
              >
                <Image
                  src={payroll}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Checkout code on Github"
                />
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl text-center text-black hover:text-3xl md:text-2xl lg:text-2xl">
                    Checkout the website
                  </p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/clairolzamcs/2-tiered-web-app-k8s-eks"
                className="relative"
                target="_blank"
              >
                <Image
                  src={twoTierK8sEks}
                  className="rounded-lg object-cover hover:opacity-50 transition-opacity duration-300"
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Checkout code on Github"
                />
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl">
                    Checkout Code on Github
                  </p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/clairolzamcs/2-tiered-web-app-automation-terraform"
                className="relative"
                target="_blank"
              >
                <Image
                  src={twoTierTf}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Checkout code on Github"
                />
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl">
                    Checkout Code on Github
                  </p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://www.figma.com/file/ylQNt49TtIGsqGIl6pylPI/Mobile-App-for-Financial-Community?type=design&node-id=0%3A1&mode=design&t=nms9LIwJizguumYC-1"
                className="relative"
                target="_blank"
              >
                <Image
                  src={socio}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Checkout code on Github"
                />
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl text-center text-black hover:text-3xl md:text-2xl lg:text-2xl">
                    Check Design on Figma
                  </p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://www.figma.com/file/DEkrHK026HYM4FqGYOK19E/Web-Financial-Application?type=design&node-id=683%3A734&mode=design&t=1aQMlOJlZl2s2sP4-1"
                className="relative"
                target="_blank"
              >
                <Image
                  src={wealy}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  style={portfolioStyle}
                  title="Checkout code on Github"
                />
                <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl text-center text-black hover:text-3xl md:text-2xl lg:text-2xl">
                    Check Design on Figma
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="py-10" id="contact">
          <h1 className="text-5xl dark:text-gray-200 py-5">Let's Connect!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-2 border-red-800 p-2 rounded-lg w-full dark:border-red-800 dark:bg-black dark:text-gray-200"
            />
            <label htmlFor="email" className="dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-red-800 p-2 rounded-lg w-full dark:border-red-800 dark:bg-black dark:text-gray-200 "
            />
            <label htmlFor="message" className="dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="border-2 border-red-800  p-2 py-4 rounded-lg w-full dark:border-red-800 dark:bg-black dark:text-gray-200 "
            ></textarea>
            <button
              disabled={state.submitting}
              onClick={notify}
              className="bg-gradient-to-r from-red-800 to-red-800  text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
            {state.succeeded && <ToastContainer />}
          </form>
        </section>
      </main>
      <Analytics />
    </div>
  );
}
