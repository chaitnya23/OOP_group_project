import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Componants/Navbar';
import Login from './Componants/Login';
import Signup from './Componants/Signup';
import About from './Componants/SingalAlumini';
import Home from './Componants/Home';
import {Route} from 'react-router-dom';
import React ,{createContext, useReducer} from 'react';
import reducer from './Reducer';
import Logout from './Componants/Logout';
import Posts from './Componants/Posts';
import AluminiSignup from './Componants/AluminiSignup';
import AddPost from './Componants/AddPost';
import Aluminies from './Componants/Aluminies'


export const Context = createContext();
function App() {

  const [state, dispatch] = useReducer(reducer, null);

  return (
    <div className="App">
    <Context.Provider value={{state ,dispatch}}>
      <Navbar />

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/login'>
        <Login/>
      </Route>

      <Route exact path='/signup'>
        <Signup/>
      </Route>

      <Route exact path='/aluminies'>
        <Aluminies/>
      </Route>

      <Route exact path='/logout'>
        <Logout/>
      </Route>

      <Route exact path='/posts'>
        <Posts/>
      </Route>

      <Route exact path='/alumaniSignup'>
        <AluminiSignup/>
      </Route>


      <Route exact path='/addPost'>
        <AddPost/>
      </Route>

    </Context.Provider>
    </div>
  );
}

export default App;

