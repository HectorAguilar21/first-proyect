import React from 'react'
import Card from './Pokemons'
import './cardCSS.css'

export default function DisplayPokemons({ pokemon }) {
    return (
        <div className='containerCards'>
            {
                pokemon.map((value, index) =>
                    <div>
                        <Card key={index} {...value} />
                    </div>
                )
            }
        </div>
    )
}
