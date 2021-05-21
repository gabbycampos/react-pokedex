import React from 'react';
import './Pokecard.css';

const IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

function Pokecard(props) {
    let imgSrc = `${IMG}${props.id}.png`;
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-title">{props.name}</h2>
            <img className="Pokecard-img" src={imgSrc} alt="pokemon" />
            <p className="Pokecard-data">
                <b>Type: </b>
                {props.type}
            </p>
            <p className="Pokecard-data">
                <b>EXP: </b>
                {props.base_experience}
            </p>
        </div>
    );
}

export default Pokecard;