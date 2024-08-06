import React from "react";
import { Project } from "./Project";
import PropTypes from 'prop-types';

function descriptionFormat(description) {
  return description.substring(0, 60) + "..."; //didnt go over
}

function ProjectCard(props) {
  const { project } = props;
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{descriptionFormat(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
      </section>
    </div>
  );
}
ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Project).isRequired,
  };//went over one time no actual example

export default ProjectCard; //