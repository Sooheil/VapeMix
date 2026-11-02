import {
  Card,
  CardContent,
  CardSectionHeader,
  PgVgSlider,
  UnitInput,
} from "@/components"
import { FormSection } from "@/components/formSection/FormSection"
import type { NicotineBaseProps } from "../RecipeForm.types"

export const NicotineBase = ({
  nicBase,
  onNicBaseChange,
  nicBasePgPercent,
  onNicBasePgPercent,
}: NicotineBaseProps) => {
  return (
    <Card>
      <CardSectionHeader
        number={2}
        header="Nicotine Base"
        description="Enter the details of your nicotine base."
      />
      <CardContent>
        <div className="grid grid-cols-2 rounded-lg border">
          <FormSection
            icon="flask-conical"
            title="Nicotine Base Strength (mg/ml)"
            className="border-r"
          >
            <UnitInput
              type="number"
              value={nicBase}
              onInputChange={onNicBaseChange}
              inputGroupText="mg/ml"
            />
          </FormSection>
          <FormSection icon="droplet" title="Nicotine Base PG/VG Radio">
            <PgVgSlider
              value={nicBasePgPercent}
              onChange={onNicBasePgPercent}
            />
          </FormSection>
        </div>
      </CardContent>
    </Card>
  )
}
