import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bot, WheatIcon as WhatsApp } from "lucide-react"

export default function QuestionsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerenciamento de Perguntas</CardTitle>
        <CardDescription>Perguntas dos clientes com respostas geradas por IA</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Bot className="h-4 w-4" />
          <AlertDescription>47 perguntas foram respondidas automaticamente hoje usando IA.</AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-medium">iPhone 15 Pro 256GB</p>
                <p className="text-sm text-muted-foreground">Por: João Silva</p>
              </div>
              <Badge variant="secondary">Respondida</Badge>
            </div>
            <p className="text-sm mb-3">"Qual a garantia deste produto?"</p>
            <div className="bg-muted p-3 rounded-md mb-3">
              <p className="text-sm">
                <strong>Resposta IA:</strong> Este iPhone 15 Pro possui garantia oficial Apple de 1 ano contra defeitos
                de fabricação. Também oferecemos suporte técnico completo.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <WhatsApp className="w-4 h-4 mr-2" />
                Enviar WhatsApp
              </Button>
              <Button size="sm" variant="outline">
                Editar
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-medium">MacBook Air M2</p>
                <p className="text-sm text-muted-foreground">Por: Maria Santos</p>
              </div>
              <Badge variant="destructive">Pendente</Badge>
            </div>
            <p className="text-sm mb-3">"Vocês fazem entrega no mesmo dia?"</p>
            <div className="flex gap-2">
              <Button size="sm">
                <Bot className="w-4 h-4 mr-2" />
                Gerar Resposta IA
              </Button>
              <Button size="sm" variant="outline">
                Responder Manual
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
