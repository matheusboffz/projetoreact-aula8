import React from 'react';

export default function Navbar({ favCount, onToggleFavFilter, isFavFilterActive }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="brand">
          <div className="brand-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <span>Cine<span className="brand-accent">React</span></span>
        </a>

        <nav className="nav-links">
          <a href="#catalogo" className="nav-link">Catálogo</a>
          <a href="#vdom-lab" className="nav-link">Virtual DOM</a>
          <a href="#conceitos" className="nav-link">Conceitos</a>

          <button 
            type="button" 
            className={`fav-badge-btn ${isFavFilterActive ? 'active' : ''}`}
            onClick={onToggleFavFilter}
            title={isFavFilterActive ? "Ver todos os filmes" : "Filtrar apenas favoritos"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={favCount > 0 ? "#ef4444" : "none"} stroke="#ef4444" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Favoritos</span>
            <span className="fav-badge-count">{favCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

