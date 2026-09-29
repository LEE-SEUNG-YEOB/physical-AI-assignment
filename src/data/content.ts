import type {
  FeatureItem,
  ImpactItem,
  NavigationItem,
  PrincipleItem,
  ProcessStep,
  ScenarioStep,
  SupportProfile,
  TechnologyItem,
} from '../types/content'

export const navigationItems = [
  { path: '/', label: '서비스 소개', end: true },
  { path: '/features', label: '주요 기능·안전 행동', end: true },
  { path: '/journey', label: '이용 과정', end: true },
  { path: '/technology', label: '핵심 기술', end: true },
  { path: '/impact', label: '기대 효과', end: true },
] as const satisfies readonly NavigationItem[]

export const problemCards = [
  {
    icon: 'eye' as const,
    title: '시각장애·저시력',
    description: '장애물과 연석, 횡단 방향, 접근 가능한 출입구를 바로 파악하기 어렵습니다.',
  },
  {
    icon: 'wheelchair' as const,
    title: '휠체어 이용자',
    description: '지도에는 있는 길도 턱, 급경사, 좁은 보도 때문에 실제로 통과하지 못할 수 있습니다.',
  },
  {
    icon: 'person' as const,
    title: '고령자',
    description: '보행 속도와 혼잡도, 남은 신호시간에 따라 같은 횡단보도의 위험이 달라집니다.',
  },
] as const

export const connectedLayers = [
  {
    number: '01',
    title: '개인 Physical AI',
    description: '안내 로봇과 스마트 휠체어가 가까운 장애물과 움직임을 확인하고 조향·감속·정지를 판단합니다.',
  },
  {
    number: '02',
    title: '도시 AI 인프라',
    description: '스마트 횡단보도와 CCTV, 스마트폴이 신호, 접근 차량, 공사와 혼잡 정보를 보완합니다.',
  },
  {
    number: '03',
    title: '공공시설 연계',
    description: '접근 가능한 출입구와 엘리베이터, 시설 내부 목적지 정보를 이동 과정에 연결합니다.',
  },
] as const

export const features = [
  {
    number: '01',
    icon: 'scan',
    title: '실시간 보행 위험 인식',
    situation: '사람과 자전거, 고정 장애물이 이동 경로에 나타납니다.',
    description: '대상의 움직임과 통과 공간을 살펴 먼저 감속하고, 필요하면 정지하거나 안전한 방향으로 우회합니다.',
  },
  {
    number: '02',
    icon: 'route',
    title: '접근 가능한 경로 안내',
    situation: '가장 짧은 길에 턱, 급경사 또는 좁은 보도가 있습니다.',
    description: '보도 폭과 경사, 공사, 출입구와 엘리베이터를 확인해 실제로 통과할 수 있는 길을 우선합니다.',
  },
  {
    number: '03',
    icon: 'crosswalk',
    title: '스마트 횡단 지원',
    situation: '남은 신호시간과 사용자의 이동 상태를 함께 살펴야 합니다.',
    description: '안전 조건을 확인해 출발 또는 대기를 안내하고, 지원되는 연동 구간에서는 신호 연장을 요청합니다.',
    tags: ['연동 지원 구간'],
  },
  {
    number: '04',
    icon: 'building',
    title: '공공시설 연속 안내',
    situation: '목적지 정문에 계단이 있고 접근 가능한 출입구가 다른 곳에 있습니다.',
    description: '접근 가능한 출입구와 내부 동선을 안내하며, 연동 시설에서는 자동문과 엘리베이터 호출을 연결합니다.',
    tags: ['연동 시설'],
  },
  {
    number: '05',
    icon: 'stop',
    title: '안전 정지와 도움 요청',
    situation: '충돌 위험이 커지거나 센서 판단의 신뢰도가 낮아집니다.',
    description: '이동보다 정지를 우선하고, 사용자가 동의하고 설정한 경우에만 보호자나 시설 담당자에게 도움을 요청합니다.',
    tags: ['사용자 동의 필요'],
  },
  {
    number: '06',
    icon: 'map-pin',
    title: '도시 위험 공유',
    situation: '같은 위치에서 보도 파손과 점자블록 단절이 반복해서 발견됩니다.',
    description: '최소한의 익명 위험 이벤트를 향후 경로 계산과 도시 시설 정비 판단에 활용하는 기능을 제안합니다.',
    tags: ['기획 기능'],
  },
] as const satisfies readonly FeatureItem[]

