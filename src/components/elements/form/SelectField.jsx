export default function SelectField({ items, defaultItem }) {
  return (
    <select className='field' name='category'>
      <option value='all'>{defaultItem}</option>
      {items.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </select>
  )
}