import React from 'react';
import './App.css'

import PersonalDetails from './components/PersonalDetails';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>
            CV Application
          </h1>
        </header>
        <main>
          <div id='production'>
            <h2>Personal Details</h2>
            <PersonalDetails></PersonalDetails>
          </div>
        </main>
        <footer>
          <a href='https://github.com/MuKhAlt/odin-cv-application.git' target={"_blank"} rel="noreferrer" >
            <i className='fa-github fab'></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
