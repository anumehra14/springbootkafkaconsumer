import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming Navbar is in the same folder
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <ViewStudents/>
  );
}

export default App;
