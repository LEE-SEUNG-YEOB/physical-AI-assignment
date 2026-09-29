import { useId } from 'react'

const stops = ['목적지 선택', '경로 확인', '이동 대응', '목적지 도착']

export function JourneyRailGraphic() {
  const titleId = useId()
  const descId = useId()

  return (
    <div className="journey-rail-graphic" role="img" aria-labelledby={`${titleId} ${descId}`}>
      <span className="sr-only" id={titleId}>모두길 서비스 이용 노선도</span>
      <span className="sr-only" id={descId}>목적지 선택, 경로 확인, 이동 대응, 목적지 도착의 네 단계를 연결한 노선도</span>
      <ol>
        {stops.map((stop, index) => (
          <li key={stop}>
            <span className="journey-rail-graphic__number">0{index + 1}</span>
            <strong>{stop}</strong>
          </li>
        ))}
      </ol>
      <span className="journey-rail-graphic__traveler" aria-hidden="true" />
    </div>
  )
}
