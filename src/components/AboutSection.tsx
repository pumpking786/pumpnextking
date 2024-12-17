"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const skills = [
  { src: "/images/html.png", alt: "HTML Icon" },
  { src: "/images/css.png", alt: "CSS Icon" },
  { src: "/images/js.png", alt: "JavaScript Icon" },
  { src: "/images/php.png", alt: "JavaScript Icon" },
  { src: "/images/nodejs.png", alt: "React Icon" },
  { src: "/images/react.png", alt: "React Icon" },
  { src: "/images/nextjs.png", alt: "React Icon" },
  { src: "/images/python.png", alt: "React Icon" },
  { src: "/images/mongodb.png", alt: "MongoDB Icon" },
  { src: "/images/mysql.png", alt: "MySQL Icon" },
];
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-7 justify-center ">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <Image
              src={skill.src}
              alt={skill.alt}
              width={80}
              height={80}
              className="w-14 h-14 sm:w-20 sm:h-20"
            />
          </li>
        ))}
      </ul>
    ),
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Fullstack Academy of Code</li>
  //       <li>University of California, Santa Cruz </li>
  //       <li>University of California, Santa Cruz</li>
  //     </ul>
  //   ),
  // },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const selectedTab = TAB_DATA.find((t) => t.id === tab);
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/skills.jpg"
          alt="Profile"
          width={700}
          height={700}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. With experience in
            HTML, CSS, JavaScript, php, Node.js, React, Nextjs, Python, Mongodb,
            mysql and more, I enjoy building dynamic and responsive web
            applications that provide an engaging user experience. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="text-[20px] flex flex-row justify-center justify-start mt-4">
            {/* <TabButton 
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {" "}
            {selectedTab?.content || <div>No content available</div>}
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-8 mx-auto block">
              <a href="/resume/cv.pdf" download="PumpKingCV.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
