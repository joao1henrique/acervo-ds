import GameCover from './GameCover';
import './GameCard.css';

// Card de um jogo na lista. Recebe o jogo e as funções de selecionar e favoritar por props.
function GameCard({ game, isSelected, isFavorite, onSelect, onToggleFavorite }) {
  return (
    <article className={isSelected ? 'game-card is-selected' : 'game-card'}>
      <button type="button" className="game-card-open" onClick={() => onSelect(game.id)}>
        <GameCover title={game.title} genre={game.genre} />
        <span className="game-card-title">{game.title}</span>
        <span className="game-card-meta">
          {game.genre} · {game.year}
        </span>
      </button>
      <button
        type="button"
        className={isFavorite ? 'game-card-star is-favorite' : 'game-card-star'}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? `Remover ${game.title} dos favoritos` : `Favoritar ${game.title}`}
        onClick={() => onToggleFavorite(game)}
      >
        ★
      </button>
    </article>
  );
}

export default GameCard;
