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

const SkillEntry = ({ icon, label }) => (
  <div className="p-2 text-lg dark:text-gray-400">
    {icon}
    {label}
  </div>
);

const Skills = () => {
  const iconStyle = "w-20 h-20 text-red-800 md:w-36 md:h-36 lg:w-20 lg:h-20";

  const softwareDevelopmentSkills = [
    { icon: <BiLogoHtml5 className={iconStyle} />, label: "HTML" },
    { icon: <BiLogoCss3 className={iconStyle} />, label: "CSS" },
    { icon: <BiLogoJavascript className={iconStyle} />, label: "Javascript" },
    { icon: <BiLogoReact className={iconStyle} />, label: "React" },
    { icon: <BiLogoAngular className={iconStyle} />, label: "Angular" },
    { icon: <BiLogoPython className={iconStyle} />, label: "Python" },
    { icon: <TbBrandNextjs className={iconStyle} />, label: "Nextjs" },
    { icon: <BiLogoNodejs className={iconStyle} />, label: "Nodejs" },
    { icon: <SiExpress className={iconStyle} />, label: "Expressjs" },
    { icon: <BiLogoTailwindCss className={iconStyle} />, label: "Tailwind CSS" },
    { icon: <BiLogoBootstrap className={iconStyle} />, label: "Bootstrap" },
    { icon: <BiLogoMongodb className={iconStyle} />, label: "Mongo DB" },
    { icon: <SiMysql className={iconStyle} />, label: "My SQL" },
  ];

  const cloudDevOpsSkills = [
    { icon: <BiLogoAws className={iconStyle} />, label: "AWS" },
    { icon: <SiMicrosoftazure className={iconStyle} />, label: "Azure" },
    { icon: <SiTerraform className={iconStyle} />, label: "Terraform" },
    { icon: <SiAnsible className={iconStyle} />, label: "Ansible" },
    { icon: <SiGnubash className={iconStyle} />, label: "BASH" },
    { icon: <DiLinux className={iconStyle} />, label: "Linux" },
    { icon: <SiKubernetes className={iconStyle} />, label: "Kubernetes" },
    { icon: <SiDocker className={iconStyle} />, label: "Docker" },
    { icon: <SiJenkins className={iconStyle} />, label: "Jenkins" },
    { icon: <BiLogoGit className={iconStyle} />, label: "Git" },
    { icon: <BiLogoGithub className={iconStyle} />, label: "GitHub" },
    { icon: <BiLogoGitlab className={iconStyle} />, label: "GitLab" },
    { icon: <SiBitbucket className={iconStyle} />, label: "Bitbucket" },
    { icon: <SiVercel className={iconStyle} />, label: "Vercel" },
  ];

  const uiUxDesignSkills = [
    { icon: <BiLogoFigma className={iconStyle} />, label: "Figma" },
    { icon: <SiMiro className={iconStyle} />, label: "Miro" },
    { icon: <SiDribbble className={iconStyle} />, label: "Dribbble" },
  ];

  const otherTechnologiesSkills = [
    { icon: <SiJira className={iconStyle} />, label: "Jira" },
    { icon: <SiConfluence className={iconStyle} />, label: "Confluenece" },
    { icon: <SiAsana className={iconStyle} />, label: "Asana" },
    {
      icon: <SiMicrosoftsharepoint className={iconStyle} />,
      label: "Sharepoint",
    },
  ];

  const renderSkillCategory = (skills) => (
    <div className="flex flex-wrap justify-evenly">
      {skills.map((skill, index) => (
        <SkillEntry key={index} {...skill} />
      ))}
    </div>
  );

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
        {renderSkillCategory(softwareDevelopmentSkills)}

        <div className="flex flex-wrap justify-evenly"></div>

        <h2 className="text-3xl p-12 dark:text-gray-200">
          Cloud Computing and DevOps
        </h2>
        {renderSkillCategory(cloudDevOpsSkills)}

        <h2 className="text-3xl p-12 dark:text-gray-200">UI/UX Design</h2>
        {renderSkillCategory(uiUxDesignSkills)}

        <h2 className="text-3xl p-12 dark:text-gray-200">Other Technologies</h2>
        {renderSkillCategory(otherTechnologiesSkills)}
      </div>
    </div>
  );
};

export default Skills;
