import {
  Card,
  CardContent,
  CardSectionHeader,
  UnitInput,
  PgVgSlider,
} from "@/components"
import { FormSection } from "@/components/formSection/FormSection"
import type { RecipeGoalProps } from "../RecipeForm.types"

export const RecipeGoal = ({
  targetNic,
  finalVolume,
  targetPgPercent,
  onTargetNicChange,
  onFinalVolumeChange,
  onTargetPgPercent,
}: RecipeGoalProps) => {
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
            <UnitInput
              type="number"
              defaultValue={finalVolume}
              value={finalVolume}
              onInputChange={onFinalVolumeChange}
              inputGroupText="ml"
            />
          </FormSection>
          <FormSection
            icon="chart-no-axes-column"
            title="Target Nicotine (mg/ml)"
            className="border-r"
          >
            <UnitInput
              type="number"
              value={targetNic}
              onInputChange={onTargetNicChange}
              inputGroupText="mg/ml"
            />
          </FormSection>
          <FormSection icon="droplet" title="Target PG/VG Ratio">
            <PgVgSlider value={targetPgPercent} onChange={onTargetPgPercent} />
          </FormSection>
        </div>
      </CardContent>
    </Card>
  )
}
