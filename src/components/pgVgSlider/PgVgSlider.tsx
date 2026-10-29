import { Slider } from "@base-ui/react/slider"
import type { PgVgSliderProps } from "./PgVgSlider.types"

export const PgVgSlider = ({ value, onChange }: PgVgSliderProps) => {
  const vg = 100 - value

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-pg">
          PG <span className="font-extrabold">{value}%</span>
        </span>
        <span className="text-vg">
          VG <span className="font-extrabold">{vg}%</span>
        </span>
      </div>

      <Slider.Root
        value={value}
        min={0}
        max={100}
        step={10}
        onValueChange={(nextValue) => {
          if (typeof nextValue === "number") {
            onChange(nextValue)
          }
        }}
      >
        <Slider.Control className="flex h-6 w-full items-center">
          <Slider.Track className="relative h-2.5 w-full rounded-full bg-linear-to-r from-pg to-vg">
            <Slider.Thumb className="size-5 rounded-full border border-primary bg-white shadow-sm" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>

      <div className="flex justify-between text-xs text-muted-foreground">
        <div>
          <div className="font-bold">PG</div>
          <div>100%</div>
        </div>
        <div>
          <div className="font-bold">VG</div>
          <div>100%</div>
        </div>
      </div>
    </div>
  )
}
