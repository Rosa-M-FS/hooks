import './App.css';
import useFetch from './hooks/useCustomHook'
function App() {
  const urlPokemon ='https://pokeapi.co/api/v2/pokemon/1';
  const urlRick ='https://rickandmortyapi.com/api/character/1';
  
  const{data:pokemon,loading:loadingPokemon,error:errorPokemon}=useFetch(urlPokemon);
  const{data:rick,loading:loadingRick,error:errorRick}=useFetch(urlRick);

  return (
    <>
      <div>
        <h1>Personajes</h1>

        <h2>Pokemon</h2>
        {loadingPokemon && <p>Cargando..</p>}
        {errorPokemon && <p>Error:{errorPokemon}</p>}
        {pokemon && (
          <>
          <p>{pokemon.name}</p>
          <img src = {pokemon.sprites.front_default} alt = {pokemon.name}></img>
          </>
        )}

        <h2>Rick & Morty</h2>
        {loadingRick && <p>Cargando..</p>}
        {errorRick && <p>Error:{errorRick}</p>}
        {rick && (
          <>
          <p>{rick.name}</p>
          <img src = {rick.image} alt = {rick.name}></img>
          </>
        )}
      </div>
    </>
  );
}

export default App;
