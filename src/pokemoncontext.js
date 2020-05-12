import {useContext} from 'react';
import {PokemonContext} from './pokemoncontext';



export const PokemonList = () =>{
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons

    } = useContext(PokemonContext);

    const removePokemonFromList = (removedPokemon) =>
        pokemons.filter (pokemon => pokemon !== removedPokemon)

    
    const capture = (pokemon) => {

    }
};








 //return the context from our provider value