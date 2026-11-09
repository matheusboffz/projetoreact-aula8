import React from 'react';

export default function SearchBar({ searchTerm, onSearchChange, onClearSearch }) {
  return (
    <div className="search-box">
      <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input
        type="text"
        className="search-input"
        placeholder="Buscar filmes por título, diretor, palavra-chave..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {searchTerm && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={onClearSearch}
          title="Limpar busca"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
}

