export default function SectionHeading({ title }) {
  return (
    <div className='col section-heading'>
      <span
        data-aos='fade-up'
        data-aos-delay='200'
        role='heading'
        aria-level='1'
        className='h1'
      >{title}</span>
    </div>
  )
}