import { ShoppingCart } from "lucide-react"
import  ThemeToggle  from "../ui/themeToggle"

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-zinc-900 border-t border-border mt-12">
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 lg:py-6 2xl:py-8 3xl:py-10 gap-4">
          <div className="flex items-center gap-3 lg:gap-4 3xl:gap-6">
            <div className="w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12 bg-primary-foreground dark:bg-zinc-800 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 3xl:w-8 3xl:h-8 text-primary dark:text-zinc-100" />
            </div>
            <div>
              <p className="font-medium text-primary-foreground dark:text-zinc-400 text-base lg:text-lg 2xl:text-xl 3xl:text-2xl">
                ML Automação
              </p>
              <p className="text-sm lg:text-base 2xl:text-lg 3xl:text-xl text-primary-foreground/80 dark:text-zinc-400">
                Plataforma de automação para Mercado Livre
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 3xl:gap-8 text-sm lg:text-base 2xl:text-lg 3xl:text-xl text-primary-foreground/80 dark:text-zinc-400">
            <span>© {new Date().getFullYear()} ML Automação</span>
            <span>•</span>
            <span>Suporte 24/7</span>
            <span>•</span>
            <span>Termos de Uso</span>

          

          </div>
        </div>
      </div>
    </footer>
  )
}
