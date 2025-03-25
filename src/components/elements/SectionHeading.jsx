export default function SectionHeading({ title, type }) {
  const commonProps = {
    'data-aos': 'fade-up',
    'data-aos-delay': '200',
    'role': 'heading',
    'aria-level': '1',
    'className': 'h1 heading-font'
  };

  return (
    <div className='col section-heading'>
      {type === 'html' ? (
        <span
          {...commonProps}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <span {...commonProps}>{title}</span>
      )}
    </div>
  )
}