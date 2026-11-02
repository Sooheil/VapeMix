type inputValueType = (value: number) => void

export interface RecipeGoalProps {
  targetNic: number
  onTargetNicChange: inputValueType
  finalVolume: number
  onFinalVolumeChange: inputValueType
  targetPgPercent: number
  onTargetPgPercent: inputValueType
}

export interface NicotineBaseProps {
  nicBase: number
  onNicBaseChange: inputValueType
  nicBasePgPercent: number
  onNicBasePgPercent: inputValueType
}

export type RecipeFormProps = RecipeGoalProps & NicotineBaseProps
