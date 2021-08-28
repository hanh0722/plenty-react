import React, {useEffect, useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Index from './components/views';
const App = () => {
  const [navigation, setNavigation] = useState(false);
  const state = useSelector(state => state.hamburger.isShowed);

  useEffect(() =>{
    let oldValue = 0;
    let newValue = 0;
    const getScrollHandler = () =>{
      newValue = window.pageYOffset;

      if(oldValue < newValue){
        setNavigation(true)
      } else {
        setNavigation(false);
      }
      oldValue = newValue;
    }
    window.addEventListener('scroll', getScrollHandler);
  }, [])
  return (
    <>
      <Navigation isDowned={navigation}/>
      <SearchBar isShowed={state}/>
      <Switch>
        <Route path='/' exact component={Index}/>
      </Switch>
    </>
  );
}

export default App;
