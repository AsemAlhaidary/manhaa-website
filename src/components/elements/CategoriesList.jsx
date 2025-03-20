import { Category } from '.'

export default function CategoriesList({ categories }) {
  return (
    <ul className='categories'>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </ul>
  )
}