import React, { useEffect } from 'react';

export default function MovieDetailsModal({ movie, isFavorite, onToggleFavorite, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-banner">
          <img src={movie.poster} alt={movie.title} className="modal-banner-img" />
          <div className="modal-banner-overlay"></div>
        </div>

        <div className="modal-body">
          <div className="modal-title-row">
            <h2 className="modal-title">{movie.title}</h2>
            <button
              type="button"
              className={`fav-toggle-btn ${isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(movie.id)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? "#ef4444" : "none"} stroke="#ef4444" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>{isFavorite ? 'Favoritado' : 'Favoritar'}</span>
            </button>
          </div>

          <div className="modal-tags">
            {movie.tags.map((tag) => (
              <span key={tag} className="modal-tag">#{tag}</span>
            ))}
          </div>

          <div className="modal-meta-grid">
            <div className="modal-meta-cell">
              <span className="meta-label">Ano</span>
              <span className="meta-value">{movie.year}</span>
            </div>
            <div className="modal-meta-cell">
              <span className="meta-label">Gênero</span>
              <span className="meta-value">{movie.genre}</span>
            </div>
            <div className="modal-meta-cell">
              <span className="meta-label">Duração</span>
              <span className="meta-value">{movie.duration}</span>
            </div>
            <div className="modal-meta-cell">
              <span className="meta-label">Avaliação</span>
              <span className="meta-value">★ {movie.rating} / 10</span>
            </div>
            <div className="modal-meta-cell" style={{ gridColumn: 'span 2' }}>
              <span className="meta-label">Direção</span>
              <span className="meta-value">{movie.director}</span>
            </div>
          </div>

          <p className="modal-synopsis">{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
}
