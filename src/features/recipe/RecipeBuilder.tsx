import { useState } from "react"
import { RecipeForm } from "./components/recipeForm/RecipeForm"
import type { Flavoring } from "./components/recipeForm/RecipeForm.types"
import { RecipeResult } from "./components/recipeResult/RecipeResult"
import { calculateRecipe } from "./utils/calculateRecipe"

export const RecipeBuilder = () => {
  const [targetNic, setTargetNic] = useState<number>(20)
  const [finalVolume, setFinalVolume] = useState<number>(100)
  const [targetPgPercent, setTargetPgPercent] = useState(50)
  const [nicBase, setNicBase] = useState(50)
  const [nicBasePgPercent, setNicBasePgPercent] = useState(50)
  const [flavorings, setFlavorings] = useState<Flavoring[]>(() => [
    {
      id: crypto.randomUUID(),
      name: "",
      percentage: 5,
      base: "PG",
    },
  ])
  const result = calculateRecipe({
    finalVolume: 100,
    targetNic: 20,
    targetPgPercent: 50,
    nicBase: 50,
    nicBasePgPercent: 50,
    flavorings: [
      {
        id: "strawberry",
        name: "Strawberry",
        percentage: 5,
        base: "PG",
      },
    ],
  })
  console.log(result)
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
        flavorings={flavorings}
        onFlavoringsChange={setFlavorings}
      />
      <RecipeResult />
    </div>
  )
}
