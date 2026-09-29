export const differencePoints = [
  {
    number: '01',
    title: '장소 사이를 연결합니다',
    description: '특정 기기나 한 공간에서 끝나지 않고 보도, 횡단보도, 공공시설 출입구와 내부 목적지까지 이동 흐름을 이어가는 것을 목표로 합니다.',
  },
  {
    number: '02',
    title: '정보를 안전 행동으로 연결합니다',
    description: '위험을 알려주는 데서 멈추지 않고 통과 가능성을 판단해 감속, 안전 정지, 우회와 경로 재탐색으로 이어지도록 설계합니다.',
  },
  {
    number: '03',
    title: '개인·도시·시설이 역할을 나눕니다',
    description: '사용자 곁의 기기는 가까운 위험을 살피고, 도시 인프라는 넓은 구간의 상황을 보완하며, 공공시설은 접근 가능한 출입구와 내부 동선을 연결합니다.',
  },
] as const

export const relatedServices = [
  {
    name: 'Glidance Glide',
    focus: '시각장애인을 위한 실내외 이동 보조와 장애물 회피',
    extension: '개인 이동 보조에 도시 신호와 공공시설 정보를 연결해 전체 이동 과정의 판단을 지원하는 방향을 제안합니다.',
  },
  {
    name: 'WHILL Autonomous Service',
    focus: '공항 등 시설 안에서 목적지까지 이동하는 자율주행 휠체어 서비스',
    extension: '통제된 시설 내부를 넘어 일반 보도와 횡단보도, 시설 출입과 내부 동선을 하나의 경로로 잇는 것을 목표로 합니다.',
  },
  {
    name: '서울 스마트폴·스마트 횡단보도',
    focus: '도시 센서와 보행 안전 정보를 제공하는 인프라',
    extension: '도시가 수집한 정보를 개인 기기의 감속, 정지, 우회와 경로 변경에 연결하는 사용 경험을 제안합니다.',
  },
  {
    name: 'ETRI 안내 로봇 연구',
    focus: '시각장애인을 위한 안내 로봇과 내비게이션 AI의 요소 기술',
    extension: '안내 로봇의 기능을 도시 인프라와 공공시설 연계까지 확장한 서비스 구조에 초점을 둡니다.',
  },
] as const

export const implementationStages = [
  {
    number: '01',
    label: 'LIMITED PILOT',
    title: '제한 구역 실증',
    description: '공원–횡단보도–주민센터처럼 짧고 반복 가능한 구간에서 장애물 회피, 접근성 경로, 횡단 정지와 시설 출입구 안내를 확인합니다.',
  },
  {
    number: '02',
    label: 'CITY CONNECTION',
    title: '도시 인프라 연동',
    description: '스마트 횡단보도와 시설 연동을 지원하는 구간으로 넓혀 신호, 차량 위험, 엘리베이터와 공사 정보를 경로 판단에 반영합니다.',
  },
  {
    number: '03',
    label: 'LIVING AREA',
    title: '생활권 단위 확장',
    description: '검증 결과를 바탕으로 지하철, 병원, 도서관과 관광지 등 여러 기관을 연결하고 이동 기기와 위험 정보의 활용 범위를 단계적으로 넓힙니다.',
  },
] as const
