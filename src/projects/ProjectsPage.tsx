import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import "bootstrap/dist/css/bootstrap.css";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  return (
    <>
      <div>
        <div >
          <h1>Projects</h1>
        
          <ProjectList projects={MOCK_PROJECTS} ></ProjectList>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
