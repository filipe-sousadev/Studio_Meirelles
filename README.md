# Studio_Meirelles

Landing page do Studio Meirelles (social media e design para empresas e marcas pessoais), em Next.js (App Router), React, TypeScript e Tailwind CSS v4.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Onde mexer

| O que | Onde |
| --- | --- |
| Textos, links, depoimentos, portfólio, FAQ | `src/content/site.ts` |
| Cores e fontes | `src/app/globals.css` (bloco `@theme`) |
| Seções da página | `src/components/*.tsx` |
| Ordem das seções | `src/app/page.tsx` |
| Título e descrição para busca e redes | `src/app/layout.tsx` |

As fontes (Sora e Anton) vêm dos pacotes `@fontsource`, então o site não depende do Google Fonts.

## Imagens

- Portfólio: salve o arquivo em `public/portfolio/` e preencha o campo `image` do item em `src/content/site.ts` (ex.: `image: "/portfolio/paulo-nava.jpg"`). Sem `image`, aparece a caixa tracejada.
- Foto da abertura: `public/dani-meirelles.jpg`, usada em `Hero.tsx`. Veio de um post do Instagram do studio, com os textos removidos por edição; se a Dani tiver a foto original, vale trocar por ela.
- Foto da seção "Quem está por trás": ainda é um `ImagePlaceholder` em `About.tsx`.

## Pendências antes de publicar

Tudo que está entre colchetes na página precisa ser resolvido com a Dani:

- **Imagens**: 1 foto da Dani (seção "Quem está por trás") e 6 imagens de portfólio.
- **Depoimentos**: confirmar nomes e autorização de uso.
- **Serviços**: entregas de cada serviço.
- **Investimento**: mostrar valores, faixas ou "sob consulta".
- **Reconhecimento SMCEO 100K**: confirmar a descrição.
