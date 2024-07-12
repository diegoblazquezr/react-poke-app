import { React, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { PokemonContext } from './context/PokemonContext';

function App() {

  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <PokemonContext.Provider value={{pokemons, setPokemons}}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </PokemonContext.Provider>
      <Footer />
    </>
  )
}

export default App
