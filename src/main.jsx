import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavPokemonList from './components/FavPokemonList.jsx'
import './styles/index.css'
import App from './components/App.jsx'
import PageLayout from './components/_PageLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageLayout>
      <FavPokemonList />
    </PageLayout>
    
    {/* <App /> */}
  </StrictMode>,
)
