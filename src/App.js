import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import React from "react";
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>

      <main>
        <Switch>
          <Route path='/why'></Route>
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='/'>
            <Carousel />
          </Route>
        </Switch>
      </main>
      <footer>
        <Link to='/upload'>UPLOAD</Link>
      </footer>
    </Router>
  );
}

export default App;
