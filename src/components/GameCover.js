import './GameCover.css';

// Cada gênero tem uma cor; a capa é desenhada com CSS (sem imagens oficiais).
const GENRE_COLORS = {
  Plataforma: ['#e05a3f', '#f0a33a'],
  Minijogos: ['#d9417e', '#f08c3a'],
  Simulação: ['#3f9e6a', '#9fcf5a'],
  'Quebra-cabeça': ['#6a4fd1', '#3fa9e0'],
  Corrida: ['#d23b3b', '#f3c13a'],
  RPG: ['#2348c9', '#53b6e8'],
  Aventura: ['#2f8f5b', '#c9b13a'],
  Ação: ['#7a2f8f', '#d14f6a'],
  Estratégia: ['#4a5a6a', '#8fa3b8'],
  Tiro: ['#1f6f78', '#e08a3a'],
  Ritmo: ['#e0427a', '#7a5af0'],
};

// Pega as iniciais das duas primeiras palavras do título (ex.: "Mario Kart DS" → "MK").
function getInitials(title) {
  return title
    .replace(/[^A-Za-zÀ-ú0-9 ]/g, '')
    .split(' ')
    .filter((word) => word.length > 0)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

// Capa de cartucho de DS: recebe o título e o gênero por props.
function GameCover({ title, genre, size = 'small' }) {
  const [colorA, colorB] = GENRE_COLORS[genre] || ['#4a4f57', '#8a8f97'];

  return (
    <div className={`cover cover-${size}`} aria-hidden="true">
      <div className="cover-label" style={{ background: `linear-gradient(135deg, ${colorA}, ${colorB})` }}>
        <span className="cover-initials">{getInitials(title)}</span>
      </div>
      <span className="cover-tag">DS</span>
    </div>
  );
}

export default GameCover;
