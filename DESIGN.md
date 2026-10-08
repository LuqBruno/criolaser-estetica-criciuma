---
name: Criolaser
description: Identidade editorial de verão para a demonstração local Summer 2026.
colors:
  blue: "#214261"
  deep: "#15334e"
  yellow: "#f4d24c"
  paper: "#f4f7f8"
  surface: "#fff"
  ink: "#19364e"
  muted: "#526777"
  line: "#cbd5dc"
  paper-dark: "#101f2b"
  surface-dark: "#192e3f"
  ink-dark: "#f1f6fa"
  muted-dark: "#b8c8d4"
  line-dark: "#385062"
  button-hover: "#ffe77d"
  choice-selected: "#d9e9f4"
  choice-border: "#8197a8"
  focus: "#da9c08"
typography:
  display:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(48px,5.6vw,84px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(36px,4.5vw,66px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-.04em"
  title:
    fontFamily: "Figtree, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    letterSpacing: "-.02em"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "16px"
    lineHeight: 1.55
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "14px"
  button:
    fontFamily: "Figtree, sans-serif"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  radius: "26px"
  radius-mobile: "22px"
  button: "50px"
  choice: "15px"
  contact: "36px"
  dialog: "24px"
  post-mobile: "16px"
spacing:
  space: "clamp(24px,5vw,80px)"
  space-mobile: "24px"
  section-block: "100px"
  section-tablet: "75px"
  section-mobile: "62px"
  post-gap: "28px"
  choice-gap: "12px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.deep}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  interest-choice:
    textColor: "{colors.surface}"
    rounded: "{rounded.choice}"
    padding: "15px"
  interest-choice-selected:
    backgroundColor: "{colors.choice-selected}"
    textColor: "{colors.deep}"
  navigation:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    height: "88px"
  mobile-dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    width: "calc(100% - 32px)"
  contact:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.contact}"
---

# Design System: Criolaser

## Overview

**Creative North Star: "Verão azul, cuidado próximo"**

A identidade combina o azul da marca oficial, o amarelo cítrico da temporada e superfícies claras frias. Tipografia contemporânea, imagens generosas e curvas assimétricas dão presença editorial sem transformar cuidado estético em promessa de resultado. A direção vigente foi delegada pelo usuário em 08/10/2026 e está registrada em PRODUCT.md e docs/direction.md.

O lettering do logotipo é oficial, recortado mecanicamente do original e nunca refeito com uma fonte aproximada. A composição de água, luz e limões é uma imagem editorial ilustrativa identificada; não representa a clínica real. Registros de atendimento, entrada e publicações vêm dos materiais oficiais preservados. Este sistema descreve a demo local revisada, sem constituir autorização de publicação ou uso comercial.

**Key Characteristics:**

- Azul institucional contínuo e amarelo em pontos de ação.
- Figtree autohospedada, títulos amplos e leitura acolhedora.
- Imagens editoriais e registros reais com proveniência explícita.
- Curvas sóbrias, superfícies planas e movimento breve.
- Tema claro inicial; escuro escolhido explicitamente e salvo no navegador.

## Colors

### Primary

- **Azul institucional — blue:** cabeçalho, hero, rodapé e fundos de imagens.
- **Azul profundo — deep:** painel de contato e texto sobre ações amarelas.

### Secondary

- **Amarelo cítrico — yellow:** ação principal, trechos de títulos e seleção de texto.
- **Amarelo luminoso — button-hover:** resposta do botão ao ponteiro.

### Neutral

- **Branco frio — paper:** fundo da página; **surface:** seções alternadas e modal.
- **Tinta azul — ink:** texto; **muted:** conteúdo secundário; **line:** divisores.
- Os equivalentes com sufixo **dark** substituem apenas essas cinco funções no tema escuro. Azul institucional, azul profundo e amarelo continuam os mesmos.
- **choice-selected** e **choice-border:** seleção e contorno do assunto de contato.
- **focus:** contorno de foco visível compartilhado.

**The Tema explícito Rule.** O escuro é uma preferência acionada pelo controle visível; o estado inicial é claro quando não há escolha salva.

## Typography

Display e corpo usam Figtree, com fallback sans-serif. A fonte variável local cobre pesos de 300 a 900; a interface usa sobretudo peso 500 nos títulos e 600 nas ações. A serifa pertence exclusivamente à arte original da marca.

Os papéis normativos estão no frontmatter. O display se adapta a clamp(48px,6vw,74px) até 1050px e clamp(44px,11.4vw,68px), entrelinha 1.04, até 760px. Títulos de seção usam 40px no celular, com variações locais existentes para introdução e contato. Parágrafos têm limite global de 65ch, reduzido conforme composição. A inscrição editorial sobre a imagem usa Figtree, peso 500, entrelinha .85 e tamanho final clamp(62px,7.2vw,96px); o ano usa .6em e peso 400.

**The Marca preservada Rule.** Não aplicar uma serifa aos títulos para imitar o lettering: usar o arquivo oficial da marca.

## Layout

Margens fluidas seguem space, com seções de largura total alternando paper e surface. Hero em duas colunas de 48% / 52%; introdução, cuidados, clínica e contato usam pares assimétricos, com intervalos de 6vw a 10vw. Publicações formam três colunas com post-gap. Cabeçalho fixo acompanha a navegação por âncoras e reserva deslocamento de rolagem.

Até 1050px, o ritmo vertical diminui e o contato abreviado sai do cabeçalho. Até 760px, os pares se tornam uma coluna, a navegação vira modal e as publicações viram linhas com miniatura de 122px. Cabeçalho mobile tem 76px; hero mantém texto antes da imagem, com margens laterais de 16px na imagem. Contato tem margem externa de 24px no desktop e 12px no celular. Não transformar cada bloco de texto em cartão.

## Elevation & Depth

Não há sombras de elevação. A profundidade vem de alternância tonal, sobreposição de texto na imagem, moldura azul e curvas. O rodapé da imagem usa fundo azul profundo translúcido. O modal usa backdrop #102d47ba com blur(5px), mantendo a separação do contexto sem alterar a superfície.

Movimento usa a curva --ease. Botões sobem 2px no hover e retornam no active; setas se deslocam 2px; imagens de publicações ampliam 1.035 em .6s. Entradas existem somente no desktop com preferência de movimento permitida. prefers-reduced-motion desativa animações, transições e rolagem suave.

## Shapes

Imagens compartilham radius, reduzido no celular. A imagem principal tem canto superior esquerdo de 160px, combinado com três cantos de 26px; mobile usa 85px e 22px. Botões têm formato de cápsula, assuntos de contato têm cantos mais discretos, e publicações mobile usam post-mobile. Divisores de um pixel organizam serviços e informações; contornos não envolvem toda seção.

## Components

### Buttons

Ação amarela com seta diagonal, alinhamento entre extremidades e altura mínima de 56px. No celular, altura mínima 54px e padding 16px 22px. Hover altera a cor e desloca verticalmente; foco visível usa contorno de 3px e offset de 5px. Links editoriais usam linha inferior e seta com resposta curta.

### Navigation

Cabeçalho azul com marca original à esquerda, links de 14px e controle claro/escuro. No celular, botão abre dialog nativo com links de 28px separados por divisores, ação amarela e controle de fechar. Menu bloqueia o fundo; fechamento devolve foco ao acionador.

### Cards / Containers

Publicações são links editoriais com imagem recortada, seta circular e texto fora da imagem, sem sombra. Serviços usam linhas expansíveis, título, categoria e símbolo mais/menos; aria-expanded acompanha o conteúdo. Não existe formulário de entrada nem campo de dados pessoais nesta interface.

### Seletor de interesse

Quatro botões em grade de duas colunas sobre azul profundo. Seleção clara usa aria-pressed e atualiza o assunto do link de WhatsApp, sem enviar mensagem automaticamente. Altura mínima 76px no desktop e 75px no celular; hover usa branco translúcido. É seleção única, não formulário de saúde.

## Do's and Don'ts

### Do:

- **Do** manter Figtree na interface e lettering oficial na marca.
- **Do** identificar a imagem editorial como ilustrativa e preservar a origem dos registros reais.
- **Do** manter foco visível, semântica de seleção e alternativa com movimento reduzido.
- **Do** usar superfícies tonais e curvas existentes para criar profundidade.

### Don't:

- **Don't** apresentar imagem ilustrativa como fotografia da clínica.
- **Don't** inventar depoimentos, resultados, credenciais ou condições comerciais.
- **Don't** ativar tema escuro sem escolha ou preferência salva.
- **Don't** acrescentar sombras ou cartões genéricos ao sistema plano observado.
