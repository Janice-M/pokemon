import React, {useState }from 'react';

const pokemonsList = () => {
  const[pokemons]= useState([
    {id: 1, name : 'Bulbasaur'},
    {id:2, name : 'Charmander'},
    {id:3 , name : 'squirtle'}

  ]);


  return (
    <div className = 'pokemons-list'>
      <h2>Pokemons List</h2>

      {pokemons.map ((pokemon)=>
        <div key={ '${pokemon.id}- ${pokemon.name}'} >
        
        
        
        
        
        </div> )}
    </div>
  )
}
