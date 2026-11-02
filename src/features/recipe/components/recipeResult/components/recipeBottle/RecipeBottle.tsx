import type { RecipeBottleProps } from "./RecipeBottle.types"

export const RecipeBottle = ({
  totalVolume,
  ingredients,
}: RecipeBottleProps) => {
  const bottleHeight = 183
  const bottleBottom = 271

  const isValid =
    Number.isFinite(totalVolume) &&
    totalVolume > 0 &&
    ingredients.every(
      (ingredient) =>
        Number.isFinite(ingredient.volume) && ingredient.volume >= 0
    ) &&
    ingredients.reduce((sum, ingredient) => sum + ingredient.volume, 0) <=
      totalVolume

  return (
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
        y="10"
        width="34"
        height="65"
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

            const layerHeight = (ingredient.volume / totalVolume) * bottleHeight

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
  )
}
