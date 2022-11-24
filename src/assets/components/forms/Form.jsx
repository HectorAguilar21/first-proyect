import React from 'react'
import './formCSS.css'

export default function visualSearch(props) {
    const formSearch = () => {
        if (props.img === '') {
            return (
                <div className="container">
                    <div className="form">
                        <h1 className='titleTextForm'>Busca tu Pokemon</h1>
                        <div className='formButton'>
                            <form onSubmit={props.handlerSubmit} className='inputForm'>
                                <input type='text' placeholder='Ingrese el nombre de un Pokemon' value={props.name} onChange={props.handlerName}></input>
                                <br />
                                <button type='submit' className='buttonSearch'>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="form">
                        <h1 className='titleTextForm'>Busca tu Pokemon!</h1>
                        <div className='formButton'>
                            <form onSubmit={props.handlerSubmit} className='inputForm'>
                                <input type='text' placeholder='Ingrese el nombre de un Pokemon' value={props.name} onChange={props.handlerName}></input>
                                <br />
                                <button type='submit' className='buttonSearch'>Buscar</button>
                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className='imgSearch'>
                            <img src={props.img} alt="pokebolaPrueba" />
                        </div>
                        <div className='cardInfoSearch'>
                            <h1 id='namePokemonSearch'>{props.name}</h1>
                            <ul className='listInfo'>
                                <li id='infoPokemon'>ID: {props.id}</li>
                                <li id='infoPokemon'>TIPO: {props.type}</li>
                                <li id='infoPokemon'>XP: {props.experience}</li>
                                <li id='infoPokemon'>PESO: {props.weight}kg.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }

    }

    return (
        <>
            {formSearch()}
        </>
    )

}


