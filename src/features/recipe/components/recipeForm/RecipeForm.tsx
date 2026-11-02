import { Flavorings } from "./flavorings/Flavorings"
import { NicotineBase } from "./nicotineBase/NicotineBase"
import type { RecipeFormProps } from "./RecipeForm.types"
import { RecipeGoal } from "./recipeGoal/RecipeGoal"

export const RecipeForm = (props: RecipeFormProps) => {
  return (
    <div className="flex flex-col gap-4">
      <RecipeGoal {...props} />
      <NicotineBase {...props} />
      <Flavorings />
    </div>
  )
}
