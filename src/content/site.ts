// Todo o conteúdo da página fica aqui. Textos entre colchetes são
// pendências a confirmar com a Dani antes de publicar.

export const links = {
  whatsapp: "https://wa.me/message/B4YB2CUNF36XF1",
  formSocial: "https://form.jotform.com/233263297472057",
  formIdentidade: "https://form.jotform.com/233263203740648",
  behance: "https://www.behance.net/ddb33e0f",
  instagram: "https://www.instagram.com/studiomeirelles.mkt/",
} as const;

export const nav = [
  { href: "#metodo", label: "Como funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#portfolio", label: "Portfólio" },
] as const;

export const heroFacts = [
  "+ de 4 anos de estrada",
  "Clientes no Brasil e nos EUA",
  "Rio de Janeiro",
] as const;

// Segmentos já atendidos (citados pela Dani ou presentes no portfólio).
export const segments = [
  "Saúde",
  "Estética e beleza",
  "Advocacia",
  "Imóveis",
  "Móveis planejados",
  "Serviços automotivos",
  "Confeitaria",
  "Marcas pessoais",
] as const;

export const pains = [
  {
    title: "Tem concorrente entregando menos e vendendo mais",
    text: "Não porque é melhor. Porque aparece todo dia para quem está pronto para comprar.",
  },
  {
    title: "Marketing não é tarefa para quem sobrar",
    text: "Você não entregaria o financeiro da empresa a quem não é contador. Com as redes sociais é a mesma coisa.",
  },
  {
    title: "Você já se frustrou com marketing",
    text: "Contratou, pagou, esperou e saiu com um perfil que não parecia você. O erro não foi investir. Foi faltar processo, escuta e honestidade.",
  },
] as const;

export const results = [
  {
    value: "225 mil",
    label: "visualizações em um carrossel",
    detail: "143.982 contas alcançadas e 895 novos seguidores em um único post.",
  },
  {
    value: "215 mil",
    label: "visualizações, mesmo formato",
    detail:
      "3,4 mil compartilhamentos e 2,2 mil salvamentos. O que funciona, a gente repete com método.",
  },
  {
    value: "63 mil",
    label: "visualizações, 100% orgânico",
    detail: "Sem um real em anúncio. O tráfego impulsiona, mas o orgânico também entrega.",
  },
] as const;

export const resultQuote = {
  text: "Gente, tá cheio de pedido de consulta. Não tô conseguindo responder.",
  author:
    "Mensagem de uma cliente da área da saúde, depois de um post viralizar. [NOME — confirmar autorização]",
} as const;

export const notHere = [
  "A profissional que some depois do contrato assinado.",
  "Mil promessas de resultado milagroso antes de fechar.",
  "Post genérico, que poderia ser de qualquer empresa.",
  "Contrato num dia, post no ar no dia seguinte.",
  "Alguém que concorda com tudo só para agradar.",
] as const;

export const here = [
  "Você me vê, me encontra e sabe exatamente o que está sendo feito e por quê.",
  "Honestidade desde o início sobre o que eu faço, o que entrego e o que não vou fazer.",
  "Estudo do seu negócio, do seu público e dos seus concorrentes.",
  "Estratégia antes de qualquer publicação.",
  "Alguém que discorda quando precisa, porque se importa com o seu resultado.",
] as const;

export const steps = [
  {
    title: "Alinhamos as expectativas",
    text: "Conversa franca sobre objetivos, prazos e o que é realista. Marketing de conteúdo é construção.",
  },
  {
    title: "Entendemos sua área, público e concorrentes",
    text: "Quem você é, como atende, quem quer atrair e o que te diferencia da concorrência.",
  },
  {
    title: "Só depois a gente cria conteúdo",
    text: "Cada post com um propósito: conectar, educar, gerar confiança ou humanizar. Tudo organizado no Trello para você acompanhar.",
  },
] as const;

