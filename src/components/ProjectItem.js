import React from "react";

function ProjectItem({ name, about, technologies }) {

  const createSpan = technologies.map((technology) =>{
    return(
      <span>{technology}</span>
    )
  }
  )



  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {createSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
