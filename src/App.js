import { useState } from 'react';
import games from './data/games';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import GameCard from './components/GameCard';
import Pagination from './components/Pagination';
import GameDetail from './components/GameDetail';
import Accordion from './components/Accordion';
import Toast from './components/Toast';
import './App.css';

const GAMES_PER_PAGE = 8;

// Opções do menu de gênero: "Todos" + cada gênero que aparece na lista, sem repetir.
const genreNames = [...new Set(games.map((game) => game.genre))].sort();
const GENRE_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  ...genreNames.map((genre) => ({ value: genre, label: genre })),
];

const SORT_OPTIONS = [
  { value: 'antigos', label: 'Mais antigos' },
  { value: 'recentes', label: 'Mais recentes' },
  { value: 'nome', label: 'Nome (A–Z)' },
];

const FAQ_ITEMS = [
  {
    title: 'O que é o Acervo DS?',
    content:
      'Um banco de jogos do Nintendo DS, o portátil de duas telas lançado em 2004. Aqui você filtra por gênero, abre a ficha de cada jogo e marca os seus favoritos.',
  },
  {
    title: 'De onde vêm as informações dos jogos?',
    content:
      'Nome, ano de lançamento, gênero e desenvolvedora de cada jogo. As capas são desenhadas pelo próprio site, a partir do gênero, para não usar imagens oficiais.',
  },
  {
    title: 'Como funciona o progresso?',
    content:
      'Na aba "Progresso" você anota quanto já jogou, de 10 em 10%. Ao chegar em 100%, o jogo conta como zerado.',
  },
  {
    title: 'Os favoritos ficam salvos?',
    content:
      'Ficam enquanto a página estiver aberta. Ao recarregar, a lista começa vazia de novo, porque o site não usa banco de dados.',
  },
];

// Componente principal: guarda o estado da página e passa dados e funções
// para os outros componentes por props.
function App() {
  const [genre, setGenre] = useState('todos');
  const [sortBy, setSortBy] = useState('antigos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(games[0].id);
  const [favorites, setFavorites] = useState([]);
  const [progressById, setProgressById] = useState({});
  const [toast, setToast] = useState(null);

  // 1) Filtra pelo gênero escolhido.
  const filteredGames = genre === 'todos' ? games : games.filter((game) => game.genre === genre);

  // 2) Ordena (copiando a lista antes, para não mexer na original).
  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortBy === 'recentes') return b.year - a.year;
    if (sortBy === 'nome') return a.title.localeCompare(b.title);
    return a.year - b.year;
  });

  // 3) Pega só os jogos da página atual.
  const totalPages = Math.max(1, Math.ceil(sortedGames.length / GAMES_PER_PAGE));
  const firstIndex = (currentPage - 1) * GAMES_PER_PAGE;
  const pageGames = sortedGames.slice(firstIndex, firstIndex + GAMES_PER_PAGE);

  const selectedGame = games.find((game) => game.id === selectedId);

  function showToast(message, type) {
    // O id novo faz o Toast reiniciar o timer a cada aviso.
    setToast({ id: Date.now(), message, type });
  }

  function handleGenreChange(newGenre) {
    setGenre(newGenre);
    setCurrentPage(1); // a lista mudou: volta para a primeira página
  }

  function handleSortChange(newSort) {
    setSortBy(newSort);
    setCurrentPage(1);
  }

  function handleSelectGame(id) {
    setSelectedId(id);
    // No celular e no tablet o detalhe fica acima da lista: rola até ele.
    if (window.innerWidth < 1024) {
      document.getElementById('detalhe').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleToggleFavorite(game) {
    if (favorites.includes(game.id)) {
      setFavorites(favorites.filter((id) => id !== game.id));
      showToast(`${game.title} saiu dos favoritos.`, 'info');
    } else {
      setFavorites([...favorites, game.id]);
      showToast(`${game.title} entrou nos favoritos.`, 'sucesso');
    }
  }

  function handleChangeProgress(game, amount) {
    const current = progressById[game.id] || 0;
    const next = current + amount;

    if (next > 100) {
      showToast('Esse jogo já está 100% concluído.', 'erro');
      return;
    }
    if (next < 0) {
      showToast('O progresso já está em 0%.', 'erro');
      return;
    }

    setProgressById({ ...progressById, [game.id]: next });
    if (next === 100) {
      showToast(`Você zerou ${game.title}!`, 'sucesso');
    }
  }

  return (
    <>
      <Header favoriteCount={favorites.length} />

      <main id="topo" className="page">
        <section className="intro" aria-labelledby="titulo-principal">
          <p className="intro-kicker">Nintendo DS · 2004–2010</p>
          <h1 id="titulo-principal">Os jogos que cabiam no bolso, com duas telas.</h1>
          <p className="intro-text">
            {games.length} jogos do Nintendo DS para filtrar por gênero, conhecer e acompanhar o
            quanto você já jogou.
          </p>
        </section>

        <div className="layout">
          <section className="catalog" aria-labelledby="titulo-lista">
            <div className="catalog-toolbar">
              <h2 id="titulo-lista">
                Jogos <span className="catalog-count">{sortedGames.length}</span>
              </h2>
              <div className="catalog-filters">
                <Dropdown
                  label="Gênero:"
                  options={GENRE_OPTIONS}
                  selected={genre}
                  onSelect={handleGenreChange}
                />
                <Dropdown
                  label="Ordenar:"
                  options={SORT_OPTIONS}
                  selected={sortBy}
                  onSelect={handleSortChange}
                />
              </div>
            </div>

            <ul className="catalog-grid">
              {pageGames.map((game) => (
                <li key={game.id}>
                  <GameCard
                    game={game}
                    isSelected={game.id === selectedId}
                    isFavorite={favorites.includes(game.id)}
                    onSelect={handleSelectGame}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </li>
              ))}
            </ul>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>

          <aside id="detalhe" className="detail-area" aria-label="Jogo escolhido">
            <GameDetail
              game={selectedGame}
              progress={progressById[selectedGame.id] || 0}
              isFavorite={favorites.includes(selectedGame.id)}
              onToggleFavorite={handleToggleFavorite}
              onChangeProgress={handleChangeProgress}
            />
          </aside>
        </div>

        <section className="faq" aria-labelledby="titulo-faq">
          <h2 id="titulo-faq">Perguntas frequentes</h2>
          <Accordion items={FAQ_ITEMS} />
        </section>
      </main>

      <footer className="footer">
        <p>
          Trabalho acadêmico de React. Nintendo DS é marca da Nintendo; este site não tem ligação
          com a empresa.
        </p>
      </footer>

      {toast && (
        <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </>
  );
}

export default App;
