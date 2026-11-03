import { ChartPie } from "lucide-react"
import type { RecipeCompositionProps } from "../../RecipeResult.types"

export const RecipeComposition = ({
  ingredients,
  totalVolume,
}: RecipeCompositionProps) => {
  const visibleIngredients = ingredients.filter(
    (ingredient) => ingredient.volume > 0
  )

  const getPercentage = (volume: number) => (volume / totalVolume) * 100

  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      <div className="flex items-center gap-2">
        <ChartPie size={22} strokeWidth={1.8} className="text-primary" />
        <h3 className="text-sm font-semibold">Recipe Composition</h3>
      </div>

      {/* Stacked progress bar */}
      <div className="flex h-8 overflow-hidden rounded-md">
        {visibleIngredients.map((ingredient) => {
          const percentage = getPercentage(ingredient.volume)

          return (
            <div
              key={ingredient.id}
              className="flex items-center justify-center overflow-hidden text-[10px] font-semibold text-white"
              style={{
                width: `${percentage}%`,
                backgroundColor: ingredient.color,
              }}
              title={`${ingredient.name}: ${percentage.toFixed(2)}%`}
            >
              {percentage >= 3 && `${Number(percentage.toFixed(2))}%`}
            </div>
          )
        })}
      </div>

      {/* Ingredient legend */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {visibleIngredients.map((ingredient) => (
          <div key={ingredient.id} className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: ingredient.color }}
              />
              <span className="truncate text-xs text-muted-foreground">
                {ingredient.name}
              </span>
            </div>

            <p className="pl-3.5 text-xs font-semibold tabular-nums">
              {ingredient.volume.toFixed(2)} ml
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
