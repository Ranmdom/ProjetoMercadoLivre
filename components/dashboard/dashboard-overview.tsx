import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, MessageSquare, Package, TrendingUp, CheckCircle, AlertCircle, ShoppingCart } from "lucide-react"

interface ConnectedAccount {
  id: string
  name: string
  login: string
  status: string
  lastSync: string
  products: number
}

interface DashboardOverviewProps {
  connectedAccounts: ConnectedAccount[]
}

export default function DashboardOverview({ connectedAccounts }: DashboardOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.847,50</div>
            <p className="text-xs text-muted-foreground">+12% em relação a ontem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Perguntas Respondidas</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+8 nas últimas 2 horas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos Ativos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Across {connectedAccounts.length} accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4%</div>
            <p className="text-xs text-muted-foreground">+2.1% este mês</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Connected Accounts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas interações automatizadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Pergunta respondida automaticamente</p>
                <p className="text-xs text-muted-foreground">iPhone 15 Pro - há 5 minutos</p>
              </div>
              <Badge variant="secondary">IA</Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Relatório enviado via WhatsApp</p>
                <p className="text-xs text-muted-foreground">Conta Principal - há 1 hora</p>
              </div>
              <Badge variant="outline">WhatsApp</Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Nova pergunta pendente</p>
                <p className="text-xs text-muted-foreground">MacBook Air M2 - há 2 horas</p>
              </div>
              <Badge variant="destructive">Pendente</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contas Conectadas</CardTitle>
            <CardDescription>Logins ativos das suas contas do Mercado Livre</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {connectedAccounts.map((account) => (
              <div
                key={account.id}
                className={`flex items-center justify-between p-3 border rounded-lg ${
                  account.status === "error" ? "border-yellow-200" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {account.status === "active" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  <div>
                    <p className="font-medium">{account.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Login: {account.login} • {account.products} produtos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ID: {account.id} • {account.lastSync}
                    </p>
                  </div>
                </div>
                <Badge variant={account.status === "active" ? "secondary" : "destructive"}>
                  {account.status === "active" ? "Ativo" : "Erro"}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Conectar Nova Conta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
