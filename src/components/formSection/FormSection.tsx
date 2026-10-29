import { DynamicIcon } from "lucide-react/dynamic"
import type { FormSectionProps } from "./FormSection.types"

export const FormSection = ({
  title,
  icon,
  className,
  children,
}: FormSectionProps) => {
  return (
    <div className={[className, "p-4"].join(" ")}>
      <div className="mb-3 flex items-center gap-3">
        <DynamicIcon
          name={icon}
          size={22}
          strokeWidth={1.8}
          className="fill-blue-100 text-blue-500"
        />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}
