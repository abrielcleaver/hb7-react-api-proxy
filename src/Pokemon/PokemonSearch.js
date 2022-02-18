import { useState } from 'react';
import PokemonList from './PokemonList';
import Spinner from '../Spinner';
// import pokeData from './raw-data';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name.
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState('pikachu');
      // For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
    setLoading(true);
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const endpointUrl = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${searchResults}`;
    const resp = await fetch(endpointUrl);

    // const resp = await fetch(`/.netlify/functions/);

    // put the jsonified data in state and set the loading state to false
    const json = await resp.json();
    setPokemon(json.results);

    setLoading(false);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit} >

            Search through our pokedex
        {/* add inputs/labels, using all the things we need with react forms. 
        Don't forget to use the value property to sync these up with the default values in react state */}
        <label> Search By Name
          <input onChange={(e) => setSearchResults(e.target.value)} placeholder="name" />
        </label>
        <button> Search pokemon</button>
      </form>
      
      {/* Make a PokemonList component to import and use here. Use a ternary to display a loading spinner 
      (make a <Spinner /> component for this) if the data is still loading. */}
      { 
        loading
          ? <Spinner />
          : <PokemonList pokemon={pokemon}/>
      }   
      {/* <PokemonList pokemon={pokemon}/> */}
    </section>
  );

}
