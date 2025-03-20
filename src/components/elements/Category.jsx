export default function Category({ key, category }) {
  return (
    <li key={key} className='category'>
      <a href='#' className='heading-font'>{category}</a>
    </li>
  )
}