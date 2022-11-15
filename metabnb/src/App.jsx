import { useState } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal"
import Footer from "./components/Footer";
import Stay from "./components/Stay"
import React from "react";



function App() {
  const [modal, setModal] = React.useState(false)
  function activate() {
    setModal(prev => !prev)
  }
  return (
    <div>
      <Navbar active={activate}/>
     {modal && <Modal active={activate}></Modal>}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/place-to-stay">
          <Stay/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
