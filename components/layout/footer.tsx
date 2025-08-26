import { ShoppingCart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-primary-foreground">ML Automação</p>
              <p className="text-sm text-primary-foreground/80">Plataforma de automação para Mercado Livre</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
            <span>© 2024 ML Automação</span>
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
