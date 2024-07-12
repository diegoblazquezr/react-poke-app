import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const PokemonCard = ({
  dataGeneral: {
    name,
    id,
    weight,
    height
  },
  dataSprites: {
    front_default
  },
  dataType1,
  dataType2,
  dataAbilities,
  dataStats
}) => {

  const formatId = (pokeId) => {
    pokeId = pokeId.toString();
    while (pokeId.length < 3) pokeId = '0' + pokeId;
    return '#' + pokeId;
  };

  const normalizeName = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const pokemonQuery = {
    name: name,
    id: formatId(id),
    image: front_default,
    type1: dataType1,
    type2: dataType2 ? dataType2 : "",
    weight: weight,
    height: height,
    dataAbilities: dataAbilities ? JSON.stringify(dataAbilities.map(a => a.ability.name)) : '',
    dataStats: dataStats ? JSON.stringify(dataStats.map(s => ({ stat: s.stat.name, base_stat: s.base_stat }))) : ''
  };
  // console.log(dataAbilities);
  const queryString = new URLSearchParams(pokemonQuery).toString();
  const pokemonUrl = `/pokemon/${id}?${queryString}`;
  


  return (
    <article className="articlePokemonCard">
      <span>{formatId(id)}</span>
      <img src={front_default}></img>
      <Link to={pokemonUrl}>
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </Link>
      <div className="divTypes">
        <span className={`type1 ${dataType1}`}>{normalizeName(dataType1)}</span>
        {dataType2 !== '' ? <span className={`type2 ${dataType2}`}>{normalizeName(dataType2)}</span> : ''}
      </div>
    </article>
  )
};

export default PokemonCard;
