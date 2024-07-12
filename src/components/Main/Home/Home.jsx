import React, {useState, useContext} from "react";
import PokemonList from "./PokemonList/PokemonList";
import Search from "./Search/Search";
import { PokemonContext } from "../../../context/PokemonContext";

const Home = () => {

  const { pokemons, setPokemons } = useContext(PokemonContext);

  return (
    <>
      <Search setPokemons={setPokemons} />
      <PokemonList pokemons={pokemons} setPokemons={setPokemons} />
    </>
  )
};

export default Home;
