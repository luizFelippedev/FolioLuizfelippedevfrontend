# Futuristic Portfolio – Frontend

SPA construída com React 18, TypeScript, Vite, Tailwind 3, Framer Motion, React Query e Zustand. O objetivo é entregar uma experiência imersiva (hero animado, partículas, cards em vidro, integração 3D-ready) totalmente alinhada ao backend futurista.

## ⚙️ Stack
- React + React Router DOM
- Tailwind 3 + utilitários customizados (glassmorphism, gradientes, dark mode)
- Framer Motion + Particle canvas para microinterações
- Zustand para UI state (menu mobile, toggles)
- React Query + Axios para comunicação com o backend (`/api`)
- i18next (alicerce para multi-idiomas)

## 📦 Scripts
```bash
npm install          # instalar dependências
npm run dev          # ambiente local em http://localhost:5173
npm run build        # bundle de produção
npm run preview      # servir build localmente
```

## 🌐 Variáveis (.env)
Copie `.env.example` para `.env` e ajuste quando for consumir sua API hospedada:
```
VITE_API_URL=http://localhost:4000/api
VITE_WS_URL=ws://localhost:4000/socket.io/?EIO=4&transport=websocket
```

## 🧱 Estrutura
```
src/
 ├─ components/
 │   ├─ layout (Header, Footer, Layout)
 │   ├─ sections (Hero, ProjectsSpotlight, CertificatesGrid, BlogPreview, ContactCTA)
 │   └─ ui (ParticleField, componentes genéricos)
 ├─ pages/ (Home, Projects, Certificates, Blog, Contact)
 ├─ hooks/ (useTheme, etc.)
 ├─ store/ (zustand stores)
 ├─ lib/ (axios client, React Query client)
 ├─ config/ (env helpers)
 └─ i18n/
```

## ✨ Features
- Hero animado com gradientes neon e CTA.
- Seções dinâmicas consumindo o backend (projetos, certificados, blog, contato).
- Partículas e efeitos “holográficos” responsive.
- Formulário de contato integrado ao endpoint `/api/contact`.
- Páginas dedicadas com filtros/pesquisas (projetos, blog, certificados).

## 📱 Aviso de manutenção para mobile
- O aviso é renderizado apenas para telas menores em `src/components/ui/MobileMaintenanceBanner.tsx`.
- Ele é incluído globalmente no layout (`src/components/layout/AppLayout.tsx`) logo abaixo do Header.
- O botão de fechar grava a chave `mobile-maintenance-dismissed` no `localStorage`, evitando mostrar o banner novamente no mesmo dispositivo.

Para deploy, basta apontar `VITE_API_URL` para o backend hospedado (ex.: Render/Railway) e subir este diretório em Vercel/Netlify.

## 🚀 Deploy na Vercel (com backend na Render)
1) **Backend pronto**: certifique-se de que seu backend está público em HTTPS (ex.: `https://<app>.onrender.com`) e com WebSockets liberados.  
2) **Importar repositório** na Vercel:
   - Projeto → “Import Git Repository”
   - Root directory: `Portfolio/frontend`
   - Build command: `npm run build`
   - Output: `dist`
   - Runtime: Node 18 ou 20
3) **Variáveis na Vercel**:
   - `VITE_API_URL=https://<app>.onrender.com/api`
   - `VITE_WS_URL=wss://<app>.onrender.com` (ou deixe vazio para derivar do API se seu código suportar)
4) **Deploy**: finalize e teste rotas críticas (`/`, `/projects`, `/certificates`, `/blog`, `/contact`, `/admin`).  
5) **Domínio**: adicione seu domínio e, se quiser, crie subdomínio `api.seudominio.com` apontando para o backend no Render (CNAME); ajuste `VITE_API_URL` depois.

## 🛠️ Config extra (monorepo)
- Arquivo `vercel.json` incluso para a Vercel entender o build Vite e saída `dist`.  
- Se usar outro host (Netlify/Cloudflare Pages), mantenha o build `npm run build` e publicação `dist`.
