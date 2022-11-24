import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import DisplayPokemons from './PokemonDisplay';

export default function ListPokemons() {

    //1 - Estado para obtener datos base 
    const [pokemon, setPokemon] = useState([
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ])
    //- 1

    //2 - Estados para la cantidad de pokemons que se va mostrando
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(40)
    //- 2

    //3 - Generamos la peticion con axios para obtener los datos base
    const getPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then((response) => {
                //console.log(response);
                setPokemon(response.data.results);
            });
    }
    //- 3

    useEffect(() => {
        getPokemons();
    }, [offset, limit]);

    return (
        <div className='pokemonsContainer'>
            <DisplayPokemons pokemon={pokemon} />
            <button onClick={() => { setOffset(offset + 40); setLimit(limit + 40) }} className='buttonSearch'>cargar mas</button>
        </div>
    )
}