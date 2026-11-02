import { useState } from "react"
import { RecipeForm } from "./components/recipeForm/RecipeForm"
import { RecipeResult } from "./components/recipeResult/RecipeResult"

export const RecipeBuilder = () => {
  const [targetNic, setTargetNic] = useState<number>(20)
  const [finalVolume, setFinalVolume] = useState<number>(100)
  const [targetPgPercent, setTargetPgPercent] = useState(50)
  const [nicBase, setNicBase] = useState(50)
  const [nicBasePgPercent, setNicBasePgPercent] = useState(50)

  return (
    <div className="m-4 grid grid-cols-2 gap-4">
      <RecipeForm
        onTargetNicChange={setTargetNic}
        targetNic={targetNic}
        finalVolume={finalVolume}
        onFinalVolumeChange={setFinalVolume}
        onTargetPgPercent={setTargetPgPercent}
        targetPgPercent={targetPgPercent}
        nicBase={nicBase}
        onNicBaseChange={setNicBase}
        nicBasePgPercent={nicBasePgPercent}
        onNicBasePgPercent={setNicBasePgPercent}
      />
      <RecipeResult />
    </div>
  )
}
