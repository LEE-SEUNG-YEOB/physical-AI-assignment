import type { ProcessStep } from '../../types/content'

interface StepTimelineProps {
  steps: readonly ProcessStep[]
  inverse?: boolean
  compact?: boolean
}

export function StepTimeline({ steps, inverse = false, compact = false }: StepTimelineProps) {
  return (
    <ol className={`step-timeline ${inverse ? 'step-timeline--inverse' : ''} ${compact ? 'step-timeline--compact' : ''}`}>
      {steps.map((step) => (
        <li className="step-timeline__item" data-state={step.state} key={step.number}>
          <span className="step-timeline__number" aria-hidden="true">{step.number}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
