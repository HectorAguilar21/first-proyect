import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './cardCSS.css'

export default function Card(props) {

    //1 - Estado para obtener los datos especificos del un pokemon
    const [onePokemon, setOnePokemon] = useState({
        name: "",
        id: '',
        sprites: { other: { dream_world: { front_default: '' } } },
        base_experience: '',
        weight: "",
    });
    //- 1

    //2 - Estado para obtener unicamente la informacion de los tipos de pokemons
    const [typePokemon, setTypePokemon] = useState([]);
    //- 2

    //3 - Generamos la peticion con axios para ambos estados
    const getPokemon = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response);
                setOnePokemon(response.data);
                setTypePokemon(response.data.types);
            });
    };
    //- 3

    //4 - Montamos la peticion
    useEffect(() => {
        getPokemon(props.url);
    }, []);
    //- 4

    return (
        <div>
            <div className='Cards'>
                <div className="cardContainer">
                    <h1 className="pokemonName">{onePokemon.name}</h1>
                    <div className="Card">
                        <div className="img">
                            <img className='img0' src={onePokemon.sprites.other.dream_world.front_default} alt='imagePokemon' />
                        </div>
                        <div className='cardInfo'>
                            <ul className='listInfo'>
                                <li id='infoPokemon'>ID: {onePokemon.id}</li>
                                {typePokemon.map(typePokemon => (
                                    <li id='infoPokemon'>TIPO: {typePokemon.type.name}</li>
                                ))}
                                <li id='infoPokemon'>XP: {onePokemon.base_experience}</li>
                                <li id='infoPokemon'>PESO: {onePokemon.weight}kg.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


{/* <input value={filterPokemon} onChange={typeSearch} type='text' placeholder='Escribe el tipo de pokemon'>
            </input>
            <button type='submit' className='buttonSearch'>Buscar</button> */}