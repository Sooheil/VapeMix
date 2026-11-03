import { CircleCheck, CircleAlert } from "lucide-react"
import type { RecipeResultProps } from "../../RecipeResult.types"

export const RecipeStatus = ({ recipeResult }: RecipeResultProps) => {
  if (!recipeResult.success) {
    return (
      <div
        role="alert"
        className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-700 dark:text-red-400"
      >
        <CircleAlert className="size-5 shrink-0" />

        <div className="space-y-0.5">
          <p className="text-sm font-semibold">
            The recipe cannot be mixed with these settings.
          </p>
          <p className="text-xs">{recipeResult.error}</p>
        </div>
      </div>
    )
  }

  const { pgPercent, vgPercent } = recipeResult.data.composition

  return (
    <div
      role="status"
      className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-emerald-700 dark:text-emerald-400"
    >
      <CircleCheck className="size-5 shrink-0" />

      <div className="space-y-0.5">
        <p className="text-sm font-semibold">
          The recipe can achieve the target PG/VG ratio.
        </p>

        <p className="text-xs">
          Calculated ratio: PG {pgPercent.toFixed(1)}% / VG{" "}
          {vgPercent.toFixed(1)}% (matches target)
        </p>
      </div>
    </div>
  )
}
