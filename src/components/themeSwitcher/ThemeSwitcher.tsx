import { Sun, Moon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { useState } from "react"
import { ThemeMode } from "./ThemeSwitcher.types"

export const ThemeSwitcher = () => {
  const [appTheme, setAppTheme] = useState(ThemeMode.Light)
  const handleThemeChange = () => {
    setAppTheme((prev) =>
      prev === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    )
  }
  return (
    <ToggleGroup
      multiple={false}
      defaultValue={[ThemeMode.Light]}
      className="rounded-lg bg-muted p-1"
    >
      <ToggleGroupItem
        value={ThemeMode.Light}
        onChange={handleThemeChange}
        className="gap-2 rounded-md px-3 data-pressed:bg-card data-pressed:shadow-sm"
      >
        <Sun className="size-4" />
        Light
      </ToggleGroupItem>

      <ToggleGroupItem
        value={ThemeMode.Dark}
        onChange={handleThemeChange}
        className="gap-2 rounded-md px-3 data-pressed:bg-card data-pressed:shadow-sm"
      >
        <Moon className="size-4" />
        Dark
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
