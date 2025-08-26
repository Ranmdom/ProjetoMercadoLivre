import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart3 } from "lucide-react"

export default function ReportsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatórios de Vendas</CardTitle>
        <CardDescription>Acompanhe o desempenho das suas vendas em tempo real</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">R$ 12.847</p>
            <p className="text-sm text-muted-foreground">Vendas esta semana</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-secondary">89</p>
            <p className="text-sm text-muted-foreground">Pedidos processados</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">94%</p>
            <p className="text-sm text-muted-foreground">Satisfação do cliente</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Produtos Mais Vendidos</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">iPhone 15 Pro</span>
              <div className="flex items-center gap-2">
                <Progress value={85} className="w-20" />
                <span className="text-sm font-medium">23 vendas</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">MacBook Air M2</span>
              <div className="flex items-center gap-2">
                <Progress value={65} className="w-20" />
                <span className="text-sm font-medium">17 vendas</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">AirPods Pro</span>
              <div className="flex items-center gap-2">
                <Progress value={45} className="w-20" />
                <span className="text-sm font-medium">12 vendas</span>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full">
          <BarChart3 className="w-4 h-4 mr-2" />
          Gerar Relatório Completo
        </Button>
      </CardContent>
    </Card>
  )
}
