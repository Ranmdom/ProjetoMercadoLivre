import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings } from "lucide-react"

export default function AutomationTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações de Automação</CardTitle>
        <CardDescription>Configure as automações para otimizar seu atendimento</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Respostas Automáticas com IA</p>
              <p className="text-sm text-muted-foreground">Responder perguntas automaticamente usando ChatGPT</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Aprovação via WhatsApp</p>
              <p className="text-sm text-muted-foreground">Enviar respostas para aprovação antes de publicar</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Relatórios Automáticos</p>
              <p className="text-sm text-muted-foreground">Enviar relatórios de vendas por hora via WhatsApp</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Sincronização Contínua</p>
              <p className="text-sm text-muted-foreground">Manter dados sempre atualizados com o Mercado Livre</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>

        <Alert>
          <Settings className="h-4 w-4" />
          <AlertDescription>
            As configurações são aplicadas a todas as contas conectadas. Você pode personalizar por conta nas
            configurações avançadas.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
