"use client"

import SettingsPage from "@/components/settings/settings-page"
import { useState } from "react"

export default function ConfiguracoesPage() {
  const [currentUser] = useState({
    name: "João Silva",
    email: "joao@exemplo.com",
    avatar: "JS",
  })

  const handleLogout = () => {
    // Redirect to home page
    window.location.href = "/"
  }

  return <SettingsPage user={currentUser} onLogout={handleLogout} />
}