export const services = [
  {
    title: "Gestão de redes sociais",
    text: "Planejamento, roteiros, design e publicação. Reels para atrair, carrosséis para educar, stories para conectar e vender.",
    todo: "[ENTREGAS DO PLANO — definir com a Dani]",
  },
  {
    title: "Identidade visual",
    text: "Marca nova ou redesign, com briefing e reuniões de alinhamento. Você recebe um drive organizado com mais de 150 arquivos.",
    todo: "[ENTREGAS DO PROJETO — definir com a Dani]",
  },
  {
    title: "Tráfego pago",
    text: "Campanhas em Meta e Google Ads para acelerar o que o conteúdo constrói e levar o cliente certo até você.",
    todo: "[ENTREGAS DO SERVIÇO — definir com a Dani]",
  },
] as const;

// Para usar uma imagem real: salve em /public/portfolio e preencha `image`.
export const portfolio: ReadonlyArray<{
  name: string;
  kind: string;
  placeholder: string;
  image?: string;
}> = [
  {
    name: "Dr. Paulo Nava, Cardiologia",
    kind: "Identidade visual: sofisticada, confiável e acolhedora",
    placeholder: "[IMAGEM — papelaria azul-marinho com o coração em traço]",
  },
  {
    name: "Nina, nail designer",
    kind: "Identidade visual: “a mesma história, um novo capítulo”",
    placeholder: "[IMAGEM — logo “nina” em verde-oliva com a borboleta]",
  },
  {
    name: "Newin Móveis Planejados",
    kind: "Identidade visual",
    placeholder: "[IMAGEM — papelaria Newin, verde-petróleo]",
  },
  {
    name: "Cross Elevadores",
    kind: "Identidade visual",
    placeholder: "[IMAGEM — fachada Cross Elevadores]",
  },
  {
    name: "Design para social media",
    kind: "Posts e carrosséis para clientes de vários segmentos",
    placeholder: "[IMAGEM — capa “Postfólio” com posts de clientes]",
  },
  {
    name: "Gauchinho Auto Center",
    kind: "Redesign de marca",
    placeholder: "[IMAGEM — fachada Gauchinho Auto Center]",
  },
];

export const testimonials = [
  {
    text: "Primeira vez que tô trabalhando com alguém que está evoluindo de verdade, entendendo meu trabalho. Nossa troca, sua ajuda e paciência fazem toda a diferença.",
    author: "Cliente de social media. [NOME — confirmar autorização]",
  },
  {
    text: "Trabalho incrível, feito com todo carinho e excelência. Obrigada pela dedicação e profissionalismo. Ficou perfeito.",
    author:
      "Nina Magalhães, nail designer. Projeto de identidade visual. [confirmar autorização]",
  },
  {
    text: "Dani, você é um anjo, merece todo o sucesso do mundo. Gratidão por tudo que você fez.",
    author: "[NOME E SEGMENTO — confirmar com a Dani]",
  },
] as const;

export const credentials = [
  "Reconhecimento SMCEO 100K no Conexão Social Media 2026 [confirmar descrição com a Dani]",
  "Presença no Conexão Social Media 2025 e 2026 e no Plug Social Day RJ",
  "Atualização constante: “o digital muda o tempo todo”",
] as const;

export const faq = [
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Marketing de conteúdo é uma construção: os resultados vêm no longo prazo, não do dia para a noite. Com tráfego pago desde o início, os efeitos podem aparecer mais rápido.",
  },
  {
    q: "Eu vou precisar participar?",
    a: "Sim, e é isso que faz funcionar. Você não precisa saber tudo sobre criação de conteúdo, mas precisa estar presente no processo. Nenhuma social media conhece o seu cliente como você conhece.",
  },
  {
    q: "Quando os posts começam a sair?",
    a: "Não no dia seguinte ao contrato. Antes de postar existem etapas que não dá para pular: alinhamento, estudo do seu negócio e estratégia. Conteúdo entregue na primeira semana quase sempre é genérico.",
  },
  {
    q: "Você atende qualquer segmento?",
    a: "Empresas e marcas pessoais de vários segmentos: saúde, estética, advocacia, imóveis, comércio e serviços. Me chama e a gente vê se faz sentido para o seu caso.",
  },
  {
    q: "Quanto custa?",
    a: "[INVESTIMENTO — definir com a Dani se a página mostra valores, faixas ou só “sob consulta”]",
  },
] as const;
