import React from "react";

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

const Skills = () => {
  return (
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

        <h2 className="text-3xl p-12 dark:text-gray-200">Other Technologies</h2>
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
  );
};

export default Skills;
