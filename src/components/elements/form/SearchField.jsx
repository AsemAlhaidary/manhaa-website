export default function SearchField({ value, onChange }) {
  return (
    <label
      data-aos='fade-up'
      data-aos-delay='200'
      className='field icon-field'
      htmlFor='search-projects'
    >
      <i className='fa-solid fa-magnifying-glass icon'></i>
      <input 
        id='search-projects' 
        type='search' 
        value={value}
        onChange={onChange}
        placeholder='ابحث عن مشروع...'
      />
    </label>
  )
}