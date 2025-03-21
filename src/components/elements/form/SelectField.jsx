export default function SelectField({ items, defaultItem, value, onChange }) {
  return (
    <select 
      className='field' 
      name='category' 
      value={value} 
      onChange={onChange}
    >
      <option value='all'>{defaultItem}</option>
      {items.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </select>
  )
}