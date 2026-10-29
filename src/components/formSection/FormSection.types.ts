import type { IconName } from "lucide-react/dynamic"
import type { ReactNode } from "react"

export interface FormSectionProps {
  icon: IconName
  title: string
  children: ReactNode
  className?: string
}
