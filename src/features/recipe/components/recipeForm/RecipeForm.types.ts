type NumberChangeHandler = (value: number) => void

export type Flavoring = {
  id: string
  name: string
  percentage: number
  base: "PG" | "VG"
}

export interface RecipeGoalProps {
  targetNic: number
  onTargetNicChange: NumberChangeHandler
  finalVolume: number
  onFinalVolumeChange: NumberChangeHandler
  targetPgPercent: number
  onTargetPgPercent: NumberChangeHandler
}

export interface NicotineBaseProps {
  nicBase: number
  onNicBaseChange: NumberChangeHandler
  nicBasePgPercent: number
  onNicBasePgPercent: NumberChangeHandler
}

export interface FlavoringsProps {
  flavorings: Flavoring[]
  onFlavoringsChange: (flavorings: Flavoring[]) => void
}

export type RecipeFormProps = RecipeGoalProps &
  NicotineBaseProps &
  FlavoringsProps
