import { useId } from 'react'

export function ImpactOrbitGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="impact-orbit-graphic" viewBox="0 0 620 500" role="img" aria-labelledby={`${titleId} ${descId}`}>
      <title id={titleId}>개인에서 도시로 확장되는 접근성 효과</title>
      <desc id={descId}>이용자, 도시와 공공시설 세 영역이 겹치며 이어지는 접근성을 만드는 관계도</desc>
      <circle className="impact-orbit impact-orbit--user" cx="226" cy="205" r="142" />
      <circle className="impact-orbit impact-orbit--city" cx="394" cy="205" r="142" />
      <circle className="impact-orbit impact-orbit--place" cx="310" cy="345" r="142" />
      <text className="impact-orbit__label" x="152" y="165">이용자</text>
      <text className="impact-orbit__label" x="438" y="165">도시</text>
      <text className="impact-orbit__label" x="310" y="414">공공시설</text>
      <g className="impact-orbit__core" transform="translate(310 252)">
        <circle r="68" />
        <text y="-6">이어지는</text>
        <text y="20">접근성</text>
      </g>
    </svg>
  )
}
