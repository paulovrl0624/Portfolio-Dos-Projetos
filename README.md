# Meu Portfólio Pessoal Interativo

## Requisitos
Navegador moderno. Sem build.

## Como Rodar Localmente
1. Baixe o ZIP e extraia.
2. Abra a pasta no VS Code.
3. Use Live Server (ou `npx http-server .`) e abra `http://localhost:8080` (ou porta usada).
4. Verifique as páginas: `/index.html`, `/about.html`, `/projects.html`, `/contact.html`, `/blog.html`.

## Personalizar
- Substitua textos: MeuNome, seuusuario, emails.
- Atualize `projects-data.js` com seus projetos.
- Troque imagens em `assets/img/`.
- Ajuste cores em variáveis CSS (`:root`).

## Formulário de Contato (Formspree)
1. Crie conta em formspree.io.
2. Pegue o endpoint e substitua em `contact.html` atributo `action`.
3. Teste envio.

## Deploy GitHub Pages
1. Crie repositório.
2. Push do conteúdo.
3. Settings > Pages > Source: main > root.
4. Atualize `sitemap.xml` e `robots.txt` com URL final.

## Deploy Netlify
Arraste pasta ou conecte repo. Build vazio. Publish dir raiz.

## Deploy Vercel
Import repo. Framework: Other. Root: ./.

## Bônus
- PWA (manifest + SW).
- Google Analytics.
