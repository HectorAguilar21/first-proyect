import './App.css';
import FormRequest from './assets/components/forms/FormRequest';
import ListPokemons from './assets/components/cards/PokemonsList';

function App() {
  return (
    <div className='mainContainer'>
      <FormRequest />
      <ListPokemons />
    </div>
  );
}

export default App;
