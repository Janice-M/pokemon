import React, { createContext, useState } from 'react';

export const PokemonContext = createContext ();

export const PokemonProvider = (props) => {
    const [pokemons, setPokemons ] = useState ([
        {id: 1, name : 'Bulbasaur'},
        {id:2, name : 'Charmander'},
        {id:3 , name : 'squirtle'}

    ]);
    const [capturedPokemons , setCapturedPokemons] = useState([]);

    const providerValue = {
        pokemons, 
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    };

}