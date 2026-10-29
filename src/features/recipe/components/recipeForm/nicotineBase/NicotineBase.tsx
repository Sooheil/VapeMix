import {
  Card,
  CardContent,
  CardSectionHeader,
  PgVgSlider,
  UnitInput,
} from "@/components"
import { FormSection } from "@/components/formSection/FormSection"
import { useState } from "react"

export const NicotineBase = () => {
  const [pg, setPg] = useState(50)
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
            <UnitInput type="number" defaultValue={20} inputGroupText="mg/ml" />
          </FormSection>
          <FormSection icon="droplet" title="Nicotine Base PG/VG Radio">
            <PgVgSlider value={pg} onChange={setPg} />
          </FormSection>
        </div>
      </CardContent>
    </Card>
  )
}
