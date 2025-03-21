import { useState, useEffect, Fragment } from 'react';

import { ProjectCard } from '.'
import { SearchField, SelectField } from './elements/form'
import { config } from '../data'

export default function ProjectsSection() {
  const [categories, setCategories] = useState([]);
  const projects = config.siteContent.projects.projects

  useEffect(() => {
    const allCategories = projects.flatMap((project) => project.categories);
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className='col projects-sect-container'>
      <div className='tools-sect'>
        <SearchField />
        <SelectField items={categories} defaultItem='النوع' />
      </div>
      <div className='projects-sect'>
        {projects.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard
              project={project}
              className={(index + 1) % 2 !== 1 ? ' reverse' : ''}
            />
            {(index !== projects.length - 1) && <hr />}
          </Fragment>
        ))}
      </div>
    </div>
  )
}