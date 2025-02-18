"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectsData = [
  {
    id: 1,
    title: "Rock Paper Scissors",
    description:
      "Rock Paper Scissors is a simple web-based game built using HTML, CSS, and JavaScript.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],

    gitUrl: "https://github.com/pumpking786/rps",
    previewUrl: "https://pumpking786.github.io/rps/",
  },
  {
    id: 2,
    title: "Currency Converter",
    description:
      "This is a currency converter webpage built using vite in react.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/pumpking786/Currency-Converter",
    previewUrl: "https://currency-converter-sable-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe is a simple web-based game built using HTML, CSS, and JavaScript.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pumpking786/tic-tac-toe",
    previewUrl: "https://pumpking786.github.io/tic-tac-toe/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section className="mt-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-1 md:mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-3 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")} // Wrap handleTagChange
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")} // Pass "Web" argument
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
