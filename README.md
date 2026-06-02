# ASCENDA 360 — Site institucional

Site estático (HTML/CSS/JS), pronto para deploy no Vercel.

## Estrutura
- `index.html` — Home
- `sobre.html` — Arthur Lavieri (autoridade/bio)
- `palestra.html` — Palestra "A Jornada do CEO"
- `livro.html` — O livro (Amazon + Editora)
- `acervo.html` — Hub da newsletter, filtrável por 6 eixos
- `contato.html` — Formulário (envia para arthur.lavieri@ascenda360.com)
- `privacidade.html` — LGPD
- `css/style.css` · `js/main.js` · `data/edicoes.json` · `img/`

## Como adicionar uma nova edição da newsletter
Edite `data/edicoes.json` e acrescente um item ao final:
```json
{ "num": "#48", "titulo": "Título da edição", "resumo": "Resumo de 1 linha.", "eixo": "lideranca", "link": "https://linkedin.com/..." }
```
Eixos válidos: lideranca · julgamento · ia_trabalho · carreira · rh · cultura
O acervo mostra as mais recentes primeiro automaticamente.

## Pendências antes de publicar (preencher)
1. LINKS DAS EDIÇÕES: o campo "link" das edições está vazio — colar a URL de cada edição no LinkedIn.
2. LINK SUBSTACK: substituir href="#" dos botões "Assinar no Substack" pela URL real.
3. LINK NEWSLETTER LINKEDIN: confirmar a URL exata da newsletter no LinkedIn (hoje aponta para /newsletters/).
4. FORMULÁRIO: usa FormSubmit (gratuito). No 1º envio, confirmar o e-mail uma vez.

## Deploy no Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → New Project → importe o repositório.
3. Framework preset: "Other" (site estático). Deploy.
4. Em Settings → Domains, adicione ascenda360.com e www.ascenda360.com.
5. No painel DNS do UOL Host, crie os registros A/CNAME que o Vercel indicar.
