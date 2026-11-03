export const FLAVOR_COLORS = ["#FFB84C", "#A78BFA", "#60A5FA", "#F472B6"]
export const getFlavorColor = (index: number): string => {
  if (index < FLAVOR_COLORS.length) {
    return FLAVOR_COLORS[index]
  }

  const hue = (index * 137.508) % 360
  return `hsl(${hue} 70% 65%)`
}
export const VG_COLOR = "#34CDA2"
export const PG_COLOR = "#48AEF5"
export const NICOTINE_COLOR = "#F45A82"
