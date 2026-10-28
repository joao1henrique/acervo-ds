import { useState } from 'react';
import './Accordion.css';

// Acordeão: recebe a lista de itens (pergunta e resposta) por props
// e guarda no state qual item está aberto. Só um fica aberto por vez.
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    // Clicar no item aberto fecha; clicar em outro abre só ele.
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `acordeao-botao-${index}`;
        const panelId = `acordeao-painel-${index}`;

        return (
          <div key={item.title} className={isOpen ? 'accordion-item is-open' : 'accordion-item'}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="accordion-button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(index)}
              >
                {item.title}
                <span className="accordion-icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="accordion-panel"
            >
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
