"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ShoppingCart, WheatIcon as WhatsApp, Bot, Settings } from "lucide-react"
import Link from "next/link"
import type { User } from "@/types/user"

interface SettingsPageProps {
  user: User
  onLogout: () => void
}

export default function SettingsPage({ user, onLogout }: SettingsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={onLogout} title="ML Automação - Configurações" />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/">← Voltar ao Dashboard</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
              <CardDescription>Gerencie suas conexões com serviços externos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Mercado Livre API</p>
                    <p className="text-sm text-muted-foreground">OAuth2 conectado</p>
                  </div>
                </div>
                <Badge variant="secondary">Conectado</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <WhatsApp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp Business</p>
                    <p className="text-sm text-muted-foreground">API configurada</p>
                  </div>
                </div>
                <Badge variant="secondary">Conectado</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                    <Bot className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">OpenAI ChatGPT</p>
                    <p className="text-sm text-muted-foreground">API key ativa</p>
                  </div>
                </div>
                <Badge variant="secondary">Conectado</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações da Conta</CardTitle>
              <CardDescription>Gerencie suas preferências pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" defaultValue="João Silva" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="joao@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp</Label>
                <Input id="phone" defaultValue="+55 11 99999-9999" />
              </div>
              <Button className="w-full">Salvar Alterações</Button>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
