import { CirclePlus } from "lucide-react"
import {
  Card,
  CardContent,
  CardSectionHeader,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"
import { Button } from "@/components/ui/button"
import type { Flavoring, FlavoringsProps } from "../RecipeForm.types"
import { FlavoringRow } from "./components/flavoringRow/FlavoringRow"

const percentageFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
})

export const Flavorings = ({
  flavorings,
  onFlavoringsChange,
}: FlavoringsProps) => {
  const addFlavor = () => {
    onFlavoringsChange([
      ...flavorings,
      { id: crypto.randomUUID(), name: "", percentage: 0, base: "PG" },
    ])
  }

  const updateFlavor = (updated: Flavoring) => {
    onFlavoringsChange(
      flavorings.map((flavor) => (flavor.id === updated.id ? updated : flavor))
    )
  }

  const removeFlavor = (id: string) => {
    onFlavoringsChange(flavorings.filter((flavor) => flavor.id !== id))
  }

  const totalPercentage = flavorings.reduce(
    (total, flavor) => total + flavor.percentage,
    0
  )

  return (
    <Card>
      <CardSectionHeader
        number={3}
        header="Flavorings"
        description="Add your flavorings and set their percentages."
      />

      <CardContent>
        <div className="overflow-hidden rounded-lg border">
          <Table className="min-w-155 table-fixed">
            <TableHeader className="bg-muted/70">
              <TableRow className="hover:bg-transparent">
                <TableHead scope="col" className="w-12 text-center">
                  #
                </TableHead>
                <TableHead scope="col">Flavor Name</TableHead>
                <TableHead scope="col" className="w-40">
                  Percentage
                </TableHead>
                <TableHead scope="col" className="w-32">
                  Base Type
                </TableHead>
                <TableHead scope="col" className="w-12">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flavorings.map((flavor, index) => (
                <FlavoringRow
                  key={flavor.id}
                  rowNumber={index + 1}
                  flavor={flavor}
                  onChange={updateFlavor}
                  onRemove={() => removeFlavor(flavor.id)}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-between">
          <div>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="bg-primary/30 text-primary hover:bg-primary/10"
              onClick={addFlavor}
            >
              <CirclePlus className="size-4 fill-primary text-primary-foreground" />
              Add Flavor
            </Button>
          </div>
          <div className="text-right">
            <span className="mr-6 text-xs text-muted-foreground">
              Total Flavoring:
            </span>
            <strong className="text-base text-primary">
              {percentageFormatter.format(totalPercentage)}%
            </strong>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
