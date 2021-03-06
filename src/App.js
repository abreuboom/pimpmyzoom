import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Carousel from "./components/Carousel";
import FullscreenModal from "./components/FullscreenModal";
import HeaderTitle from "./components/HeaderTitle";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import React from "react";
import StoreContextProvider from "./utils/context";
import Upload from "./components/Upload";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <NavBar />
      </header>

      <StoreContextProvider>
        <main>
          <Switch>
            <Route path='/why'></Route>

            <Route path='/upload'>
              <Upload />
            </Route>

            <Route path='/beta'>
              <Preview />
            </Route>

            <Route path='try/:id?'>
              <FullscreenModal />
            </Route>

            <Route path='/'>
              <HeaderTitle />
              <Carousel />
            </Route>
          </Switch>
        </main>
      </StoreContextProvider>

      <footer>
        <Link to='/upload'>UPLOAD</Link>
      </footer>
    </Router>
  );
}

export default App;
