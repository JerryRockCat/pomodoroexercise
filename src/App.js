import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//page
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
