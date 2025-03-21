export default function SelectField({ items, defaultItem, value, onChange }) {
  return (
    <select 
      data-aos='fade-up'
      data-aos-delay='200'
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