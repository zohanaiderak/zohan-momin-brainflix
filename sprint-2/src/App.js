import React from 'react';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Upload from './Pages/Upload/Upload'
import axios from 'axios'

class App extends React.Component {
 
render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/Upload" component={Upload}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
