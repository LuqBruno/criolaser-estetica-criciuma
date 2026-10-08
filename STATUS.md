# Estado técnico — 08/10/2026

## Decisões vigentes

Demo comercial local crio-01. Usuário autorizou usar o perfil e manter condições pendentes. Não publicada e nenhuma mensagem enviada à clínica. Não presume contratação. Direção azul/amarelo/cítricos a partir da marca e Summer 2026 oficial. Skills Apple, UI UX Pro Max, Emil, Impeccable e Design Taste orientaram hierarquia, movimento curto, controles acessíveis e identidade própria.

Implementados: hero editorial, serviços expansíveis, apresentação da clínica com recorte real, três conteúdos oficiais, seletor de assunto para WhatsApp, menu modal nativo e modo claro/escuro persistente. Conteúdo separado da apresentação; imagens locais WebP; logo recortada mecanicamente do original, não redesenhada. Hero ilustrativo gerado e rotulado; nenhuma pessoa ou clínica inventada.

## Verificações novas desta rodada

### Publicação de prévia — 08/10/2026

- Ajuste de contexto: removido “Summer 2026” da interface; hero, seletor e metadados usam “temporada de verão”, sem ano. Referência ao lançamento histórico permanece apenas na documentação das fontes.
- Criado repositório próprio `LuqBruno/criolaser-estetica-criciuma`, branch `main`, e fluxo GitHub Pages em `.github/workflows/deploy-pages.yml`. Build usa o subcaminho correto; originais privados e capturas locais ficam fora do repositório.
- TypeScript e build de produção para `/criolaser-estetica-criciuma/` passaram antes da publicação: Vite 6.4.4, JS 258.45 kB / 78.84 kB gzip, CSS 12.34 kB / 3.56 kB gzip.
- Prévia: https://luqbruno.github.io/criolaser-estetica-criciuma/ . O estado final do workflow e a resposta HTTP devem ser conferidos após o push.

- TypeScript e build de produção aprovados. Vite6.4.4; lockfile local. npm audit após atualizar sharp: zero vulnerabilidades.
- Navegador real: 360,390,430,768,1024,1440px sem rolagem horizontal. Desktop e mobile examinados, recortes sem distorção, imagens carregadas. Capturas em .impeccable/review. Segunda passagem refez captura desktop desde topo para eliminar artefato do header sticky em captura longa.
- Menu abre com foco na ação de fechar; Esc fecha, retorna foco ao botão, bloqueia fundo. Acordeão responde Enter e mantém aria-expanded/aria-controls coerentes. Seleção de campanha altera o link WhatsApp, sem transmissão automática.
- Tema escuro acionado e conferido em430px; CTA inicial visível em360px. Todos os links WhatsApp gerados apontam ao número fornecido e confirmado no Linktree. Links dos posts correspondem às fontes observadas. Nenhuma mensagem enviada.
- Console observado sem erros ou avisos. Um h1 e semântica de navegação/seções. CSS desativa animações/transições com movimento reduzido (inspeção do código; emulação de preferência não realizada). Noscript oferece contato/perfil; conteúdo completo requer carregamento do React.
- Detector Impeccable executado uma vez: sem achados. Proveniência dos nove rasters verificada: zero arquivos sem origem/prompt.
- Lighthouse na versão de PRODUÇÃO em3021: mobile performance90, acessibilidade100, LCP3.5s, CLS.016, TBT20ms, recursos475KiB. Uma medição de laboratório, não garantia de campo; INP não medido. Medição anterior em servidor de desenvolvimento descartada como não representativa (dependências não minificadas). Build JS258.45kB /78.86kB gzip e CSS12.23kB /3.52kB gzip. Relatórios JSON preservados.

## Pendências reais

Revisão independente final: disposição `ship` no escopo da demonstração local, após recaptura limpa desktop e pequeno ajuste de tracking/tamanho da assinatura Summer. Desktop de produção Lighthouse: performance100, acessibilidade100, LCP0.8s, CLS.003, TBT0ms. Nenhuma aprovação para publicação inferida.

Condições comerciais, valores, duração da campanha, horários, endereço atual, registros/habilitação dos profissionais, aprovação de textos e autorização de uso comercial das imagens. Endereço consta em postagem oficial antiga editada recentemente; confirmar atualidade antes de publicar. Nome Summer2026 confirmado, não inventada oferta. O vídeo não pôde ser baixado; capas reais foram utilizadas. Material atual não permite alegar eficácia individual ou número de sessões.

LCP mobile de laboratório acima de2.5s: avaliar pré-renderização e descoberta antecipada do hero caso se transforme em publicação. Não constitui falha funcional da demo. Teste em dispositivos físicos e conexão real ainda pendente.

## Próxima ação

Apresentar a prévia à clínica e obter validações listadas acima antes de tratar o conteúdo e as condições da temporada como aprovados. Revisão independente de acabamento registrada após avaliação das capturas; documentação de design em DESIGN.md e .impeccable/design.json.
