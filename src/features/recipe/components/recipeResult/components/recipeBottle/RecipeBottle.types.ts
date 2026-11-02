export type BottleIngredient = {
  id: string
  name: string
  volume: number
  color: string
}

export type RecipeBottleProps = {
  totalVolume: number
  ingredients: BottleIngredient[]
}
