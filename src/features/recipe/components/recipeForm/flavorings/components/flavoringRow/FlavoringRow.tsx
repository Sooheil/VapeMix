import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { TableCell, TableRow } from "@/components/ui/table"
import type { FlavoringRowProps } from "./FlavoringRow.types"

export const FlavoringRow = ({
  flavor,
  onChange,
  onRemove,
  rowNumber,
}: FlavoringRowProps) => {
  return (
    <TableRow>
      <TableCell className="w-12 text-center text-muted-foreground">
        {rowNumber}
      </TableCell>
      <TableCell>
        <Input
          placeholder="e.g. Strawberry"
          value={flavor.name}
          aria-label={`Flavor ${rowNumber} name`}
          onChange={(e) => onChange({ ...flavor, name: e.target.value })}
        />
      </TableCell>

      <TableCell className="w-40">
        <InputGroup>
          <InputGroupInput
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={flavor.percentage}
            aria-label={`Flavor ${rowNumber} percentage`}
            onChange={(e) =>
              onChange({
                ...flavor,
                percentage: Math.min(100, Math.max(0, Number(e.target.value))),
              })
            }
          />
          <InputGroupAddon
            align="inline-end"
            className="rounded-r-md border-l bg-muted px-3"
          >
            <InputGroupText>%</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </TableCell>

      <TableCell className="w-32">
        <select
          className="h-9 w-full rounded-md border border-input bg-transparent px-2.5 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
          value={flavor.base}
          aria-label={`Flavor ${rowNumber} base type`}
          onChange={(e) =>
            onChange({
              ...flavor,
              base: e.target.value as "PG" | "VG",
            })
          }
        >
          <option value="PG">PG</option>
          <option value="VG">VG</option>
        </select>
      </TableCell>

      <TableCell className="w-12 text-center">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={onRemove}
          aria-label={`Remove flavor ${rowNumber}`}
        >
          <Trash2 className="size-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
