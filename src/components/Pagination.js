import './Pagination.css';

// Paginação: recebe a página atual, o total de páginas e a função que troca de página.
// Ela não guarda estado: quem decide a página é o App.
function Pagination({ currentPage, totalPages, onPageChange }) {
  // Lista [1, 2, 3, ...] para desenhar um botão por página.
  const pages = [];
  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav className="pagination" aria-label="Páginas da lista de jogos">
      <button
        type="button"
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
      >
        ← Anterior
      </button>

      <ul className="pagination-pages">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={page === currentPage ? 'pagination-page is-current' : 'pagination-page'}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Página ${page}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
      >
        Próxima →
      </button>
    </nav>
  );
}

export default Pagination;
