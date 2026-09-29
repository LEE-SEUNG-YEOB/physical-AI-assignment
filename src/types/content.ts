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

export interface NavigationItem {
  id: SectionId
  label: string
}

export interface FeatureItem {
  number: string
  icon: IconName
  title: string
  situation: string
  description: string
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
  place: string
  situation: string
  checks: string
  action: string
}

export interface SupportProfile {
  icon: IconName
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
