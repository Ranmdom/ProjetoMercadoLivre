"use client"
import ThemeToggle from "../ui/themeToggle"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingCart, Settings, LogOut, ChevronDown, UserIcon } from "lucide-react"
import Link from "next/link"
import type { User } from "@/types/user"

interface HeaderProps {
  user: User
  onLogout: () => void
  connectedAccountsCount?: number
  title?: string
}

export default function Header({ user, onLogout, connectedAccountsCount = 0, title = "ML Automação" }: HeaderProps) {
  return (
    <header className="bg-primary dark:bg-zinc-900 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-foreground dark:bg-zinc-800 rounded-lg flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-primary dark:bg-zinc-100" />
          </div>
          <h1 className="text-xl font-bold text-primary-foreground dark:text-zinc-100">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          {connectedAccountsCount > 0 && (
            <Badge variant="secondary" className="hidden sm:flex dark:bg-zinc-800 ">
              {connectedAccountsCount} Contas Conectadas
            </Badge>
          )}
          
       <ThemeToggle/>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                  {user.avatar}
                </div>
                <span className="hidden sm:inline">{user.name}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon className="w-4 h-4 mr-2" />
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/configuracoes">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout} className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Sair da Conta
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
