import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"
import type { IngredientsTableProps } from "../../RecipeResult.types"

export const IngredientsTable = ({
  ingredients,
  totalVolume,
  totalWeight,
}: IngredientsTableProps) => {
  return (
    <div className="rounded-lg border bg-card p-0.5">
      <Table>
        <TableHeader className="bg-card/60">
          <TableRow className="hover:bg-transparent">
            <TableHead scope="col">Ingredient</TableHead>
            <TableHead scope="col" className="text-right">
              Amount (ml)
            </TableHead>
            <TableHead scope="col" className="text-right">
              Weight (g)
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-card">
          {ingredients.map((ingredient) => (
            <TableRow key={ingredient.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: ingredient.color }}
                  />
                  <span>{ingredient.name}</span>
                </div>
              </TableCell>

              <TableCell className="text-right tabular-nums">
                {ingredient.volume.toFixed(2)}
              </TableCell>

              <TableCell className="text-right tabular-nums">
                {ingredient.weight.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="font-extrabold">Total</span>
              </div>
            </TableCell>
            <TableCell className="text-right font-extrabold tabular-nums">
              {totalVolume.toFixed(2)}
            </TableCell>
            <TableCell className="text-right font-extrabold tabular-nums">
              {totalWeight.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
