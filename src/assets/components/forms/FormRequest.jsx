import React, { Component } from 'react'
import Form from './Form';

export default class FormRequest extends Component {
    constructor(props) {                  //!PREGUNTAR   
        super(props);
        this.state = {
            name: '',
            img: '',
            id: '',
            type: '',
            experience: '',
            weight: ''
        }
    }

    fetchApi = async () => {
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await resp.json();

        console.log(data.name);
        this.setState({
            img: data.sprites.other.dream_world.front_default,
            id: data.id,
            type: data.types[0].type.name,
            weight: data.weight,
            experience: data.base_experience
        })
    }

    handlerName = event => {
        this.setState({
            name: event.target.value   //!PREGUNTAR
        })
    }

    handlerSubmit = event => {
        let aux = this.state.name;
        console.log(aux);
        event.preventDefault();
        this.fetchApi();
    }

    render() {
        return (
            <div>
                <Form
                    name={this.state.name}
                    img={this.state.img}
                    id={this.state.id}
                    type={this.state.type}
                    experience={this.state.experience}
                    weight={this.state.weight}
                    handlerName={this.handlerName}
                    handlerSubmit={this.handlerSubmit}
                />
            </div>
        )
    }
}