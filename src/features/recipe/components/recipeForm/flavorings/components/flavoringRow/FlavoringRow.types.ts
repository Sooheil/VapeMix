import type { Flavoring } from "../../../RecipeForm.types"

export interface FlavoringRowProps {
  flavor: Flavoring
  onChange: (flavor: Flavoring) => void
  onRemove: () => void
  rowNumber: number
}
