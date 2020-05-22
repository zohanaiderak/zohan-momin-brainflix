import React from 'react';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Upload from './Pages/Upload/Upload'
import axios from 'axios'
import Video from './Components/Main-video/Video'

class App extends React.Component {
 
render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Upload" component={Upload}></Route>
          <Route path="/" exact component={Video}></Route>
          <Route path="/:id" component={Video}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
