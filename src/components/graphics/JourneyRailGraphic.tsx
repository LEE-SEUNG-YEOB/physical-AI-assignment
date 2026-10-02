const stops = ['출발 조건 확인', '경로·배터리 확인', '공사·보행자 대응', '입구 앞 도착']

export function JourneyRailGraphic() {
  return (
    <div className="journey-rail-graphic">
      <ol aria-label="모두길 서비스 이용 흐름">
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
