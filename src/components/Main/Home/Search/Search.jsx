import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

const Search = ({ setPokemons }) => {

  const [inputValue, setInputValue] = useState('');
  const [searchedPokemons, setSearchedPokemon] = useState([]);
  const form = useRef();
  const timeoutRef = useRef(null);


  useEffect(() => {
    async function fetchData() {
      if (!inputValue) {
        // alert('That pokemon is already on the list.');
        return;
      } 

      console.log(inputValue);

      const foundPokemon = searchedPokemons.find(poke => poke.name === inputValue || poke.id === Number(inputValue));
      console.log(foundPokemon);
      if (foundPokemon) {
        return;
      }

      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const json = res.data;

        // console.log(json);
        setSearchedPokemon([json, ...searchedPokemons]);
        setPokemons([json, ...searchedPokemons]);
      } catch (e) {
        console.error(e);
        setPokemons([]);
      }
    }

    fetchData();
  }, [inputValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pokeName = e.target.pokeName.value.trim().toLowerCase();
    console.log(pokeName);

    setInputValue(pokeName);
    form.current.reset();
  }

  const handleChange = (e) => {
    const value = e.target.value;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setInputValue(value);
      form.current.reset();
    }, 2000);
  };

  return (
    <section className="section-search-form">
      <form ref={form} onSubmit={handleSubmit} className="search-form">
        <input type="text" name="pokeName" id="pokeName" placeholder="Search pokemon by Name or Id..." onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Search;
