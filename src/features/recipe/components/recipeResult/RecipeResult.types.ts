export type FlavoringInput = {
  id: string
  name: string
  percentage: number
  base: "PG" | "VG"
}

export type RecipeInput = {
  finalVolume: number
  targetNic: number
  targetPgPercent: number
  nicBase: number
  nicBasePgPercent: number
  flavorings: FlavoringInput[]
}

export type CalculatedFlavoring = FlavoringInput & {
  volume: number
  weight: number
}

export type RecipeCalculation = {
  totalVolume: number
  totalWeight: number

  nicotineBaseVolume: number
  nicotineBaseWeight: number

  pgVolume: number
  pgWeight: number

  vgVolume: number
  vgWeight: number

  flavorings: CalculatedFlavoring[]

  composition: {
    pgVolume: number
    vgVolume: number
    pgPercent: number
    vgPercent: number
    nicotineStrength: number
  }
}

export type RecipeCalculationResult =
  | {
      success: true
      data: RecipeCalculation
    }
  | {
      success: false
      error: string
    }

export interface BottleIngredient {
  id: string
  name: string
  volume: number
  color: string
}

export interface RecipeBottleProps {
  ingredients: BottleIngredient[]
  recipeResultData: RecipeCalculation
}

export interface RecipeResultProps {
  recipeResult: RecipeCalculationResult
}

export interface Ingredient extends BottleIngredient {
  weight: number
}

export interface IngredientsTableProps {
  ingredients: Ingredient[]
  totalVolume: number
  totalWeight: number
}
