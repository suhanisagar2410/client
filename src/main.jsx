import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ASCII Art Easter Egg
console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  👋 Hey there! Welcome to Suhani Sagar's Portfolio       ║
║                                                           ║
║  🚀 Built with React, Node.js, MongoDB & Tailwind CSS   ║
║  ⚡ Powered by Framer Motion & GSAP                      ║
║  🎨 Designed for Performance & User Experience          ║
║                                                           ║
║  📧 suhaniisagar33@gmail.com                             ║
║  🔗 https://github.com/suhanisagar2410                   ║
║  💼 https://www.linkedin.com/in/suhani-sagar-390549220  ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}