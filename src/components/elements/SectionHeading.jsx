export default function SectionHeading({ title, type, level }) {
  const hLevel = level ? level : '1'
  const commonProps = {
    'data-aos': 'fade-up',
    'data-aos-delay': '200',
    'role': 'heading',
    'aria-level': hLevel,
    'className': `h${hLevel} heading-font`
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