import './ProgressBar.css';

// Barra de progresso: recebe o valor (0 a 100) por props
// e usa esse número como largura do preenchimento.
function ProgressBar({ value, label }) {
  // Garante que o valor fique entre 0 e 100.
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="progress">
      <div className="progress-header">
        <span id="progresso-rotulo">{label}</span>
        <span className="progress-value">{safeValue}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-labelledby="progresso-rotulo"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
      >
        <div
          className={safeValue === 100 ? 'progress-fill is-complete' : 'progress-fill'}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
