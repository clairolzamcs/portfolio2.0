import React from "react";
import Image from "next/image";

import medicalAvenue from "../../public/images/medical-avenue-web.png";
import payroll from "../../public/images/payroll.png";
import twoTierK8sEks from "../../public/images/two-tier-k8s-eks.png";
import twoTierTf from "../../public/images/two-tier-tf.png";
import socio from "../../public/images/socio.png";
import wealy from "../../public/images/wealy.png";

const Projects = ({ portfolioStyle }) => {
  return (
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
          accomplishments but also to demonstrate my creativity, problem-solving
          abilities, and professional growth. Whether you're an employer,
          client, or collaborator, my portfolio aims to provide a comprehensive
          view of my capabilities. It offers insights into my thought process,
          project approach, and overall professional journey. Take a dive into
          my portfolio, and you'll gain a deeper understanding of my skills and
          assess how well I align with your specific needs.
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
  );
};

export default Projects;
