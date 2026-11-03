import type { RecipeBottleProps } from "../../RecipeResult.types"

export const RecipeBottle = ({
  ingredients,
  recipeResultData,
}: RecipeBottleProps) => {
  const bottleHeight = 183
  const bottleBottom = 271
  const totalVolume = recipeResultData.totalVolume

  const totalIngredientsVolume = ingredients.reduce(
    (sum, ingredient) => sum + ingredient.volume,
    0
  )

  const tolerance = Math.max(1, totalVolume) * 1e-10

  const isValid =
    Number.isFinite(totalVolume) &&
    totalVolume > 0 &&
    ingredients.every(
      (ingredient) =>
        Number.isFinite(ingredient.volume) && ingredient.volume >= 0
    ) &&
    totalIngredientsVolume <= totalVolume + tolerance

  return (
    <div className="flex">
      <svg
        viewBox="0 0 180 300"
        className="h-75 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Recipe ingredient composition"
      >
        <defs>
          <clipPath id="bottle-liquid">
            <rect x="42" y="88" width="96" height="183" rx="20" />
          </clipPath>
        </defs>

        {/* Bottle cap */}
        <rect
          x="73"
          y="40"
          width="34"
          height="35"
          rx="8"
          fill="#94A3B8"
          stroke="#64748B"
          strokeWidth="3"
        />

        {/* Bottle body */}
        <rect
          x="37"
          y="82"
          width="106"
          height="194"
          rx="25"
          fill="#F8FAFC"
          fillOpacity="0.4"
        />

        {/* Liquid layers */}
        {isValid && (
          <g clipPath="url(#bottle-liquid)">
            {ingredients.map((ingredient, index) => {
              const previousVolume = ingredients
                .slice(0, index)
                .reduce((sum, item) => sum + item.volume, 0)

              const layerHeight =
                (ingredient.volume / totalVolume) * bottleHeight

              const layerY =
                bottleBottom -
                ((previousVolume + ingredient.volume) / totalVolume) *
                  bottleHeight

              return (
                <rect
                  key={ingredient.id}
                  x="42"
                  y={layerY}
                  width="96"
                  height={layerHeight}
                  fill={ingredient.color}
                />
              )
            })}
          </g>
        )}

        {/* Bottle outline */}
        <rect
          x="37"
          y="82"
          width="106"
          height="194"
          rx="25"
          fill="none"
          stroke="#64748B"
          strokeWidth="4"
        />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-muted-foreground">Total Volume</span>
        <h1 className="my-2 text-3xl font-extrabold">{totalVolume} ml</h1>
        <span className="text-xs text-muted-foreground">
          Target Nicotine:{" "}
          <span className="font-bold">
            {recipeResultData.composition.nicotineStrength.toFixed()} mg/ml
          </span>
        </span>
        <span className="text-xs text-muted-foreground">
          PG/VG Ratio:{" "}
          <span className="font-bold">
            {recipeResultData.composition.pgPercent.toFixed()}% /{" "}
            {recipeResultData.composition.vgPercent.toFixed()}%
          </span>
        </span>
      </div>
    </div>
  )
}
