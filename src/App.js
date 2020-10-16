import React from "react";
import "./App.css";
import Container from "./components/Container";
import Header from './components/Header';
import StepList from './components/StepList'

function App() {

  return (
    <div className="App">
        <Header />
        <StepList />
        <Container />
    </div>
  );
}

export default App;
