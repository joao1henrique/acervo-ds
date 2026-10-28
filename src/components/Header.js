import './Header.css';

// Cabeçalho: nome do site e quantos jogos estão nos favoritos (recebido por props).
function Header({ favoriteCount }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#topo" className="header-brand">
          {/* As duas telas do DS, desenhadas só com CSS. */}
          <span className="header-logo" aria-hidden="true">
            <span />
            <span />
          </span>
          Acervo DS
        </a>
        <p className="header-favorites">
          <span className="header-star" aria-hidden="true">
            ★
          </span>
          {favoriteCount} {favoriteCount === 1 ? 'favorito' : 'favoritos'}
        </p>
      </div>
    </header>
  );
}

export default Header;
