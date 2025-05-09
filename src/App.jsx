import { useState } from 'react';
import { Route, Routes } from 'react-router';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import NavBar from './components/NavBar/NavBar';
import PokemonForm from './components/PokemonForm/PokemonForm';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);//pokemon will have a valur of the initial state value that is above within the objects

  
  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);//add a new pokemon in the form
  };


  return (
    <>
     <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
      <Route path="/" element={<h2>Home Page</h2>} /> 
      <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
      <Route 
          path="/pokemon/new" 
          element={<PokemonForm addPokemon={addPokemon} />}
        />
       <Route path="/pokemon/new" element={<PokemonForm />} />
      <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemon={pokemon} />} />
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;

//since we are using props we have to render using PokemonList pokemon={pokemon} />

//react router - is a framework and library for react.

//react router has to be installed. npm i react-router

//catch all route- An error handling route. example below. 
//<Route path="*" element={<h2>Whoops, nothing here!</h2>} />

// With the route in place, you should now be able to navigate to the details page.

// Notice the _id value stored in the URL bar of the details page. We’ll need this value to find a specific pokemon object in the props.pokemon array. To do so, we’ll make use of React Router’s useParams() hook.

// The useParams() hook returns an object with properties for each route parameter in the current URL. With this hook, we can store data in the URL, and extract it for use in a component.

// Understanding programmatic navigation

// In web applications, users are often redirected to a different page after completing certain actions, like a form submission. React Router provides this functionality through the useNavigate() hook. With useNavigate(), we can navigate users programmatically, without traditional links.

// The useNavigate() hook returns a function that can be used for programmatic navigation: