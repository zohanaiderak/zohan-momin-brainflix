import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';

class App extends React.Component {
render(){
  return (
    <div className="App">
      <Header />
      <Main /> 
    </div>
  );
}
}

export default App;
