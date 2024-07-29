import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ArticleContextProvider } from './components/context/ArticleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticleContextProvider>
      <App />
    </ArticleContextProvider>
  </React.StrictMode>,
)
