import { Moon, Sun } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useTheme } from "../hooks/themeHook"
import { ThemeMode } from "../theme.types"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = ([nextTheme]: string[]) => {
    if (nextTheme === ThemeMode.Light || nextTheme === ThemeMode.Dark) {
      setTheme(nextTheme)
    }
  }

  return (
    <ToggleGroup
      multiple={false}
      value={[theme]}
      onValueChange={handleThemeChange}
      aria-label="Color theme"
      className="rounded-lg bg-muted p-1"
    >
      <ToggleGroupItem
        value={ThemeMode.Light}
        aria-label="Use light theme"
        className="gap-2 rounded-md px-3 data-[state=on]:bg-card data-[state=on]:shadow-sm"
      >
        <Sun className="size-4" />
        Light
      </ToggleGroupItem>

      <ToggleGroupItem
        value={ThemeMode.Dark}
        aria-label="Use dark theme"
        className="gap-2 rounded-md px-3 data-[state=on]:bg-card data-[state=on]:shadow-sm"
      >
        <Moon className="size-4" />
        Dark
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
