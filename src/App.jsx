import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import DriftPage from './components/DriftPage/DriftPage.jsx';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage.jsx';
import ForzaPage from './components/ForzaPage/ForzaPage.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/drift" Component={DriftPage} />
            <Route path="/timeattack" Component={TimeAttackPage} />
            <Route path="/forza" Component={ForzaPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
