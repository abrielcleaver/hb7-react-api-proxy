import PokemonSearch from './Pokemon/PokemonSearch';
import YelpSearch from './Yelp/YelpSearch';
// import WeatherSearch from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      { /* stretch goal: <WeatherSearch /> */ }
    </div>
  );
}

export default App;
