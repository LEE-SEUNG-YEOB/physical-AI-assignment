import type { DataFlowStep, TechnologyDetailGroup } from '../types/content'

export const technologyGroups = [
  {
    id: 'hardware',
    eyebrow: 'VEHICLE AND HARDWARE',
    title: '기체와 부품 후보',
    description: '구매 가능한 부품과 탑승 가능한 자율주행 시스템의 완성을 구분합니다. 모든 제품은 별도 통합·안전 설계가 필요한 적용 후보입니다.',
    items: [
      { name: 'Sunrise Medical QUICKIE Q500 M', role: '구동 모터·전자식 제어·배터리·조이스틱을 갖춘 상용 전동휠체어 기반 후보', use: '센서와 연산 장치를 결합해 실제 조향·감속·정지로 이어지는 기체 기반', limit: '기본 제품에 모두길 자율주행이 내장된 것이 아니며 제조사가 허용하는 인터페이스와 별도 통합 설계가 필요합니다.' },
      { name: 'NVIDIA Jetson Orin Nano Super', role: '카메라와 LiDAR 데이터를 처리하는 기체 내부 AI 연산 컴퓨터', use: '객체 인식, 위치 추정과 경로 판단', limit: '전원·발열·진동과 실시간 처리 조건을 실제 기체 구성에서 검증해야 합니다.' },
      { name: 'RealSense D455', role: '색상 영상·스테레오 깊이·내장 IMU를 제공하는 깊이 카메라', use: '대상과 거리를 연결하고 턱·지면 형상을 확인', limit: '반사, 강한 빛과 가까운 사각의 영향을 받으므로 단독 안전 판단에 사용하지 않습니다.' },
      { name: 'HOKUYO UST-10LX', role: '주변 장애물 거리와 공간 구조를 측정하는 2D LiDAR', use: '근거리 장애물 지도와 위치 추정', limit: '한 높이의 평면을 측정하므로 턱·계단 판단에는 깊이 카메라 등 다른 센서가 필요합니다.' },
      { name: 'ST NUCLEO-F446RE', role: '명령 지연·AI 상태·정지 입력을 감시하는 STM32 개발 보드 후보', use: '안전 상태 감시와 제어 인터페이스 검토', limit: '모터 구동기나 인증된 완성품 안전 장치가 아닙니다.' },
      { name: '제조사 승인 배터리·충전기', role: '기체와 센서·AI 장치에 전원을 공급하는 승인 전원 구성', use: '주행 에너지와 호환 유선 충전', limit: '실제 옵션, 전압 변환과 보호 회로를 확인해야 하며 임의 충전기 호환을 가정하지 않습니다.' },
    ],
  },
  {
    id: 'software',
    eyebrow: 'SOFTWARE PIPELINE',
    title: '인식에서 안전 제어까지',
    description: '센서의 관측이 위치 추정·경로 계획·제어를 거쳐 휠체어의 움직임으로 이어집니다.',
    items: [
      { name: 'YOLO11n 등 경량 객체 인식', role: '영상에서 사람·자전거 등의 영역을 찾는 인식 모델', use: '깊이·LiDAR와 결합해 대상의 위치와 거리를 판단', limit: '기본 모델이 모든 장애물을 인식한다고 가정하지 않습니다.' },
      { name: 'ROS 2', role: '센서·위치 추정·경로 계획·제어 사이의 데이터 전달 기반', use: '기체 내부 소프트웨어 모듈 연결', limit: 'ROS 2 자체가 안전이나 자율주행 성능을 보장하지 않습니다.' },
      { name: 'slam_toolbox와 SLAM', role: '센서로 운영 구역을 지도화하고 현재 관측과 비교', use: 'IMU·바퀴 이동 정보와 함께 현재 위치 추정', limit: '가림·환경 변화·센서 오차로 위치 불확실성이 커지면 주행을 제한해야 합니다.' },
      { name: 'A* 등 경로 탐색', role: '접근성 그래프에서 목적지까지 가능한 경로를 계산', use: '계단·차단·허용 범위 밖 경사·폭을 제외한 전체 경로 선택', limit: '입력 지도에 통과 조건이 없으면 안전하다고 간주하지 않습니다.' },
      { name: 'Nav2', role: '기체 근처의 장애물 지도·경로·제어를 연결', use: '현장 장애물 회피와 근거리 주행', limit: 'footprint에 발판과 추가 센서를 포함한 실제 기체 형상을 반영해야 합니다.' },
      { name: '안전 제어', role: 'AI 명령과 정지 입력, 제어 상태를 독립적으로 확인', use: '제동·수동 전환·물리 정지와 연결', limit: '언어 모델의 응답을 모터 명령으로 직접 사용하지 않습니다.' },
    ],
  },
  {
    id: 'data',
    eyebrow: 'MAP AND LIVE DATA',
    title: '지도와 외부 정보의 역할',
    description: '상용 지도, 접근성 그래프, 센서 지도와 외부 위험 정보는 서로 다른 역할을 맡습니다.',
    items: [
      { name: '카카오맵 Web API·Local API', role: '제안 서비스의 지도 표시, 장소 검색과 주소·좌표 변환', use: '사용자의 목적지 검색', limit: '상용 지도를 켠다고 휠체어 주행 경로가 자동으로 만들어지는 것은 아닙니다. 네이버 Directions 5의 자동차 경로를 휠체어 경로로 쓰지 않으며 Google 도보 경로도 실제 통과 조건 확인이 필요합니다.' },
      { name: 'OpenStreetMap + 현장 조사', role: '보행로 연결 관계와 폭·경사·계단·턱·노면·회전 공간을 보완', use: '기체 조건을 반영한 접근성 그래프', limit: 'OSM의 빈 접근성 속성은 안전하다는 뜻이 아닙니다.' },
      { name: '시설 관리자 정보와 직접 확인', role: '접근 가능한 입구·정차 지점·충전 거점 확인', use: '실제 도착 지점과 운영 정보 등록', limit: '확인 시각과 운영 조건을 함께 관리해야 합니다.' },
      { name: 'LiDAR·카메라 지도', role: '기체 위치 추정과 가까운 장애물 회피에 쓰는 센서 지도', use: '현장 주행과 최종 정지 판단', limit: '장소 검색용 지도와 목적이 다릅니다.' },
      { name: '공사 공지·허용 CCTV·기체 관측', role: '변화하는 위험을 위치·시각·신뢰도·유효기간이 있는 이벤트로 표현', use: '아직 도착하지 않은 구간의 사전 우회', limit: 'CCTV 설치 위치와 영상 접근 권한은 다르며 사각지대는 미확인입니다.' },
      { name: 'ITS·UTIC와 운영자 정보', role: '확보 가능한 구간의 교통 정보와 지자체·시설 운영자의 공사·통제 정보를 보완', use: '해당 보도와 관련된 공사·차단 후보를 경로에 임시 반영', limit: '모든 보도를 CCTV가 볼 수 있다고 전제하지 않으며 공개 설치 위치와 실제 영상 접근 권한을 구분합니다.' },
      { name: '연결 상태와 로컬 운행 조건', role: '인터넷 연결과 외부 정보의 최신성을 로컬 센서·위치·제어 상태와 분리해 확인', use: '연결이 끊겨도 확인된 운행 조건 안에서 유지할지 정지할지 판단', limit: '외부 정보는 최신으로 간주하지 않습니다. 로컬 인식·제어와 확인된 조건이 정상일 때만 유지하고 조건이 부족하면 정지합니다.' },
      { name: 'PostGIS', role: '접근성 그래프와 구간별 위험 이벤트를 관리하는 공간 저장 기술', use: '보도 구간·입구·거점·위험 정보 연결', limit: '이번 홍보 사이트에서는 실제 데이터베이스나 지도 API를 실행하지 않습니다.' },
    ],
  },
] as const satisfies readonly TechnologyDetailGroup[]

