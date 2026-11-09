import React from 'react';

const CONCEPTS = [
  {
    id: 'jsx',
    title: '1. JSX (JavaScript XML)',
    badge: 'Sintaxe Declarativa',
    description: 'Extensão de sintaxe que permite escrever estruturas semelhantes a HTML diretamente no código JavaScript, utilizando interpolações com chaves `{}` e fragmentos `<>` para agrupar elementos.'
  },
  {
    id: 'componentes',
    title: '2. Componentização',
    badge: 'Modularidade',
    description: 'Divisão da interface em unidades autônomas e reutilizáveis (Navbar, Hero, SearchBar, FilterBar, MovieCard, Modal, VirtualDomLab), facilitando a manutenção e a legibilidade do código.'
  },
  {
    id: 'props',
    title: '3. Props (Propriedades)',
    badge: 'Fluxo Unidirecional',
    description: 'Comunicação direta de dados e comportamentos: dados fluem do componente pai para os filhos, enquanto funções de callback (como `onToggleFavorite` e `onOpenDetails`) notificam o pai sobre eventos.'
  },
  {
    id: 'vdom',
    title: '4. Virtual DOM',
    badge: 'Performance & Diffing',
    description: 'Representação em memória do DOM real. O React realiza o processo de reconciliação para comparar a árvore anterior com a atual e aplicar apenas as alterações pontuais no navegador.'
  },
  {
    id: 'listas-keys',
    title: '5. Listas e Keys',
    badge: 'Renderização Eficiente',
    description: 'Iteração sobre coleções através do método `.map()`, com atribuição obrigatória de `key` exclusiva e estável (`movie.id`) para que o React rastreie inserções, remoções e reordenações de itens.'
  },
  {
    id: 'condicional',
    title: '6. Renderização Condicional',
    badge: 'Flexibilidade de Interface',
    description: 'Adaptação visual com base no estado: operador ternário para estilos e ícones de favoritos, curto-circuito `&&` para badges e botões de limpeza, e tela de Estado Vazio quando não há resultados.'
  }
];

export default function ConceptsSummary() {
  return (
    <section className="concepts-section" id="conceitos">
      <div className="section-header">
        <span className="section-tag" style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)', color: 'var(--accent-blue)' }}>
          Matriz Pedagógica
        </span>
        <h2 className="section-title">Conceitos de React Aplicados</h2>
        <p className="section-desc">
          Mapeamento dos 6 pilares essenciais da Aula 08 de Frameworks Front-end implementados nesta aplicação.
        </p>
      </div>

      <div className="concepts-grid">
        {CONCEPTS.map((concept) => (
          <div key={concept.id} className="concept-card">
            <span className="concept-badge">{concept.badge}</span>
            <h3 className="concept-title">{concept.title}</h3>
            <p className="concept-desc">{concept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
