# Acervo DS

Um banco de jogos do Nintendo DS feito em **React**, para a Atividade ReactJs de Engenharia de Software (UCSal).

A página lista 30 jogos do DS, permite filtrar por gênero, ordenar, abrir a ficha de cada jogo, marcar favoritos e anotar o quanto você já jogou. Ela funciona no celular, no tablet e no computador.

## Como rodar no GitHub Codespaces

1. No GitHub, abra este repositório e clique em **Code → Codespaces → Create codespace on main**.
2. No terminal do Codespaces, rode:
   ```
   npm install
   npm run dev
   ```
3. O Codespaces mostra um aviso com o botão **Open in Browser**: clique para ver a página (porta 5173).

## Os 6 componentes pedidos

Todos ficam em `src/components/`, cada um com o seu arquivo `.js` (o componente) e `.css` (o visual).

| Componente | Onde aparece | Props que recebe | State | Hook e eventos |
|---|---|---|---|---|
| **Acordeão** (`Accordion.js`) | Perguntas frequentes | `items` (pergunta e resposta) | qual item está aberto (`openIndex`) | `useState`; clique no botão abre um e fecha os outros |
| **Paginação** (`Pagination.js`) | Embaixo da lista de jogos | `currentPage`, `totalPages`, `onPageChange` | nenhum (quem guarda a página é o `App`) | clique nos botões; "Anterior" e "Próxima" ficam desabilitados nas pontas |
| **Barra de progresso** (`ProgressBar.js`) | Aba "Progresso" do jogo | `value` (0 a 100), `label` | nenhum | a largura da barra é o próprio `value` |
| **Abas** (`Tabs.js`) | Ficha do jogo: Sobre, Ficha, Progresso | `tabs` (título e conteúdo) | qual aba está ativa (`activeIndex`) | `useState`; clique e setas do teclado trocam de aba |
| **Menu suspenso** (`Dropdown.js`) | Filtro de gênero e ordenação | `label`, `options`, `selected`, `onSelect` | se está aberto (`isOpen`) | `useState`, `useRef` e `useEffect`: fecha ao escolher, ao clicar fora ou com Esc |
| **Toast** (`Toast.js`) | Ao favoritar e ao mudar o progresso | `message`, `type` (sucesso, erro, info), `onClose` | o `App` guarda o aviso atual | `useEffect` com timer: some sozinho em 3,5 s, ou no × |

Componentes de apoio: `Header`, `GameCard` (card da lista), `GameCover` (capa desenhada com CSS) e `GameDetail` (o "DS aberto", que usa as Abas e a Barra de progresso).

## Como o `App.js` orquestra tudo

O `App.js` é o componente principal. Ele guarda o state da página:

- `genre` e `sortBy`: o que está escolhido nos dois menus suspensos;
- `currentPage`: a página da lista;
- `selectedId`: o jogo aberto na ficha;
- `favorites`: os ids dos jogos favoritos;
- `progressById`: o progresso de cada jogo;
- `toast`: o aviso que está na tela.

A cada mudança, o `App` filtra, ordena e corta a lista de jogos, e passa para cada componente só o que ele precisa, por props. Os componentes avisam o `App` chamando as funções recebidas (`onSelect`, `onPageChange`, `onToggleFavorite`...). É o fluxo de dados do React: **dados descem por props, eventos sobem por funções**.

## Responsividade

- **Computador** (1024 px ou mais): lista à esquerda e a ficha do jogo fixa à direita.
- **Tablet e celular**: uma coluna, com a ficha em cima. Ao tocar num jogo, a página rola até ela.
- **Celular** (até 480 px): cards em duas colunas, e os menus dividem a largura da tela.

Tudo isso está nos `@media` do `App.css` e dos componentes.

## Acessibilidade

- Tags semânticas: `header`, `main`, `section`, `aside`, `article`, `nav`, `footer`, `dl`.
- **ARIA** em cada componente:
  - Acordeão: `aria-expanded` e `aria-controls`.
  - Abas: `role="tab"`, `aria-selected` e `role="tabpanel"`.
  - Menu suspenso: `aria-haspopup`, `aria-expanded` e `role="menu"`.
  - Barra de progresso: `role="progressbar"` com `aria-valuenow`.
  - Paginação: `aria-current="page"`.
  - Toast: `role="status"` e `aria-live="polite"`.
- Foco sempre visível e todos os controles usáveis pelo teclado.
- Quem ativa "reduzir movimento" no sistema não vê animações.

## Estrutura

```
src/
  main.js          ponto de entrada: coloca o App na página
  App.js           componente principal (state e regras da página)
  App.css          layout da página e responsividade
  index.css        cores, fontes e estilos gerais
  data/games.js    os 30 jogos do Nintendo DS
  components/      os componentes, cada um com .js e .css
```

## Tecnologias

React 18 (JavaScript com JSX), CSS puro e Vite para rodar o projeto. Nenhuma biblioteca de componentes: os 6 componentes foram escritos à mão.

---

Trabalho acadêmico. Nintendo DS é marca da Nintendo; este projeto não tem ligação com a empresa. As capas são desenhadas pelo próprio site, sem imagens oficiais.
