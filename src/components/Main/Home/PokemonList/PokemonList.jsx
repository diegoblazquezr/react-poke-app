import React, { useEffect, useState } from 'react';
import PokemonCard from "./PokemonCard/PokemonCard";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const PokemonList = ({ pokemons, setPokemons }) => {
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);
        const json = res.data;
        console.log(json.results.length);

        const arrPoke = json.results;

        const arrPokeDetails = await Promise.all(arrPoke.map(async element => {
          const res = await axios.get(element.url);
          return res.data;
        }));

        console.log(arrPokeDetails);
        setPokemons(arrPokeDetails);
      } catch (e) {
        console.error(e);
        setPokemons([]);
      }
    }

    fetchData();
  }, []);

  const renderPokemons = () =>
    pokemons.map((pokemon, i) => (
      <PokemonCard
        key={uuidv4()}
        dataGeneral={pokemon}
        dataSprites={pokemon.sprites.other["official-artwork"]}
        dataType1={pokemon.types[0].type.name}
        dataType2={pokemon.types[1] ? pokemon.types[1].type.name : ''}
        dataAbilities={pokemon.abilities}
        dataStats={pokemon.stats}
      />
    ));

  return <section id="sectionPokemonList">
    {renderPokemons()}
  </section>;
};

export default PokemonList;
