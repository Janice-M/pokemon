import React, { useContext } from 'react';
import {PokemonContext} from './pokemoncontext';

const CapturedPokemons = () => {
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    } = useContext(PokemonContext);
}