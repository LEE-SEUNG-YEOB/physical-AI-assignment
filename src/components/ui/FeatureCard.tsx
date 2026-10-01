import type { FeatureItem } from '../../types/content'
import { Icon } from '../icons/Icon'

export function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <article className="feature-card">
      <div className="feature-card__header">
        <span className="feature-card__number">{feature.number}</span>
        <span className="feature-card__icon"><Icon name={feature.icon} /></span>
      </div>
      <h3>{feature.title}</h3>
      <dl className="feature-card__details">
        <div><dt>사용자 상황</dt><dd>{feature.situation}</dd></div>
        <div><dt>판단</dt><dd>{feature.judgment}</dd></div>
        <div><dt>휠체어 행동</dt><dd>{feature.action}</dd></div>
      </dl>
      {feature.tags && (
        <ul className="tag-list" aria-label="적용 조건">
          {feature.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
        </ul>
      )}
    </article>
  )
}