export const safetySteps = [
  {
    number: '01',
    title: '주변을 감지합니다',
    description: '카메라·라이다·근거리 거리 센서로 사람과 주변 공간을 확인합니다.',
    state: 'sense',
  },
  {
    number: '02',
    title: '대상을 구분하고 움직임을 예측합니다',
    description: '사람·자전거와 고정 장애물을 나누고 이동 방향과 경로가 겹치는지 살핍니다.',
    state: 'sense',
  },
  {
    number: '03',
    title: '거리와 통과 공간을 판단합니다',
    description: '상대 움직임, 혼잡도, 통로 폭과 센서 신뢰도를 함께 확인합니다.',
    state: 'caution',
  },
  {
    number: '04',
    title: '먼저 속도를 낮춥니다',
    description: '사람이 가까워지거나 움직임이 불확실하면 감속해 대응할 여유를 만듭니다.',
    state: 'caution',
  },
  {
    number: '05',
    title: '안전거리를 확보합니다',
    description: '같은 방향의 보행자와 속도를 맞추며 충분한 간격을 유지합니다.',
    state: 'move',
  },
  {
    number: '06',
    title: '정지하거나 우회합니다',
    description: '통로가 좁거나 예측이 어려우면 정지하고, 안전한 공간이 확인되면 낮은 속도로 우회합니다.',
    state: 'stop',
  },
  {
    number: '07',
    title: '다시 확인하고 이동을 이어갑니다',
    description: '주변을 재확인한 뒤 원래 길이나 새 경로로 이동하며 현재 행동을 사용자에게 알립니다.',
    state: 'move',
  },
] as const satisfies readonly ProcessStep[]

export const usageSteps = [
  { number: '01', title: '목적지 선택', description: '앱, 음성 또는 물리 버튼으로 목적지를 정합니다.' },
  { number: '02', title: '보조 방식 선택', description: '음성, 진동, 큰 글씨 중 사용자에게 맞는 안내 방식을 선택합니다.' },
  { number: '03', title: '접근 가능한 경로 계산', description: '턱, 경사, 보도 폭과 시설 정보를 반영해 통과 가능한 길을 찾습니다.' },
  { number: '04', title: '이동과 상황 대응', description: '주변 움직임과 장애물을 확인하며 감속, 정지와 우회를 수행합니다.' },
  { number: '05', title: '횡단과 시설 연계', description: '신호와 차량을 확인하고 접근 가능한 출입구와 내부 동선을 연결합니다.' },
  { number: '06', title: '필요할 때 도움', description: '사용자는 언제든 정지, 경로 재탐색 또는 도움 요청을 선택할 수 있습니다.' },
] as const satisfies readonly ProcessStep[]

export const scenarioSteps = [
  { number: '01', place: '공원 입구', situation: '주민센터를 목적지로 선택합니다.', checks: '사용자 이동 조건, 계단과 경사, 횡단 구간과 접근 가능한 출입구', action: '계단이 적고 횡단 과정이 단순한 접근성 경로를 우선합니다.' },
  { number: '02', place: '산책로', situation: '앞쪽에서 자전거가 빠르게 접근합니다.', checks: '카메라와 거리 센서로 자전거의 위치, 속도와 진행 방향', action: '속도를 줄이고 진행 방향을 확인한 뒤 보행선 안쪽 이동을 유도합니다.' },
  { number: '03', place: '보도', situation: '쓰러진 킥보드가 점자블록을 막고 있습니다.', checks: '장애물 위치, 남은 통과 폭과 주변 사람의 움직임', action: '안전한 공간이 확인되면 우회하고 익명 위험 이벤트로 다루는 상황을 보여줍니다.' },
  { number: '04', place: '횡단보도', situation: '교차로 연석 앞에 도착합니다.', checks: '보행 신호, 접근 차량, 횡단 방향과 사용자의 이동 상태', action: '먼저 정지한 뒤 안전 조건이 확인되면 횡단을 안내합니다.' },
  { number: '05', place: '시설 입구', situation: '주민센터 정문에는 계단이 있습니다.', checks: '출입구별 계단과 경사로, 자동문 지원 여부', action: '경사로가 있는 접근 가능한 출입구로 경로를 변경합니다.' },
  { number: '06', place: '시설 내부', situation: '민원창구까지 내부 이동이 필요합니다.', checks: '엘리베이터 위치, 실내 통로와 민원창구 위치', action: '연동된 시설 정보를 이용해 엘리베이터와 내부 목적지까지 안내합니다.' },
] as const satisfies readonly ScenarioStep[]

