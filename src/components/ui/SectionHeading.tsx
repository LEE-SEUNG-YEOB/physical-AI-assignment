interface SectionHeadingProps {
  id: string
  eyebrow?: string
  title?: string
  titleLines?: readonly string[]
  description?: string
  align?: 'left' | 'center'
  inverse?: boolean
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  titleLines,
  description,
  align = 'left',
  inverse = false,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} ${inverse ? 'section-heading--inverse' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} tabIndex={-1}>
        {titleLines
          ? titleLines.map((line) => <span className="title-line" key={line}>{line}</span>)
          : title}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}
