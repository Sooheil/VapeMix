import { THEME_VALUES } from "../theme.consts"
import type { ThemeMode } from "../theme.types"

const isTheme = (value: string | null): value is ThemeMode => {
  return value !== null && THEME_VALUES.includes(value as ThemeMode)
}

export const getInitialTheme = (
  storageKey: string,
  defaultTheme: ThemeMode
) => {
  const storedTheme = localStorage.getItem(storageKey)
  return isTheme(storedTheme) ? storedTheme : defaultTheme
}
