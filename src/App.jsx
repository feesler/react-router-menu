import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
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
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
