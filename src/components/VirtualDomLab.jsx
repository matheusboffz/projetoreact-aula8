import React, { useState } from 'react';

export default function VirtualDomLab() {
  const [counter, setCounter] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [renderCount, setRenderCount] = useState(1);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    setRenderCount((prev) => prev + 1);
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 300);
  };

  const handleReset = () => {
    setCounter(0);
    setRenderCount((prev) => prev + 1);
  };

  return (
    <section className="vdom-section" id="vdom-lab">
      <div className="section-header">
        <span className="section-tag">Por dentro do React</span>
        <h2 className="section-title">Virtual DOM & Reconciliação</h2>
        <p className="section-desc">
          Entenda como o React atinge alta performance atualizando apenas os nós estritamente necessários na interface através do algoritmo de Diffing.
        </p>
      </div>

      <div className="vdom-grid">
        <div className="vdom-card">
          <h3 className="vdom-card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            Fluxo de Reconciliação
          </h3>

          <ul className="vdom-steps">
            <li className="vdom-step-item">
              <span className="step-num">1</span>
              <div className="step-text">
                <strong>Mudança de Estado:</strong> Quando o estado (`useState`) ou as props mudam, o React gera uma nova árvore do Virtual DOM em memória.
              </div>
            </li>
            <li className="vdom-step-item">
              <span className="step-num">2</span>
              <div className="step-text">
                <strong>Algoritmo de Diffing:</strong> O React compara (diff) a nova árvore do Virtual DOM com a foto (snapshot) da árvore anterior.
              </div>
            </li>
            <li className="vdom-step-item">
              <span className="step-num">3</span>
              <div className="step-text">
                <strong>Batching e Patching:</strong> O React calcula o conjunto mínimo de mutações necessárias e aplica diretamente no DOM do navegador em uma única passagem.
              </div>
            </li>
            <li className="vdom-step-item">
              <span className="step-num">4</span>
              <div className="step-text">
                <strong>Importância das Keys:</strong> Em listas, as chaves (`key`) permitem que o React identifique quais itens foram alterados, adicionados ou removidos sem reconstruir toda a lista.
              </div>
            </li>
          </ul>
        </div>

        <div className="vdom-card">
          <h3 className="vdom-card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20v-6M6 20V10M18 20V4"></path>
            </svg>
            Laboratório Interativo
          </h3>

          <div className="vdom-demo-box">
            <div className="demo-display">
              <div className="demo-stat">
                <span className="meta-label">Valor do Estado</span>
                <div className={`stat-val ${isHighlighted ? 'highlight' : ''}`}>
                  {counter}
                </div>
              </div>

              <div className="demo-stat">
                <span className="meta-label">Passagens de Render</span>
                <div className="stat-val" style={{ color: 'var(--accent-purple)' }}>
                  {renderCount}
                </div>
              </div>
            </div>

            <div className="demo-controls">
              <button type="button" className="demo-btn" onClick={handleIncrement}>
                + Incrementar Estado
              </button>
              <button type="button" className="demo-btn demo-btn-secondary" onClick={handleReset}>
                Resetar
              </button>
            </div>

            <div className="code-snippet">
              // Apenas este nó sofre patch no DOM real:<br />
              &lt;span className="stat-val"&gt;{counter}&lt;/span&gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
