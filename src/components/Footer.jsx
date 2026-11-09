import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand" style={{ fontSize: '1.15rem' }}>
              Cine<span className="brand-accent">React</span>
            </span>
            <p className="footer-desc">
              Aplicação prática da Aula 08 — Disciplina de Frameworks Front-end.
            </p>
          </div>

          <div className="footer-links">
            <a href="#catalogo" className="footer-link">Catálogo</a>
            <a href="#vdom-lab" className="footer-link">Virtual DOM</a>
            <a href="#conceitos" className="footer-link">Conceitos</a>
            <a 
              href="https://github.com/matheusboffz/projetoreact-aula8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} CineReact. Desenvolvido para fins educacionais.</span>
          <div className="footer-author-badge">
            Desenvolvido por <strong>Matheus Boff</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

