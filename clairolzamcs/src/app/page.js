"use client";

import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { toast } from 'react-toastify';

import Navbar from "@/components/navBar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

const portfolioStyle = {
  layout: "responsive",
  hover: "opacity-75",
};

const scroll = {
  scrollBehavior: "smooth !important",
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const notify = () => toast("Email submitted successfully!");

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950">
        <section className=" min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scroll={scroll} />
          <About/>
        </section>
       <Skills/>
       <Projects portfolioStyle={portfolioStyle}/>
       <Contact notify={notify}/>
      </main>
      <Analytics />
    </div>
  );
}
