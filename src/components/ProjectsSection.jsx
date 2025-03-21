import { useState, useEffect, Fragment } from 'react';

import { ProjectCard } from '.'
import { SearchField, SelectField } from './elements/form'
import { config } from '../data'

export default function ProjectsSection() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = config.siteContent.projects.projects

  useEffect(() => {
    const allCategories = projects.flatMap((project) => project.categories);
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, [projects]);

  const filteredProjects = projects.filter(project => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(lowerCaseQuery) ||
      project.description.toLowerCase().includes(lowerCaseQuery);
      
    const matchesCategory = selectedCategory === 'all' || 
      project.categories.includes(selectedCategory);
      
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='col projects-sect-container'>
      <div className='tools-sect'>
        <SearchField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SelectField
          items={categories}
          defaultItem='النوع'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
      </div>
      <div className='projects-sect'>
        {filteredProjects.length === 0 ? (
          <div className='no-results'>لا توجد مشاريع مطابقة للبحث</div>
        ) : (
          filteredProjects.map((project, index) => (
            <Fragment key={project.id || index}>
              <ProjectCard
                project={project}
                className={(index + 1) % 2 !== 1 ? ' reverse' : ''}
              />
              {(index !== filteredProjects.length - 1) && <hr />}
            </Fragment>
          ))
        )}
      </div>
    </div>
  )
}