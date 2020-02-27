import React,{Component} from 'react';
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/register'
import Header from './component/Header'
import Login from './pages/login'
import Notfound from './pages/notfound'

class App extends Component {
  state={
   
  }

  render() { 
      return(
        <div>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login/:id' exact component={Login}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/*' exact component={Notfound}/>
          </Switch>
        </div>
      )
  }
}
 


export default App;
