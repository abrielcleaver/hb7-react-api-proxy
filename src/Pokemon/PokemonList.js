import React from 'react';

export default function PokemonList({ pokemon }){

  return (
    <div className='poke-list'>
      {
        pokemon.map((monster, i) => <div className='monster-item' key={`${monster.pokemon}-${i}`}>
          <p>{monster.pokemon}</p>
          <p>{monster.type_1}</p>
          <img src={monster.url_image} />
        </div>
        )}
    </div>
  );
}
