import React from 'react';
import './App.css';

import pokemonList from './pokemonList';
import pokedex from './capturedPokemon';

const App = () =>(
    <div className = "App">
        <pokemonList  />
        <pokedex    />
    </div>
);