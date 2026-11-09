# CineReact — Catálogo e Laboratório React

> **Atividade Prática da Aula 08 — Frameworks Front-end**  
> Aplicação interativa desenvolvida com **React** e **Vite**, projetada para explorar e demonstrar na prática os fundamentos do ecossistema React.

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.4.11-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🌐 Deploy Online

Acesse a aplicação em produção:  
🔗 **[https://projetoreact-aula8.vercel.app](https://projetoreact-aula8.vercel.app)** *(ou via link gerado na Vercel)*

Repositório no GitHub:  
🔗 **[https://github.com/matheusboffz/projetoreact-aula8](https://github.com/matheusboffz/projetoreact-aula8)**

---

## 📌 Sobre a Aplicação

O **CineReact** é uma plataforma temática de catálogo cinematográfico com visual moderno dark/streaming. Além de permitir a navegação, busca em tempo real, filtragem por gênero e gerenciamento de títulos favoritos, o projeto atua como um **laboratório didático** onde cada parte da interface demonstra um conceito fundamental do React.

---

## ✨ Funcionalidades Principais

- 🎬 **Catálogo Dinâmico:** Apresentação de obras com capas em alta definição, notas no padrão IMDb, duração, gênero e ano de lançamento.
- 🔍 **Busca em Tempo Real:** Pesquisa reativa que filtra simultaneamente por título do filme, diretor, gênero e tags.
- 🏷️ **Filtros por Categoria:** Seleção rápida entre gêneros como Ficção Científica, Ação, Drama e Animação.
- ⭐ **Sistema de Favoritos com Persistência:** Adicione ou remova filmes dos favoritos com 1 clique. Os favoritos são salvos no `localStorage` do navegador para não serem perdidos ao recarregar a página.
- 🔎 **Visualização Exclusiva de Favoritos:** Botão de filtro dedicado para exibir somente as obras favoritadas.
- 🪟 **Modal de Detalhes:** Visualização expandida da sinopse completa, ficha técnica, diretor e tags, com suporte ao fechamento via teclado (`Esc`) ou clique externo.
- 🧪 **Laboratório do Virtual DOM:** Seção interativa com contador em tempo real que demonstra o processo de *Diffing* e reconciliação sem recarregar a página.
- 🚫 **Estados Vazios (Empty State):** Mensagens customizadas com botão para redefinir filtros quando nenhuma busca ou filtro retornar resultados.

---

## 🧠 Conceitos de React Demonstrados na Prática

Conforme os requisitos da **Aula 08 — Projeto React**:

| Conceito | Onde é aplicado | O que demonstra |
|---|---|---|
| **1. JSX** | Em todos os componentes (`.jsx`) | Interpolação de variáveis `{movie.title}`, expressões dinâmicas, fragments `<>` e classes condicionais. |
| **2. Componentes** | `src/components/` | Modularização da interface em unidades autônomas: `Navbar`, `Hero`, `SearchBar`, `FilterBar`, `MovieCard`, `MovieDetailsModal`, `VirtualDomLab`, `ConceptsSummary`, `Footer` e `EmptyState`. |
| **3. Props** | `MovieCard`, `Navbar`, etc. | Passagem de dados estáticos/dinâmicos de componentes pais para filhos e passagem de funções de callback (`onToggleFavorite`, `onOpenDetails`) para comunicação filho → pai. |
| **4. Virtual DOM** | `VirtualDomLab.jsx` | Seção explicativa com demonstração interativa de atualizações atômicas e eficientes via reconciliação. |
| **5. Listas e Keys** | `movies.map(...)` e `genres.map(...)` | Renderização iterativa de coleções de dados com identificadores únicos e estáveis (`key={movie.id}`) para otimização da árvore de nós. |
| **6. Renderização Condicional** | Em toda a aplicação | Operadores ternários (`? :`) para botões/ícones de favoritos, curto-circuito (`&&`) para botões de limpeza e modal, além de estados vazios para buscas sem retorno. |

---

## 🧩 Estrutura de Arquivos

```text
projetoreact-aula8/
├── public/
├── src/
│   ├── components/
│   │   ├── ConceptsSummary.jsx    # Matriz didática dos conceitos do React
│   │   ├── EmptyState.jsx         # Tela quando não há resultados
│   │   ├── FilterBar.jsx          # Botões de categoria e toggle de favoritos
│   │   ├── Footer.jsx             # Rodapé com créditos
│   │   ├── Hero.jsx               # Seção de apresentação
│   │   ├── MovieCard.jsx          # Card individual reutilizável de cada filme
│   │   ├── MovieDetailsModal.jsx  # Modal expandido de informações
│   │   ├── Navbar.jsx             # Barra de navegação com contador de favoritos
│   │   ├── SearchBar.jsx          # Campo de busca controlado
│   │   └── VirtualDomLab.jsx      # Seção prática sobre o Virtual DOM
│   ├── data/
│   │   └── moviesData.js          # Coleção de dados dos filmes e gêneros
│   ├── App.css                    # Estilos modernos e responsivos
│   ├── App.jsx                    # Componente raiz com estados centrais
│   ├── index.css                  # Variáveis de cores e reset global
│   └── main.jsx                   # Ponto de montagem da aplicação React
├── index.html                     # Template HTML com fontes e metatags
├── package.json                   # Dependências e scripts
├── vite.config.js                 # Configuração do Vite com plugin React
├── .gitignore                     # Arquivos ignorados no versionamento
└── README.md                      # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes **npm**

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/matheusboffz/projetoreact-aula8.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd projetoreact-aula8
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra o navegador no endereço indicado:**
   Geralmente em `http://localhost:5173`.

### Outros comandos disponíveis

```bash
npm run build    # Gera os arquivos otimizados para produção na pasta dist/
npm run preview  # Executa uma pré-visualização local dos arquivos compilados
```

---

## 👨‍💻 Autor

- **Desenvolvedor:** Matheus Boff
- **GitHub:** [@matheusboffz](https://github.com/matheusboffz)
- **Disciplina:** Frameworks Front-end
- **Professor:** Prof. Me. Deivison S. Takatu
- **Instituição:** SENAI
