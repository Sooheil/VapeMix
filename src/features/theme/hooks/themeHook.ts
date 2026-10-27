import * as React from "react"

import { ThemeContext } from "../context/themeContext"
import { ThemeMode, type ThemeStateOptions } from "../theme.types"
import { getInitialTheme } from "../utils/getInitialTheme"

export const useThemeState = ({
  defaultTheme = ThemeMode.Light,
  storageKey = "vapemix-theme",
}: ThemeStateOptions = {}) => {
  const [theme, setThemeState] = React.useState<ThemeMode>(() =>
    getInitialTheme(storageKey, defaultTheme)
  )

  const setTheme = React.useCallback(
    (nextTheme: ThemeMode) => {
      localStorage.setItem(storageKey, nextTheme)
      setThemeState(nextTheme)
    },
    [storageKey]
  )

  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove(ThemeMode.Light, ThemeMode.Dark)
    root.classList.add(theme)
    root.style.colorScheme = theme
  }, [theme])

  return React.useMemo(() => ({ theme, setTheme }), [setTheme, theme])
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeContext.Provider")
  }

  return context
}
