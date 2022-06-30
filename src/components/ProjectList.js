import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const renderProjects = projects.map(
    (project) => {
      return(
        <ProjectItem technologies = {project.technologies} key = {project.id} />
      )
    }
  )


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProjects}</div>
    </div>
  );
}

export default ProjectList;
