import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavPokemonList from './components/FavPokemonList.jsx'
import './styles/index.css'
import App from './components/App.jsx'
import PageLayout from './components/_PageLayout.jsx'
import ButtonCounter from './components/ButtonCounter.jsx'
import RandomPokemonCard from './components/RandomPokemonCard.jsx'
// add more components
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageLayout>
      <RandomPokemonCard />
      <RandomPokemonCard />
      <RandomPokemonCard />
      <RandomPokemonCard />
      <RandomPokemonCard />
      <RandomPokemonCard />
      <RandomPokemonCard />
      <RandomPokemonCard />
      {/* <ButtonCounter /> */}
      {/* <FavPokemonList /> */}
    </PageLayout>
    
    {/* <App /> */}
  </StrictMode>,
)
