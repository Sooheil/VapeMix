import { CardDescription, CardHeader, CardTitle } from "../ui/card"
import type { CardSectionHeaderProps } from "./CardSectionHeader.types"

export const CardSectionHeader = ({
  number,
  titleHeader,
  titleDescription,
}: CardSectionHeaderProps) => {
  return (
    <CardHeader className="flex gap-4">
      <span className="flex size-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
        {number}
      </span>
      <div>
        <CardTitle className="font-extrabold">{titleHeader}</CardTitle>
        <CardDescription>{titleDescription}</CardDescription>
      </div>
    </CardHeader>
  )
}
