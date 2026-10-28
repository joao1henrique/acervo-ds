import GameCover from './GameCover';
import ProgressBar from './ProgressBar';
import Tabs from './Tabs';
import './GameDetail.css';

// Detalhe do jogo escolhido, desenhado como um DS aberto:
// a tela de cima mostra a capa e o título; a de baixo, as abas com as informações.
function GameDetail({ game, progress, isFavorite, onToggleFavorite, onChangeProgress }) {
  const tabs = [
    {
      label: 'Sobre',
      content: <p className="detail-text">{game.description}</p>,
    },
    {
      label: 'Ficha',
      content: (
        <dl className="detail-facts">
          <div>
            <dt>Ano</dt>
            <dd>{game.year}</dd>
          </div>
          <div>
            <dt>Gênero</dt>
            <dd>{game.genre}</dd>
          </div>
          <div>
            <dt>Desenvolvedora</dt>
            <dd>{game.developer}</dd>
          </div>
          <div>
            <dt>Console</dt>
            <dd>Nintendo DS</dd>
          </div>
        </dl>
      ),
    },
    {
      label: 'Progresso',
      content: (
        <div className="detail-progress">
          <ProgressBar value={progress} label="Quanto você já jogou" />
          <div className="detail-progress-buttons">
            <button type="button" className="button-secondary" onClick={() => onChangeProgress(game, -10)}>
              − 10%
            </button>
            <button type="button" className="button-primary" onClick={() => onChangeProgress(game, 10)}>
              + 10%
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <article className="detail" aria-labelledby="detalhe-titulo">
      <div className="detail-top-screen">
        <GameCover title={game.title} genre={game.genre} size="large" />
        <div className="detail-heading">
          <p className="detail-kicker">
            {game.genre} · {game.year}
          </p>
          <h2 id="detalhe-titulo">{game.title}</h2>
          <button
            type="button"
            className={isFavorite ? 'button-favorite is-favorite' : 'button-favorite'}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(game)}
          >
            {isFavorite ? '★ Nos favoritos' : '☆ Favoritar'}
          </button>
        </div>
      </div>

      {/* A dobradiça entre as duas telas do DS. */}
      <div className="detail-hinge" aria-hidden="true" />

      <div className="detail-bottom-screen">
        {/* A key faz as abas voltarem para "Sobre" sempre que o jogo muda. */}
        <Tabs key={game.id} tabs={tabs} />
      </div>
    </article>
  );
}

export default GameDetail;
