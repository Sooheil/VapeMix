import { Card, CardContent, CardFooter, CardSectionHeader } from "@/components"

export const RecipeGoal = () => {
  return (
    <Card>
      <CardSectionHeader
        number={1}
        titleHeader="Recipe Goal"
        titleDescription="Set your desire e-liquid properties"
      />
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
