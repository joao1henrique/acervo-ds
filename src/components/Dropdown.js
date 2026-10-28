import { useEffect, useRef, useState } from 'react';
import './Dropdown.css';

// Menu suspenso: um botão que abre a lista de opções.
// Recebe por props o rótulo, as opções, a opção escolhida e a função chamada ao escolher.
// Guarda no state só se a lista está aberta ou fechada.
function Dropdown({ label, options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Fecha o menu ao clicar fora dele ou ao apertar Esc.
  // O useEffect liga esses "ouvintes" no documento e os remove quando não precisa mais.
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (!containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  function handleChoose(option) {
    onSelect(option.value);
    setIsOpen(false);
  }

  const selectedOption = options.find((option) => option.value === selected);

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        type="button"
        className="dropdown-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown-label">{label}</span>
        <span className="dropdown-value">{selectedOption.label}</span>
        <span className="dropdown-arrow" aria-hidden="true">
          ▾
        </span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu" role="menu" aria-label={label}>
          {options.map((option) => (
            <li key={option.value} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={option.value === selected}
                className="dropdown-option"
                onClick={() => handleChoose(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
