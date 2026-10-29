export type Flavoring = {
  id: string
  name: string
  percentage: number
  base: "PG" | "VG"
}

export interface FlavoringRowProps {
  flavor: Flavoring
  onChange: (flavor: Flavoring) => void
  onRemove: () => void
  rowNumber: number
}
