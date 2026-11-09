import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import MovieCard from './components/MovieCard';
import MovieDetailsModal from './components/MovieDetailsModal';
import EmptyState from './components/EmptyState';
import VirtualDomLab from './components/VirtualDomLab';
import ConceptsSummary from './components/ConceptsSummary';
import Footer from './components/Footer';
import { MOVIES_DATA, GENRES } from './data/moviesData';
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [isFavFilterActive, setIsFavFilterActive] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Inicializa favoritos lendo do localStorage de forma segura
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('cinereact_favorites');
      return saved ? JSON.parse(saved) : [1, 3]; // padrão inicial com 2 favoritos para demonstração imediata
    } catch {
      return [1, 3];
    }
  });

  // Salva favoritos no localStorage quando houver mutação
  useEffect(() => {
    try {
      localStorage.setItem('cinereact_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.error('Falha ao persistir favoritos no localStorage:', err);
    }
  }, [favorites]);

  // Alterna o status de favorito de um filme (adiciona/remove)
  const handleToggleFavorite = (movieId) => {
    setFavorites((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  // Alterna o filtro exclusivo de favoritos
  const handleToggleFavFilter = () => {
    setIsFavFilterActive((prev) => !prev);
  };

  // Reseta todos os filtros e busca
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedGenre('Todos');
    setIsFavFilterActive(false);
  };

  // Filtragem composta reativa: Gênero, Busca textual e Favoritos
  const filteredMovies = MOVIES_DATA.filter((movie) => {
    // 1. Filtro por gênero
    if (selectedGenre !== 'Todos' && movie.genre !== selectedGenre) {
      return false;
    }

    // 2. Filtro exclusivo de favoritos
    if (isFavFilterActive && !favorites.includes(movie.id)) {
      return false;
    }

    // 3. Filtro por termo de busca
    if (searchTerm.trim() !== '') {
      const query = searchTerm.toLowerCase();
      const matchTitle = movie.title.toLowerCase().includes(query);
      const matchDirector = movie.director.toLowerCase().includes(query);
      const matchGenre = movie.genre.toLowerCase().includes(query);
      const matchTags = movie.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchTitle || matchDirector || matchGenre || matchTags;
    }

    return true;
  });

  return (
    <div className="app-container">
      {/* 1. Navbar com Props de contagem e estado */}
      <Navbar
        favCount={favorites.length}
        onToggleFavFilter={handleToggleFavFilter}
        isFavFilterActive={isFavFilterActive}
      />

      <main className="main-content">
        {/* 2. Hero Component */}
        <Hero totalMovies={MOVIES_DATA.length} />

        {/* 3. Painel de Controles: Busca e Filtros */}
        <div className="controls-panel" id="catalogo">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onClearSearch={() => setSearchTerm('')}
          />

          <FilterBar
            genres={GENRES}
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
            isFavFilterActive={isFavFilterActive}
            onToggleFavFilter={handleToggleFavFilter}
            favCount={favorites.length}
          />
        </div>

        {/* 4. Grade de Filmes com Listas, Keys e Renderização Condicional */}
        {filteredMovies.length > 0 ? (
          <section className="movies-grid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={handleToggleFavorite}
                onOpenDetails={setSelectedMovie}
              />
            ))}
          </section>
        ) : (
          <EmptyState
            isFavFilter={isFavFilterActive && favorites.length === 0}
            onReset={handleResetFilters}
          />
        )}

        {/* 5. Seção Educacional sobre o Virtual DOM */}
        <VirtualDomLab />

        {/* 6. Matriz Pedagógica dos Conceitos da Aula 08 */}
        <ConceptsSummary />
      </main>

      {/* 7. Modal de Detalhes renderizado condicionalmente */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          onToggleFavorite={handleToggleFavorite}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {/* 8. Rodapé com créditos */}
      <Footer />
    </div>
  );
}
