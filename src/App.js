import React from 'react';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useSelector } from 'react-redux';
const App = () => {
  const state = useSelector(state => state.hamburger.isShowed);
  return (
    <>
      <Navigation/>
      <SearchBar isShowed={state}/>
    </>
  );
}

export default App;
