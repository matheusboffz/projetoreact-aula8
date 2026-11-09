import React from 'react';

export default function Hero({ totalMovies }) {
  return (
    <section className="hero" id="top">
      <div className="hero-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Aula 08 — Frameworks Front-end</span>
      </div>

      <h1 className="hero-title">
        Explorando o Universo de <br />
        <span className="hero-title-highlight">Filmes com React Moderno</span>
      </h1>

      <p className="hero-subtitle">
        Aplicação desenvolvida para demonstrar na prática os fundamentos do ecossistema React:
        JSX, Componentes, Props, Virtual DOM, Listas com Keys e Renderização Condicional.
      </p>

      <div className="hero-meta">
        <div className="hero-meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
          <span><strong>{totalMovies}</strong> obras cadastradas</span>
        </div>

        <div className="hero-meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>Vite + React 18</span>
        </div>

        <div className="hero-meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>100% Reativo e Didático</span>
        </div>
      </div>
    </section>
  );
}
