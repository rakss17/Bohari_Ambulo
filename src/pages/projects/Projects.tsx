import React from "react";
import { projects } from "./projects";
import Card from "../../components/card/Card";
import { ThemedText } from "../../components/themedtext/ThemedText";

export default function Projects() {
  return (
    <section className="mt-about-margin-top-custom bg-transparent h-auto flex flex-col">
      <div className="flex flex-col">
        <ThemedText
          text="Recent projects"
          className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center"
        />
        <div className="mt-5 w-full flex-wrap gap-10 h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-center lg:items-stretch xl:items-stretch 2xl:items-stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              image_source={project.imageSource}
              image_alt={project.imageAlt}
              project_name={project.projectName}
              position={project.position}
              description={project.description}
              backend_link={project.backEndLink}
              frontend_link={project.frontEndLink}
              apkfile_link={project.apkFileLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
