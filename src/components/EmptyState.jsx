import React from 'react';

export default function EmptyState({ isFavFilter, onReset }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </div>

      <h3 className="empty-title">
        {isFavFilter 
          ? "Nenhum filme favoritado ainda" 
          : "Nenhum resultado encontrado"}
      </h3>

      <p className="empty-text">
        {isFavFilter
          ? "Clique no ícone de coração nos cards do catálogo para salvar seus títulos favoritos nesta sessão."
          : "Tente buscar por outro termo ou selecione uma categoria diferente nos filtros acima."}
      </p>

      <button type="button" className="empty-action-btn" onClick={onReset}>
        Limpar Filtros e Busca
      </button>
    </div>
  );
}

