import React from 'react';
import './App.css'

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
        <footer>
          <a href='https://github.com/MuKhAlt/cv-application.git'>
            <i className='fa-github fab'></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
