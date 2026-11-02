import { Header } from "@/components/header"
import { ThemeContext, useThemeState } from "@/features/theme"
import { RecipeBuilder } from "./features/recipe/RecipeBuilder"

export function App() {
  const themeState = useThemeState()

  return (
    <ThemeContext.Provider value={themeState}>
      <Header />
      <RecipeBuilder />
    </ThemeContext.Provider>
  )
}

export default App
