# ProjetoMercadoLivre

## Estrutura do Projeto

```bash
/ (root)
├── backend/           # API Node.js/Express
│   ├── src/
│   │   ├── routes/    # Rotas da API
│   │   ├── controllers/
│   │   ├── services/  # Integrações (Mercado Livre, OpenAI, WhatsApp)
│   │   ├── models/    # ORM e Banco de Dados
│   │   └── middlewares/
│   └── package.json
│
├── frontend/          # Painel Web Next.js
│   ├── app/ ou pages/ # Páginas do Next.js
│   ├── components/    # Componentes de UI
│   ├── services/      # Consumo da API
│   └── package.json
│
├── docs/              # Documentação
└── README.md

```

# ✅ Checklist de Fases de Desenvolvimento

## 1. Planejamento

- [ ]  Definir arquitetura (front, back, banco)
- [ ]  Escolher ORM (Sequelize ou Prisma)
- [ ]  Definir provedor WhatsApp (Twilio, Z-API, etc.)
- [ ]  Configuração inicial do repositório (GitHub/GitLab)

---

## 2. Configuração do Ambiente

- [ ]  Criar projeto **backend (Node.js/Express)**
- [ ]  Criar projeto **frontend (Next.js)**
- [ ]  Configurar banco de dados (PostgreSQL/MySQL)
- [ ]  Setup de autenticação JWT
- [ ]  Configuração de variáveis de ambiente (.env)

---

## 3. Integrações Externas

- [ ]  Implementar **OAuth2 Mercado Livre**
- [ ]  Configurar consumo da **API Mercado Livre**
- [ ]  Configurar **OpenAI API**
- [ ]  Implementar integração com **WhatsApp API**

---

## 4. Funcionalidades Back-end

- [ ]  CRUD de usuários e contas Mercado Livre
- [ ]  Webhook de captura de perguntas/pedidos
- [ ]  Serviço de geração de resposta (OpenAI)
- [ ]  Envio de resposta para WhatsApp
- [ ]  Publicação da resposta aprovada no Mercado Livre
- [ ]  Geração e agendamento de relatórios

---

## 5. Funcionalidades Front-end

- [ ]  Tela de login/registro
- [ ]  Painel de gerenciamento de contas
- [ ]  Tela de perguntas e respostas
- [ ]  Histórico de interações
- [ ]  Configuração de relatórios
- [ ]  Layout responsivo (desktop e mobile)

---

## 6. Testes & QA

- [ ]  Testes unitários (backend e frontend)
- [ ]  Testes de integração APIs externas
- [ ]  Testes end-to-end do fluxo completo
- [ ]  Documentação da API (Swagger ou Postman)

---

## 7. Deploy

- [ ]  Deploy do backend (VPS/Hostinger/Render/Heroku)
- [ ]  Deploy do frontend (Vercel/Netlify)
- [ ]  Configurar banco de dados em cloud (Supabase/RDS)
- [ ]  Configurar CI/CD (GitHub Actions)

---

## 8. Pós-Entrega

- [ ]  Monitoramento e logs
- [ ]  Ajustes e suporte
- [ ]  Otimização de performance
- [ ]  Expansão de funcionalidades

##