export const supportProfiles = [
  { icon: 'eye', title: '시각장애·저시력', focus: '장애물, 연석, 횡단 방향과 출입구를 더 중요하게 확인합니다.', interface: '조향, 진동과 짧은 음성 안내' },
  { icon: 'wheelchair', title: '휠체어 이용자', focus: '턱, 경사, 통과 폭, 노면과 엘리베이터 정보를 우선합니다.', interface: '속도 조절과 접근성 경로 재탐색' },
  { icon: 'person', title: '고령자', focus: '보행 속도 변화, 긴 횡단거리, 혼잡과 균형 상태를 살핍니다.', interface: '느린 속도, 명확한 음성과 큰 글씨' },
  { icon: 'temporary', title: '일시적 이동 불편자', focus: '목발, 부상, 임산부, 유모차 등 사용자가 설정한 제한을 반영합니다.', interface: '계단을 피하고 엘리베이터 경로 우선' },
] as const satisfies readonly SupportProfile[]

export const technologies = [
  {
    eyebrow: 'ENVIRONMENT SENSING',
    icon: 'camera',
    title: '카메라·라이다·근거리 센서',
    description: '카메라는 대상의 종류와 형태를 구분하고 라이다는 거리와 공간 구조를 측정합니다. 초음파 같은 근거리 센서는 가까운 장애물을 확인하는 구현 후보로 다른 센서의 판단을 보완합니다.',
  },
  {
    eyebrow: 'MOTION UNDERSTANDING',
    icon: 'radar',
    title: '객체 인식과 이동 방향 예측',
    description: '대상이 사람, 자전거 또는 고정 장애물인지 구분합니다. 연속된 관측으로 속도와 방향을 예측해 이동 경로가 겹치기 전에 감속할 수 있게 합니다.',
  },
  {
    eyebrow: 'SPACE AND RISK',
    icon: 'space',
    title: '공간 판단과 위험 계산',
    description: '통로 폭, 상대 움직임, 혼잡도와 센서 신뢰도를 함께 살핍니다. 그 결과를 바탕으로 이동, 감속, 정지, 우회 또는 경로 재탐색 중 하나를 선택합니다.',
  },
  {
    eyebrow: 'ACCESSIBLE NAVIGATION',
    icon: 'route',
    title: '위치 파악과 접근성 경로 계획',
    description: '현재 위치와 진행 방향을 지속적으로 확인합니다. 보도 폭, 경사, 턱, 공사, 출입구와 엘리베이터를 사용자 조건과 비교해 통과 가능한 경로를 찾습니다.',
  },
  {
    eyebrow: 'CONNECTED INFRASTRUCTURE',
    icon: 'network',
    title: '도시와 공공시설 정보 연동',
    description: '지원되는 구간에서 신호, 접근 차량과 시설 상태를 받습니다. 개인 기기가 보기 어려운 정보를 이동 판단에 결합해 횡단과 시설 진입을 돕습니다.',
  },
  {
    eyebrow: 'SAFE INTERACTION',
    icon: 'interaction',
    title: '이동 제어와 안전 안내',
    description: '판단 결과를 감속, 정지와 우회 동작으로 연결합니다. 음성, 진동, 큰 글씨와 물리 버튼으로 행동 이유를 알리고 사용자의 정지 명령을 우선합니다.',
  },
] as const satisfies readonly TechnologyItem[]

export const principles = [
  { icon: 'shield', title: '안전 정지 우선', description: '연결이 끊기거나 판단 신뢰도가 낮아지면 이동을 강행하지 않고 정지합니다.' },
  { icon: 'control', title: '사용자 명령 우선', description: '사용자는 물리 버튼이나 음성으로 언제든 중지하고 보조 수준을 바꿀 수 있습니다.' },
  { icon: 'privacy', title: '최소정보 처리', description: '얼굴과 원본 영상의 장기 저장보다 이동에 필요한 익명 위험 이벤트를 중심으로 다룹니다.' },
  { icon: 'accessibility', title: '여러 방식으로 안내', description: '음성에만 의존하지 않고 진동, 촉각 버튼과 큰 글씨로 같은 정보를 전달합니다.' },
] as const satisfies readonly PrincipleItem[]

export const impacts = [
  { icon: 'user', title: '이용자', description: '독립적인 이동 범위가 넓어지고 위험과 통과 가능성을 직접 판단하는 부담이 줄어드는 것을 목표로 합니다.' },
  { icon: 'city', title: '도시', description: '기존 스마트시티 인프라를 개인의 이동 지원과 연결하고 반복되는 접근성 문제를 파악할 수 있습니다.' },
  { icon: 'institution', title: '공공기관', description: '보도 파손과 적치물의 정비 우선순위를 세우고 시설 접근성 정보를 관리하는 데 활용할 수 있습니다.' },
  { icon: 'society', title: '사회와 산업', description: '접근성을 도시의 기본 이동 서비스로 확대하고 로봇·모빌리티·시설을 잇는 모델로 발전할 가능성을 제시합니다.' },
] as const satisfies readonly ImpactItem[]
