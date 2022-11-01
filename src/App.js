import React from 'react';
import './App.css'
import PersonalInfo from './components/PersonalInfo';

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
          <div className='creation'>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
