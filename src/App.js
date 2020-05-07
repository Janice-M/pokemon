import React from 'react';
import './App.css';

import PokemonList from './pokemonsList';
import CapturedPokemons from './capturedPokemon';

const App = () =>(
    <div className = "App">
        <PokemonList  />
        <CapturedPokemons   />
    </div>
);

export default App;