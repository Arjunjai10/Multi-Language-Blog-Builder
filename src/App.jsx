import { useState } from 'react';
import './App.css';
function App() {
  const [language, setLanguage] = useState('en');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [posts, setPosts] = useState([]);

  const translations = {
    en: {
      title: "Title",
      content: "Content",
      createPost: "Create Post",
      header: "Multi-Language Blog Builder",
      placeholderTitle: "Enter blog title...",
      placeholderContent: "Enter blog content...",
    },
    es: {
      title: "Título",
      content: "Contenido",
      createPost: "Crear publicación",
      header: "Constructor de Blog Multilingüe",
      placeholderTitle: "Ingresa el título del blog...",
      placeholderContent: "Ingresa el contenido del blog...",
    },
    fr: {
      title: "Titre",
      content: "Contenu",
      createPost: "Créer un article",
      header: "Créateur de Blog Multilingue",
      placeholderTitle: "Entrez le titre du blog...",
      placeholderContent: "Entrez le contenu du blog...",
    },
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const handleCreatePost = () => {
    if (newTitle && newContent) {
      setPosts([...posts, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  return (
    <div className="app">
      <header>
        <h1>{translations[language].header}</h1>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </header>

      <main>
        <div className="new-post">
          <input
            type="text"
            placeholder={translations[language].placeholderTitle}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder={translations[language].placeholderContent}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleCreatePost}>
            {translations[language].createPost}
          </button>
        </div>

        <div className="posts">
          {posts.map((post, index) => (
            <div key={index} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;     

