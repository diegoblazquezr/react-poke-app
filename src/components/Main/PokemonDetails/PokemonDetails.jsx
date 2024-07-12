import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const PokemonDetails = () => {

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	// console.log(queryParams);

	const [description, setDescription] = useState('');

	const name = queryParams.get('name');
	const id = queryParams.get('id');
	const image = queryParams.get('image');
	const type1 = queryParams.get('type1');
	const type2 = queryParams.get('type2');
	const weight = queryParams.get('weight');
	const height = queryParams.get('height');
	const dataAbilities = JSON.parse(queryParams.get('dataAbilities'));
	const dataStats = JSON.parse(queryParams.get('dataStats'));
	// console.log(dataAbilities, dataStats);

	const normalizeName = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const getDescription = async () => {
		try {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
			const json = res.data;

			setDescription(json.flavor_text_entries[0].flavor_text);
			// console.log(description);
		} catch (error) {

		}
	}

	getDescription();

	return (
		<section className="sectionDetails">
			<div className="pokeHeader">
				<div>{normalizeName(name)}</div>
				<div>{id}</div>
			</div>
			<img src={image}></img>
			<div className="divTypes">
				<span className={`type1 ${type1}`}>{normalizeName(type1)}</span>
				{type2 !== '' ? <span className={`type2 ${type2}`}>{normalizeName(type2)}</span> : ''}
			</div>
			<h4>About</h4>
			<div className="pokeAbout">
				<div className="aboutWeigth">
					<span>{weight / 10} kg</span>
					<p>Weight</p>
				</div>
				<div className="aboutHeight">
					<span>{height / 10} m</span>
					<p>Height</p>
				</div>
				<div className="aboutAbilities">
					{dataAbilities.map(element => (
						<span>{normalizeName(element)}</span>
					))}
					<p>Abilities</p>
				</div>
			</div>
			<p key={uuidv4()} className="description">{description}</p>
			<h4>Base Stats</h4>
			<div className="base-stats">
				{dataStats.map((element, index) => (
					<div key={index}>
						<p>{element.stat.toUpperCase()}</p>
						<span>{element.base_stat}</span>
					</div>
				))}
			</div>
		</section>
	)
};

export default PokemonDetails;
