export type SectionId =
  | 'intro'
  | 'problem'
  | 'connected'
  | 'features'
  | 'safety-process'
  | 'usage'
  | 'scenario'
  | 'support'
  | 'technology'
  | 'principles'
  | 'impact'
  | 'closing'

export type IconName =
  | 'scan'
  | 'route'
  | 'crosswalk'
  | 'building'
  | 'stop'
  | 'map-pin'
  | 'camera'
  | 'radar'
  | 'space'
  | 'network'
  | 'interaction'
  | 'eye'
  | 'wheelchair'
  | 'person'
  | 'temporary'
  | 'shield'
  | 'control'
  | 'privacy'
  | 'accessibility'
  | 'user'
  | 'city'
  | 'institution'
  | 'society'
  | 'battery'
  | 'cpu'
  | 'database'
  | 'plug'
  | 'gauge'

export interface NavigationItem {
  path: string
  label: string
  end?: boolean
}

export interface FeatureItem {
  number: string
  icon: IconName
  title: string
  situation: string
  judgment: string
  action: string
  tags?: readonly string[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  state?: 'sense' | 'caution' | 'stop' | 'move'
}

export interface ScenarioStep {
  number: string
  label: string
  place: string
  situation: string
  checks: string
  action: string
}

export interface SupportProfile {
  icon: IconName
  priority: '1차 핵심' | '2차 대상' | '확장 대상'
  title: string
  focus: string
  interface: string
}

export interface TechnologyItem {
  eyebrow: string
  icon: IconName
  title: string
  description: string
}

export interface TechnologyDetailItem {
  name: string
  role: string
  use: string
  limit: string
}

export interface TechnologyDetailGroup {
  id: string
  eyebrow: string
  title: string
  description: string
  items: readonly TechnologyDetailItem[]
}

export interface DataFlowStep {
  number: string
  title: string
  description: string
}

export interface OperationModel {
  number: string
  label: string
  title: string
  description: string
}

export interface PrincipleItem {
  icon: IconName
  title: string
  description: string
}

export interface ImpactItem {
  icon: IconName
  title: string
  description: string
}
