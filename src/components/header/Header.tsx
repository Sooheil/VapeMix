import { Droplets, Save } from "lucide-react"
import { Button } from "../ui/button"
import { ThemeSwitcher } from "../themeSwitcher"

export const Header = () => {
  return (
    <header>
      <nav className="flex h-18 items-center border-b bg-background px-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <Droplets strokeWidth={2} className="mr-2 text-primary" />
              <h1 className="text-xl font-extrabold">VapeMix</h1>
            </div>

            <span className="font-light text-muted-foreground">
              E-liquid recipe builder
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Button>
              <Save className="size-4" />
              Save Recipe
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
