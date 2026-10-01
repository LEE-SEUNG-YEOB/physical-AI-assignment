import { useId } from 'react'

export function ImpactOrbitGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <svg className="impact-orbit-graphic" viewBox="0 0 620 500" role="img" aria-labelledby={`${titleId} ${descId}`} focusable="false">
      <title id={titleId}>목적지 이동을 함께 만드는 네 주체</title>
      <desc id={descId}>기존 휠체어 이용자, 2차·확장 이용자, 보호자와 활동보조인, 시설 운영자가 독립적인 목적지 이동을 중심으로 연결된 관계도</desc>
      <circle className="impact-orbit impact-orbit--user" cx="210" cy="190" r="125" />
      <circle className="impact-orbit impact-orbit--city" cx="410" cy="190" r="125" />
      <circle className="impact-orbit impact-orbit--place" cx="210" cy="350" r="125" />
      <circle className="impact-orbit impact-orbit--support" cx="410" cy="350" r="125" />
      <text className="impact-orbit__label" x="148" y="125">휠체어 이용자</text>
      <text className="impact-orbit__label" x="468" y="125">2차·확장 이용자</text>
      <text className="impact-orbit__label" x="145" y="430">보호자·보조인</text>
      <text className="impact-orbit__label" x="470" y="430">시설 운영자</text>
      <g className="impact-orbit__core" transform="translate(310 252)">
        <circle r="68" />
        <text y="-6">독립적인</text>
        <text y="20">목적지 이동</text>
      </g>
    </svg>
  )
}
