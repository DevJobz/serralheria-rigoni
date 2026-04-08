# Serralheria Rigoni — Site Premium

Stack: HTML · CSS · JS Vanilla · Decap CMS · Netlify · GitHub

## Estrutura de Pastas

```
/
├── index.html                  ← Página principal
├── sitemap.xml                 ← SEO: mapa do site
├── robots.txt                  ← SEO: diretivas para crawlers
├── netlify.toml                ← Configurações Netlify (cache, headers)
├── _redirects                  ← Redirecionamentos Netlify
├── assets/
│   ├── css/style.css           ← Todo o CSS do site
│   ├── js/main.js              ← Todo o JS (renderização + interatividade)
│   └── images/uploads/         ← Imagens enviadas pelo CMS
├── admin/
│   ├── index.html              ← Painel Decap CMS
│   ├── config.yml              ← Configuração do CMS
│   └── preview.css             ← CSS do preview no painel
└── dados/                      ← JSONs gerados/editados pelo CMS
    ├── navbar.json
    ├── hero.json
    ├── historia.json
    ├── diferenciais.json
    ├── servicos.json
    ├── portfolio.json
    ├── depoimentos.json
    ├── empresa.json
    └── configuracoes.json
```

## Nomeação de Imagens

Substitua os placeholders pelas imagens reais com os nomes:

| Arquivo                        | Descrição                              |
|-------------------------------|----------------------------------------|
| `hero-fachada.jpg`            | Foto da fachada da serralheria         |
| `historia-irmaos.jpg`         | Foto dos dois irmãos ou da serralheria |
| `servico-portoes.jpg`         | Portões automáticos                    |
| `servico-portas.jpg`          | Portas de ferro                        |
| `servico-escadas.jpg`         | Escadas metálicas                      |
| `servico-corrimao.jpg`        | Corrimão                               |
| `servico-parapeito.jpg`       | Parapeito / guarda-corpo               |
| `servico-estruturas.jpg`      | Estruturas metálicas                   |
| `servico-telhados.jpg`        | Telhados metálicos                     |
| `servico-ferragem.jpg`        | Ferragem em geral                      |
| `portfolio-01.jpg` … `08.jpg` | Fotos dos trabalhos entregues          |
| `portfolio-video-thumb.jpg`   | Thumbnail para vídeos no portfólio     |
| `depoimento-carlos.jpg`       | Foto do cliente Carlos                 |
| `depoimento-ana.jpg`          | Foto da cliente Ana                    |
| `depoimento-roberto.jpg`      | Foto do cliente Roberto                |
| `depoimento-patricia.jpg`     | Foto da cliente Patrícia               |
| `logo-rigoni.png`             | Logo da empresa (PNG transparente)     |
| `favicon.png`                 | Favicon 32×32px                        |
| `apple-touch-icon.png`        | Ícone iOS 180×180px                    |
| `og-image.jpg`                | Imagem compartilhamento social (1200×630px) |

## Deploy — Passo a Passo

### 1. GitHub
- Crie o repositório: `serralheria-rigoni`
- Suba todos os arquivos: `git add . && git commit -m "init" && git push`

### 2. Netlify
- New Site → Import from GitHub → selecione o repositório
- Build command: (deixe em branco)
- Publish directory: `.`
- Deploy site

### 3. Netlify Identity
- Site settings → Identity → Enable Identity
- Registration: Invite only
- External providers: (opcional)
- Git Gateway: Enable

### 4. Convidar o cliente
- Identity → Invite users → cole o e-mail do cliente
- O cliente receberá um e-mail para criar a senha
- Após criar a senha, será redirecionado para `/admin/`

### 5. Domínio (Registro.br)
- No Registro.br: altere os nameservers para os da Netlify (ns1-ns4.netlify.com)
- No Netlify: Domain settings → Add custom domain → `serralheriarigoni.com.br`
- SSL: ativado automaticamente pela Netlify via Let's Encrypt

## Acesso ao Painel Admin
URL: `https://seudominio.com.br/admin/`
