import type { OperationModel } from '../types/content'

export const differencePoints = [
  { number: '01', title: '목적지 기반 자동 이동', description: '반복적인 조이스틱 조작보다 목적지와 중지 여부에 집중할 수 있도록 사전 조사된 보행 구역의 이동을 자동화합니다.' },
  { number: '02', title: '기체 조건에 맞는 통과 판단', description: '기체 폭·길이·발판·회전 공간과 턱·경사·노면을 비교해 지도에 있는 길과 실제로 지나갈 수 있는 길을 구분합니다.' },
  { number: '03', title: '외부 변화와 현장 대응의 결합', description: '공사·차단 정보는 진입 전 우회에 사용하고 현장의 새 위험은 자체 센서가 감속·정지 판단으로 최종 확인합니다.' },
  { number: '04', title: '지도·입구·배터리·충전 연결', description: '장소 검색에서 끝나지 않고 접근 가능한 입구, 배터리 여유와 호환 충전 거점을 목적지 이동에 함께 반영합니다.' },
] as const

export const relatedServices = [
  { name: '일반 전동휠체어', focus: '이용자의 조이스틱 조작에 따라 동력과 방향을 제공', extension: '모두길은 목적지 선택 후 반복적인 방향·속도 조작을 줄이는 자동 이동을 제안합니다.' },
  { name: 'WHILL Autonomous Service', focus: '공항 등 시설에서 목적지 선택과 센서 기반 자율 이동을 제공', extension: '모두길은 사전 조사된 실외 보행 구역의 턱·경사·통과 폭과 앞 구간의 변화를 반영하는 데 초점을 둡니다.' },
  { name: '자율 휠체어 연구', focus: '깊이 센서와 바퀴 이동 정보로 위치 추정·지도·장애물 회피를 구현', extension: '모두길은 기존 요소 기술을 접근성 지도, 사용자 제어권과 도착 경험으로 연결합니다.' },
  { name: '도로 횡단 연구', focus: '다중 센서로 횡단 안전 판단을 실험 환경에서 검증', extension: '모두길의 현재 운행 범위에는 일반 차도와 자율 횡단이 포함되지 않으며 확인된 보행 공간에 집중합니다.' },
] as const

export const operationModels = [
  { number: '01', label: 'INSTITUTION RENTAL', title: '기관 대여형', description: '복지관·병원·공공시설 주변의 사전 조사된 구역에서 기체를 대여하고 시설이 점검·충전·이용 안내를 맡는 제안 모델입니다.' },
  { number: '02', label: 'PERSONAL USE', title: '개인 이용형', description: '기존 휠체어 이용자가 등록된 생활권 목적지와 확인된 접근로를 반복해서 이용하는 제안 모델입니다.' },
  { number: '03', label: 'LOCAL HUB', title: '지역 거점 연계형', description: '복지관·주민센터·병원·공원 입구의 접근 가능한 정차 공간과 호환 충전 거점을 지역 단위로 연결하는 제안 모델입니다.' },
] as const satisfies readonly OperationModel[]
