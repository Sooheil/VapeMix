import { Header } from "@/components/header"
import { ThemeContext, useThemeState } from "@/features/theme"

export function App() {
  const themeState = useThemeState()

  return (
    <ThemeContext.Provider value={themeState}>
      <Header />
    </ThemeContext.Provider>
  )
}

export default App
