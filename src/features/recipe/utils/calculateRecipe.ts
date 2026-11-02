export type FlavoringInput = {
  id: string
  name: string
  percentage: number
  base: "PG" | "VG"
}

export type RecipeInput = {
  finalVolume: number
  targetNic: number
  targetPgPercent: number
  nicBase: number
  nicBasePgPercent: number
  flavorings: FlavoringInput[]
}

export type CalculatedFlavoring = FlavoringInput & {
  volume: number
  weight: number
}

export type RecipeCalculation = {
  totalVolume: number
  totalWeight: number

  nicotineBaseVolume: number
  nicotineBaseWeight: number

  pgVolume: number
  pgWeight: number

  vgVolume: number
  vgWeight: number

  flavorings: CalculatedFlavoring[]

  composition: {
    pgVolume: number
    vgVolume: number
    pgPercent: number
    vgPercent: number
    nicotineStrength: number
  }
}

export type RecipeCalculationResult =
  | {
      success: true
      data: RecipeCalculation
    }
  | {
      success: false
      error: string
    }

// Approximate densities in g/ml
const DENSITY = {
  PG: 1.036,
  VG: 1.261,
  PG_FLAVOR: 1.048,
  VG_FLAVOR: 1.261,
} as const

const isValidPercentage = (value: number): boolean =>
  Number.isFinite(value) && value >= 0 && value <= 100

const isNonNegativeNumber = (value: number): boolean =>
  Number.isFinite(value) && value >= 0

const calculateNicotineBaseDensity = (pgPercent: number): number => {
  const pgRatio = pgPercent / 100
  const vgRatio = 1 - pgRatio

  return pgRatio * DENSITY.PG + vgRatio * DENSITY.VG
}

export const calculateRecipe = (
  input: RecipeInput
): RecipeCalculationResult => {
  const {
    finalVolume,
    targetNic,
    targetPgPercent,
    nicBase,
    nicBasePgPercent,
    flavorings,
  } = input

  // 1. Input validation

  if (!Number.isFinite(finalVolume) || finalVolume <= 0) {
    return {
      success: false,
      error: "Final volume must be greater than zero.",
    }
  }

  if (!isNonNegativeNumber(targetNic)) {
    return {
      success: false,
      error: "Invalid target nicotine strength.",
    }
  }

  if (!isNonNegativeNumber(nicBase)) {
    return {
      success: false,
      error: "Invalid nicotine base strength.",
    }
  }

  if (!isValidPercentage(targetPgPercent)) {
    return {
      success: false,
      error: "Target PG percentage must be between 0 and 100.",
    }
  }

  if (!isValidPercentage(nicBasePgPercent)) {
    return {
      success: false,
      error: "Nicotine base PG percentage must be between 0 and 100.",
    }
  }

  if (targetNic > 0 && nicBase === 0) {
    return {
      success: false,
      error: "Nicotine base is required.",
    }
  }

  if (targetNic > nicBase) {
    return {
      success: false,
      error: "Target nicotine exceeds the nicotine base strength.",
    }
  }

  if (!Array.isArray(flavorings)) {
    return {
      success: false,
      error: "Invalid flavorings.",
    }
  }

  for (const flavor of flavorings) {
    if (!isValidPercentage(flavor.percentage)) {
      return {
        success: false,
        error: `Invalid percentage for "${flavor.name}".`,
      }
    }

    if (flavor.base !== "PG" && flavor.base !== "VG") {
      return {
        success: false,
        error: `Invalid base for "${flavor.name}".`,
      }
    }
  }

  // 2. Nicotine base volume

  const nicotineBaseVolume =
    targetNic === 0 ? 0 : (finalVolume * targetNic) / nicBase

  // 3. Flavoring volumes and weights

  const calculatedFlavorings: CalculatedFlavoring[] = flavorings.map(
    (flavor) => {
      const volume = (finalVolume * flavor.percentage) / 100

      const density =
        flavor.base === "PG" ? DENSITY.PG_FLAVOR : DENSITY.VG_FLAVOR

      return {
        ...flavor,
        volume,
        weight: volume * density,
      }
    }
  )

  const totalFlavorVolume = calculatedFlavorings.reduce(
    (sum, flavor) => sum + flavor.volume,
    0
  )

  const totalFlavorWeight = calculatedFlavorings.reduce(
    (sum, flavor) => sum + flavor.weight,
    0
  )

  // 4. PG/VG contributed by nicotine base

  const nicotineBasePgVolume = nicotineBaseVolume * (nicBasePgPercent / 100)

  const nicotineBaseVgVolume = nicotineBaseVolume - nicotineBasePgVolume

  // 5. PG/VG contributed by flavorings

  const flavorPgVolume = calculatedFlavorings
    .filter((flavor) => flavor.base === "PG")
    .reduce((sum, flavor) => sum + flavor.volume, 0)

  const flavorVgVolume = calculatedFlavorings
    .filter((flavor) => flavor.base === "VG")
    .reduce((sum, flavor) => sum + flavor.volume, 0)

  // 6. Target PG/VG volumes

  const targetPgVolume = finalVolume * (targetPgPercent / 100)

  const targetVgVolume = finalVolume - targetPgVolume

  // 7. Required additional pure PG/VG

  const rawPgVolume = targetPgVolume - nicotineBasePgVolume - flavorPgVolume

  const rawVgVolume = targetVgVolume - nicotineBaseVgVolume - flavorVgVolume

  // 8. Recipe feasibility validation

  const tolerance = Math.max(1, finalVolume) * 1e-10

  if (
    ![nicotineBaseVolume, totalFlavorVolume, rawPgVolume, rawVgVolume].every(
      Number.isFinite
    )
  ) {
    return {
      success: false,
      error: "Calculated volumes are not finite.",
    }
  }

  if (nicotineBaseVolume + totalFlavorVolume > finalVolume + tolerance) {
    return {
      success: false,
      error: "Ingredients exceed the final volume.",
    }
  }

  if (rawPgVolume < -tolerance) {
    return {
      success: false,
      error: "Target PG ratio cannot be achieved.",
    }
  }

  if (rawVgVolume < -tolerance) {
    return {
      success: false,
      error: "Target VG ratio cannot be achieved.",
    }
  }

  const pgVolume = Math.max(0, rawPgVolume)
  const vgVolume = Math.max(0, rawVgVolume)

  // 9. Estimated weights

  const nicotineBaseDensity = calculateNicotineBaseDensity(nicBasePgPercent)

  const nicotineBaseWeight = nicotineBaseVolume * nicotineBaseDensity

  const pgWeight = pgVolume * DENSITY.PG
  const vgWeight = vgVolume * DENSITY.VG

  const totalWeight =
    nicotineBaseWeight + pgWeight + vgWeight + totalFlavorWeight

  // 10. Final composition

  const finalPgVolume = pgVolume + nicotineBasePgVolume + flavorPgVolume

  const finalVgVolume = vgVolume + nicotineBaseVgVolume + flavorVgVolume

  const finalNicotineStrength = (nicotineBaseVolume * nicBase) / finalVolume

  return {
    success: true,
    data: {
      totalVolume: finalVolume,
      totalWeight,

      nicotineBaseVolume,
      nicotineBaseWeight,

      pgVolume,
      pgWeight,

      vgVolume,
      vgWeight,

      flavorings: calculatedFlavorings,

      composition: {
        pgVolume: finalPgVolume,
        vgVolume: finalVgVolume,
        pgPercent: (finalPgVolume / finalVolume) * 100,
        vgPercent: (finalVgVolume / finalVolume) * 100,
        nicotineStrength: finalNicotineStrength,
      },
    },
  }
}
