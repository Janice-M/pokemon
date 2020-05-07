import React, { useState} from 'react';


const capturedPokemons = () => {
    const [pokemons] = useState([]);

    return (
        <div className= "pokedex">
            <h2>Captured Pokemons</h2>
            {pokemons.map((pokemon) =>
                <div key = {'${pokemon.id}- ${pokemon.name}' } >
               
               </div>)}
        
        </div>
    )
}

export default capturedPokemons;