export const mapFlow = [
  { number: '01', title: '목적지 검색', description: '지도 서비스로 장소와 주소를 찾습니다.' },
  { number: '02', title: '접근 가능한 입구 선택', description: '계단이 없는 입구와 안전한 정차 지점을 확인합니다.' },
  { number: '03', title: '접근성 경로 계산', description: '폭·경사·턱·공사·배터리를 자체 보행 그래프에서 비교합니다.' },
  { number: '04', title: '기체용 지도와 연결', description: '사전 지도와 현재 위치 추정을 근거리 주행 계획에 연결합니다.' },
  { number: '05', title: '현장 센서로 재확인', description: '지도에 없던 장애물과 노면 변화를 센서로 최종 확인합니다.' },
] as const satisfies readonly DataFlowStep[]

export const chargingFlow = [
  { number: '01', title: '거점 조건 확인', description: '위치·운영 시간·기체 호환성과 사용 가능 상태를 확인합니다.' },
  { number: '02', title: '안전 정차와 주행 종료', description: '접근 가능한 정차 공간에 멈추고 자율주행을 종료합니다.' },
  { number: '03', title: '사람이 케이블 연결', description: '이용자 또는 시설 직원이 승인 충전기를 기체 단자에 연결합니다.' },
  { number: '04', title: '충전 중 이동 잠금', description: '연결과 충전 상태를 확인하고 자율주행을 잠급니다.' },
  { number: '05', title: '분리 후 운행 재개', description: '충전을 종료하고 케이블을 분리한 뒤 기체 상태를 확인합니다.' },
] as const satisfies readonly DataFlowStep[]

export const chargingHubs = [
  {
    place: '복지관·주민센터·병원',
    condition: '평탄한 정차 공간, 접근 가능한 진입로와 기체에 맞는 제조사 승인 충전기를 갖춥니다.',
    operation: '시설 담당자가 연결 상태를 확인하고 필요한 경우 케이블 연결과 이용자 도움을 지원합니다.',
  },
  {
    place: '공원 입구·공공시설 외부',
    condition: '비 가림, 케이블 정리와 전원 보호·점검 조건을 갖추고 보행 통로를 막지 않도록 배치합니다.',
    operation: '운영 시간과 고장·사용 가능 상태를 표시해 경유 전에 확인할 수 있도록 합니다.',
  },
  {
    place: '가정·개인 공간',
    condition: '전용 충전기와 환기 조건을 갖추고 기체가 안전하게 정차할 공간을 확보합니다.',
    operation: '일상 이용 후 충분히 충전하고 장거리 이동 전 배터리와 충전 상태를 확인합니다.',
  },
] as const
