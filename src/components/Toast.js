import { useEffect } from 'react';
import './Toast.css';

const ICONS = { sucesso: '✓', erro: '!', info: 'i' };

// Notificação toast: mostra uma mensagem curta e some sozinha depois de alguns segundos.
// Recebe por props a mensagem, o tipo (sucesso, erro ou info) e a função que fecha.
function Toast({ message, type, onClose }) {
  // Quando o aviso aparece, liga um timer de 3,5 segundos para fechar.
  // O "return" cancela o timer se o aviso sair antes (por exemplo, fechado no ×).
  // Cada aviso novo chega com outra "key" no App, então este efeito roda de novo.
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <span className="toast-icon" aria-hidden="true">
        {ICONS[type]}
      </span>
      <p className="toast-message">{message}</p>
      <button type="button" className="toast-close" aria-label="Fechar aviso" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export default Toast;
