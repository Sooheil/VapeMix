export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

export type ThemeStateOptions = {
  defaultTheme?: ThemeMode
  storageKey?: string
}
