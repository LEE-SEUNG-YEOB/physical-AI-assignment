const layers = [
  {
    number: '01',
    eyebrow: '검색·표시용 지도',
    title: '카카오맵 Web·Local API',
    description: '장소 검색, 지도 표시와 주소·좌표 변환을 맡습니다.',
    output: '복지관 위치 후보',
  },
  {
    number: '02',
    eyebrow: '접근성 경로 계획',
    title: 'OSM + 현장 조사 보행 그래프',
    description: '확인된 입구·정차점과 폭·경사·턱·공사·배터리를 비교합니다.',
    output: '휠체어가 통과할 수 있는 경로',
  },
  {
    number: '03',
    eyebrow: '기체의 현장 판단',
    title: '사전 지도·SLAM + LiDAR·카메라',
    description: '현재 위치와 눈앞의 장애물을 다시 확인합니다.',
    output: '감속 · 정지 · 우회',
  },
] as const

export function MapArchitectureGraphic() {
  return (
    <div className="map-architecture" aria-label="실서비스의 지도와 현장 판단 흐름">
      <div className="map-architecture__status" aria-label="구현 범위 구분">
        <p><strong>실서비스 제안</strong><span>지도 API 사용</span></p>
        <p><strong>현재 홍보 웹사이트</strong><span>실제 API 미연결 · 고정 예시 도식</span></p>
      </div>
      <ol className="map-architecture__layers">
        {layers.map((layer, index) => (
          <li key={layer.number}>
            <span className="map-architecture__number">{layer.number}</span>
            <div className="map-architecture__copy">
              <p>{layer.eyebrow}</p>
              <h3>{layer.title}</h3>
              <span>{layer.description}</span>
            </div>
            <div className="map-architecture__output"><small>결과</small><strong>{layer.output}</strong></div>
            {index < layers.length - 1 && <span className="map-architecture__arrow" aria-hidden="true">↓</span>}
          </li>
        ))}
      </ol>
      <p className="map-architecture__note"><strong>외부 공사·CCTV 이벤트</strong>는 관측 시각·신뢰도·유효기간과 함께 경로 계획을 보완하지만, 현장 센서의 정지 판단을 덮어쓰지 않습니다.</p>
    </div>
  )
}
