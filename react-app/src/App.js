import React from 'react'; 
import logo from './logo.svg';
import './App.css';

const App = ()=> {
  
  const APP_ID="f21a21a4";
  const APP_KEY="feafbf0828c502cb99247156c1a92ca6";
  const exampleReq= `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${ APP_KEY}`;
   
  
  return(
    <div ClassName="App">
      <form ClassName="search-form">
        <input ClassName="search-bar" type="text" />
        <button ClassName="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
