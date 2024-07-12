import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import 'normalize.css';
import Home from './Home/Home';
import NewPokemon from './NewPokemon/NewPokemon';
import PokemonDetails from './PokemonDetails/PokemonDetails';

const Main = () => {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<NewPokemon />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  )
};

export default Main;
