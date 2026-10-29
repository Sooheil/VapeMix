import {
  Card,
  CardContent,
  CardSectionHeader,
  Input,
  UnitInput,
} from "@/components"
import { FormSection } from "@/components/formSection/FormSection"

export const RecipeGoal = () => {
  return (
    <Card>
      <CardSectionHeader
        number={1}
        header="Recipe Goal"
        description="Set your desired e-liquid properties."
      />
      <CardContent>
        <div className="grid grid-cols-3 rounded-lg border">
          <FormSection
            icon="flask-conical"
            title="Final Volume (ml)"
            className="border-r"
          >
            <UnitInput type="number" defaultValue={100} inputGroupText="ml" />
          </FormSection>
          <FormSection
            icon="chart-no-axes-column"
            title="Target Nicotine (mg/ml)"
            className="border-r"
          >
            <UnitInput type="number" defaultValue={3} inputGroupText="mg/ml" />
          </FormSection>
          <FormSection icon="droplet" title="Target PG/VG Ratio">
            <Input type="number" min={0} defaultValue={100} />
          </FormSection>
        </div>
      </CardContent>
    </Card>
  )
}
