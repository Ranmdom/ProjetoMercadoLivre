"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import DashboardOverview from "./dashboard-overview"
import QuestionsTab from "./questions-tab"
import ReportsTab from "./reports-tab"
import AutomationTab from "./automation-tab"
import type { User } from "@/types/user"

interface DashboardProps {
  user: User
  onLogout: () => void
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [connectedAccounts] = useState([
    {
      id: "ML123456789",
      name: "Loja Principal",
      login: "joao.silva@email.com",
      status: "active",
      lastSync: "há 2 min",
      products: 89,
    },
    {
      id: "ML987654321",
      name: "Eletrônicos Store",
      login: "eletronicos.store@email.com",
      status: "active",
      lastSync: "há 5 min",
      products: 45,
    },
    {
      id: "ML456789123",
      name: "Casa & Jardim",
      login: "casa.jardim@email.com",
      status: "error",
      lastSync: "Erro de conexão",
      products: 22,
    },
  ])

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={onLogout} connectedAccountsCount={connectedAccounts.length} />

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="questions">Perguntas</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
            <TabsTrigger value="automation">Automação</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardOverview connectedAccounts={connectedAccounts} />
          </TabsContent>

          <TabsContent value="questions">
            <QuestionsTab />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsTab />
          </TabsContent>

          <TabsContent value="automation">
            <AutomationTab />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
