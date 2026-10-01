import {
  Accessibility,
  BatteryCharging,
  Baby,
  Building2,
  Camera,
  Cpu,
  Database,
  CirclePause,
  DoorOpen,
  Eye,
  Hand,
  Landmark,
  LockKeyhole,
  MapPinned,
  PlugZap,
  Network,
  PersonStanding,
  Radar,
  Route,
  ScanLine,
  ScanSearch,
  ShieldCheck,
  TrafficCone,
  Gauge,
  UserRound,
  UsersRound,
  Volume2,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../../types/content'

const icons: Record<IconName, LucideIcon> = {
  scan: ScanLine,
  route: Route,
  crosswalk: TrafficCone,
  building: DoorOpen,
  stop: CirclePause,
  'map-pin': MapPinned,
  camera: Camera,
  radar: Radar,
  space: ScanSearch,
  network: Network,
  interaction: Volume2,
  eye: Eye,
  wheelchair: Accessibility,
  person: PersonStanding,
  temporary: Baby,
  shield: ShieldCheck,
  control: Hand,
  privacy: LockKeyhole,
  accessibility: Accessibility,
  user: UserRound,
  city: Building2,
  institution: Landmark,
  society: UsersRound,
  battery: BatteryCharging,
  cpu: Cpu,
  database: Database,
  plug: PlugZap,
  gauge: Gauge,
}

interface IconProps {
  name: IconName
  size?: number
  decorative?: boolean
  label?: string
}

export function Icon({ name, size = 28, decorative = true, label }: IconProps) {
  const Component = icons[name]

  return (
    <Component
      aria-hidden={decorative ? 'true' : undefined}
      aria-label={decorative ? undefined : label}
      focusable="false"
      size={size}
      strokeWidth={1.7}
    />
  )
}
