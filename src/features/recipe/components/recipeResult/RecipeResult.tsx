import { Card, CardContent, CardSectionHeader } from "@/components"
import { RecipeBottle } from "./components/recipeBottle/RecipeBottle"
import type { Ingredient, RecipeResultProps } from "./RecipeResult.types"
import {
  getFlavorColor,
  NICOTINE_COLOR,
  PG_COLOR,
  VG_COLOR,
} from "./RecipeResult.const"
import { IngredientsTable } from "./components/ingredientsTable/IngredientsTable"
import { RecipeComposition } from "./components/recipeComposition/RecipeComposition"
import { RecipeStatus } from "./components/recipeStatus/RecipeStatus"

export const RecipeResult = ({ recipeResult }: RecipeResultProps) => {
  const ingredients: Ingredient[] = recipeResult.success
    ? [
        {
          id: "vg",
          name: "Pure VG",
          volume: recipeResult.data.vgVolume,
          weight: recipeResult.data.vgWeight,
          color: VG_COLOR,
        },
        {
          id: "pg",
          name: "Pure PG",
          volume: recipeResult.data.pgVolume,
          weight: recipeResult.data.pgWeight,
          color: PG_COLOR,
        },
        ...recipeResult.data.flavorings.map((flavor, index) => ({
          id: `flavor-${flavor.id || index}`,
          name: flavor.name || `Flavor-${index}`,
          volume: flavor.volume,
          weight: flavor.weight,
          color: getFlavorColor(index),
        })),
        {
          id: "nicotine",
          name: "Nicotine Base",
          volume: recipeResult.data.nicotineBaseVolume,
          weight: recipeResult.data.nicotineBaseWeight,
          color: NICOTINE_COLOR,
        },
      ]
    : []

  return (
    <Card>
      <CardSectionHeader
        number={4}
        header="Recipe Result"
        description="Calculated ingredient amounts for your e-liquid"
      />

      <CardContent>
        {recipeResult.success && (
          <div className="grid gap-2">
            <div className="grid min-h-48 grid-cols-2 rounded-lg border bg-muted p-3">
              <RecipeBottle
                ingredients={ingredients}
                recipeResultData={recipeResult.data}
              />
              <IngredientsTable
                ingredients={ingredients}
                totalVolume={recipeResult.data.totalVolume}
                totalWeight={recipeResult.data.totalWeight}
              />
            </div>
            <div>
              <RecipeComposition
                ingredients={ingredients}
                totalVolume={recipeResult.data.totalVolume}
              />
            </div>
          </div>
        )}
        <RecipeStatus recipeResult={recipeResult} />
        <div>
          <span className="block text-xl font-extrabold">Safety</span>{" "}
          Concentrated nicotine can harm or kill children, pets, or even adults.
          Please inform yourself of how to mitigate the dangers before you try
          mixing your own. If you want to be a hundred percent certain about
          your calculations, you should double check your results using other
          tools as well.
        </div>
      </CardContent>
    </Card>
  )
}
