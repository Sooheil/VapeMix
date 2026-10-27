import { Header } from "@/components/header"
import { ThemeContext, useThemeState } from "@/features/theme"
import { RecipeForm } from "./features/recipe/components/recipeForm/RecipeForm"

export function App() {
  const themeState = useThemeState()

  return (
    <ThemeContext.Provider value={themeState}>
      <Header />
      <div className="m-4">
        <RecipeForm />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
