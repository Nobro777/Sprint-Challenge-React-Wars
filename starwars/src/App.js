import React from 'react';
import './App.css';
import './components/CharNames';
import CharNames from './components/CharNames';
import ButtonsGroup from './components/ButtonsGroup';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Heading = styled.h1`
  color: blue;
  margin: 1% 0 1% 0;
  font-family: 'Permanent Marker', cursive;
  `
  const SubHeading = styled.h5`
  font-family: 'Fredoka One', cursive;
  margin: 1% 0 0% 0;
  `

  return (
    <div className="App">
      <Heading>React Wars Project</Heading>
      <SubHeading>List of StarWars characters pulled from a StarWars API</SubHeading>
      <CharNames />
      <ButtonsGroup />
    </div>
  );
}

export default App;
