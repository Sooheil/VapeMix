import { Card, CardContent, CardSectionHeader } from "@/components"
import { RecipeBottle } from "./components/recipeBottle/RecipeBottle"

export const RecipeResult = () => {
  const ingredients = [
    { id: "vg", name: "VG", volume: 60, color: "#34CDA2" },
    { id: "pg", name: "PG", volume: 20, color: "#48AEF5" },
    {
      id: "flavorings",
      name: "Flavorings",
      volume: 10,
      color: "#AD68EC",
    },
    {
      id: "nicotine",
      name: "Nicotine Base",
      volume: 10,
      color: "#F45A82",
    },
  ]
  return (
    <Card>
      <CardSectionHeader
        number={2}
        header="Recipe Result"
        description="Calculated ingredient amounts for your e-liquid"
      />
      <CardContent>
        <div className="grid min-h-48 grid-cols-2 rounded-lg border bg-muted">
          <RecipeBottle totalVolume={100} ingredients={ingredients} />{" "}
          <div>col2</div>
        </div>
      </CardContent>
    </Card>
  )
}
