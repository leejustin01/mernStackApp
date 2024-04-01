import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import { useState } from 'react';
import Navigation from './components/Navigation';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      <p>
        Welcome! Track your exercises with this full-stack MERN app!
      </p>
      <Router>
        <Navigation />
        <div className="App-header">
          <Routes>
            <Route path="/" exact element={ <HomePage setExerciseToEdit={setExerciseToEdit} /> }></Route>
            <Route path="/create" element={ <CreatePage /> }></Route>
            <Route path="/edit" element={ <EditPage exerciseToEdit={exerciseToEdit} /> }></Route>
          </Routes>
        </div>
      </Router>
      <footer>© 2024 Justin Lee</footer>
    </div>
  );
}

export default App;
