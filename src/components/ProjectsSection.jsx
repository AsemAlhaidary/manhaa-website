import { useState, useEffect, Fragment, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProjectCard } from '.'
import { SearchField, SelectField } from './elements/form'
import { useConfig } from './ConfigLoader'

export default function ProjectsSection() {
  const { config, loading, error } = useConfig()
  const [searchParams, setSearchParams] = useSearchParams()
  const [categories, setCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Initialize projects with safe optional chaining
  const projects = useMemo(
    () => config?.siteContent?.projects?.projects || [],
    [config?.siteContent?.projects?.projects]
  )

  // Calculate categories when projects change
  useEffect(() => {
    const allCategories = projects.flatMap((project) => project.categories)
    const uniqueCategories = [...new Set(allCategories)]
    setCategories(uniqueCategories)
  }, [projects])

  // Handle URL parameters after categories are loaded
  useEffect(() => {
    const urlCategory = searchParams.get('category')
    if (urlCategory && categories.includes(urlCategory)) {
      setSelectedCategory(urlCategory)
    }
  }, [categories, searchParams])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    const newSearchParams = new URLSearchParams(searchParams)
    category === 'all'
      ? newSearchParams.delete('category')
      : newSearchParams.set('category', category)
    setSearchParams(newSearchParams)
  }

  const filteredProjects = useMemo(() =>
    projects.filter(project => {
      const lowerCaseQuery = searchQuery.toLowerCase()
      const matchesSearch =
        project.title.toLowerCase().includes(lowerCaseQuery) ||
        project.description.toLowerCase().includes(lowerCaseQuery)

      const matchesCategory = selectedCategory === 'all' ||
        project.categories.includes(selectedCategory)

      return matchesSearch && matchesCategory
    }),
    [projects, searchQuery, selectedCategory]
  )

  if (loading) return null
  if (error) return <div className='error-screen'>خطأ في تحميل الإعدادات: {error.message}</div>

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
          onChange={(e) => handleCategoryChange(e.target.value)}
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