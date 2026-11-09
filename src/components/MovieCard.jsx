import React from 'react';

export default function MovieCard({ movie, isFavorite, onToggleFavorite, onOpenDetails }) {
  const isHighRating = movie.rating >= 8.5;

  return (
    <article className="movie-card">
      <div className="card-poster-wrapper">
        <img
          src={movie.poster}
          alt={`Pôster do filme ${movie.title}`}
          className="card-poster"
          loading="lazy"
        />
        <div className="card-overlay"></div>

        <div className="card-top-badges">
          <span className={`rating-badge ${isHighRating ? 'rating-high' : 'rating-medium'}`}>
            ★ {movie.rating.toFixed(1)}
          </span>

          <button
            type="button"
            className={`card-fav-btn ${isFavorite ? 'is-fav' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(movie.id);
            }}
            title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-genre-year">
          <span>{movie.genre}</span>
          <span className="card-dot"></span>
          <span>{movie.year}</span>
        </div>

        <h3 className="card-title">{movie.title}</h3>
        <p className="card-synopsis">{movie.synopsis}</p>

        <div className="card-footer">
          <span className="card-duration">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {movie.duration}
          </span>

          <button
            type="button"
            className="card-details-btn"
            onClick={() => onOpenDetails(movie)}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
