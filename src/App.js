import React from 'react';
import './App.css'

import PersonalDetails from './components/PersonalDetails';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      personalDetails: createPersonalDetails({
        firstName: '',
        surname: '',
        email: '',
        phoneNumber: '',
        description: ''
    })
    }
  }

  /**
   * Handles user input for Personal Details field,
   * 
   * Sets the appropriate Personal Detail property to what the user inputted,
   * 
   * @param {Object} e Event
   * @modifies this.state (this = App)
   */
  handlePersonalDetailsChange = (e) => {
    let pd = createPersonalDetails(this.state.personalDetails)
    pd[e.target.name] = e.target.value

    this.setState({
      personalDetails: pd
    })
  }

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
          <div id='personalDetailsSection'>
            <h2>Personal Details</h2>
            <PersonalDetails 
              firstName={this.state.personalDetails.firstName}
              surname={this.state.personalDetails.surname}
              email={this.state.personalDetails.email}
              phoneNumber={this.state.personalDetails.phoneNumber}
              description={this.state.personalDetails.description}
              onChange = {this.handlePersonalDetailsChange}
            ></PersonalDetails>
          </div>
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

/**
 * Creates a Personal Details Object and returns it,
 * 
 * @param {Obejct} PD A Personal Details Object.
 *                    Its structure is {
 *                      firstName: {String},
 *                      surname: {String},
 *                      email: {String},
 *                      phoneNumber: {String} (Only numbers),
 *                      description: {String}
 *                    }
 * @returns New Personal Detials Object
 */
function createPersonalDetails(PD) {
  return Object.assign({}, PD)
}