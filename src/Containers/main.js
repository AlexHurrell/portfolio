import React from 'react';
import { Route } from 'react-router-dom'
import home from '../Components/home'
import projects from '../Components/projects'
import '../App.css';

const Main = () => {
  return (
    <div className="App">
      <Route exact path="/" component={home} />
      <Route path="/projects" component={projects} />
    </div>
  );
}

export default Main;
