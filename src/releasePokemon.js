import React, { useContext } from 'react';
import {PokemonContext} from './pokemoncontext';

const CapturedPokemons = () => {
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    } = useContext(PokemonContext);

    const releasePokemon = (releasedPokemon) =>
        capturedPokemons.filter((pokemon)=> pokemon !== releasedPokemon);

    const release = (pokemon) = () => {
        setCapturedPokemons(releasePokemon(pokemon));
        setPokemons([...pokemons,pokemon])

    };

    return (
        <div className = "captured-pokemons">
            <h2>Captured Pokemons</h2>

        </div>
    );
}