import React from 'react';
import './App.css';
import DogPosting from './components/DogPosting';
import DogBoard from './components/DogBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogPosting />
        <DogBoard />
      </header>
    </div>
  );
}

export default App;
