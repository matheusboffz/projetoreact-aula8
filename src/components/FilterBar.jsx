import React from 'react';

export default function FilterBar({ 
  genres, 
  selectedGenre, 
  onSelectGenre, 
  isFavFilterActive, 
  onToggleFavFilter,
  favCount 
}) {
  return (
    <div className="filters-wrapper">
      <div className="genre-buttons">
        {genres.map((genre) => {
          const isActive = selectedGenre === genre;
          return (
            <button
              key={genre}
              type="button"
              className={`genre-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectGenre(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className={`fav-toggle-btn ${isFavFilterActive ? 'active' : ''}`}
        onClick={onToggleFavFilter}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill={isFavFilterActive ? "#ef4444" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>{isFavFilterActive ? 'Exibindo Favoritos' : 'Filtrar Favoritos'}</span>
        {favCount > 0 && <span>({favCount})</span>}
      </button>
    </div>
  );
}
