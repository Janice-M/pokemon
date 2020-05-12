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
        setCapturedPokemons([...capturedPokemons, pokemon]);
        setPokemons(removePokemonFromList(pokemon));

    };

    return (
        <div className = "pokemons-list">
            <h2>Pokemons List</h2>
            {pokemons.map((pokemon)=>
                <div > 
                </div>
                )}
        </div>
    )
};








 //return the context from our provider value