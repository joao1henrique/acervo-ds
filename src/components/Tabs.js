import { useState } from 'react';
import './Tabs.css';

// Abas: recebe a lista de abas (título e conteúdo) por props
// e guarda no state qual aba está ativa. Só o conteúdo da aba ativa aparece.
function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Setas do teclado andam entre as abas, como pede o padrão de acessibilidade.
  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') {
      setActiveIndex((activeIndex + 1) % tabs.length);
    }
    if (event.key === 'ArrowLeft') {
      setActiveIndex((activeIndex - 1 + tabs.length) % tabs.length);
    }
  }

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist" aria-label="Informações do jogo">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            id={`aba-${index}`}
            type="button"
            role="tab"
            className="tabs-button"
            aria-selected={index === activeIndex}
            aria-controls={`painel-${index}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`painel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`aba-${activeIndex}`}
        className="tabs-panel"
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
