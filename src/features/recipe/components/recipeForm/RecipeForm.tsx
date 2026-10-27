import { Flavorings } from "./flavorings/Flavorings"
import { NicotineBase } from "./nicotineBase/NicotineBase"
import { RecipeGoal } from "./recipeGoal/RecipeGoal"

export const RecipeForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <RecipeGoal />
      <NicotineBase />
      <Flavorings />
    </div>
  )
}
