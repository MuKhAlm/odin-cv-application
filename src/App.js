import React from 'react';
import './App.css';
import uniqid from "uniqid";

import PersonalDetails from './components/PersonalDetails';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

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
      }),
      workExperiences: [
        createWorkExperienceDetails({
          organisationName: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          description: '',
          key: uniqid(),
        }),
      ],
      educations: [
        createEducationDetails({
          organisationName: '',
          courseName: '',
          startDate: '',
          endDate: '',
          description: '',
          key: uniqid(),
        })
      ]
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

  /**
   * Handles user input for Work Experience fields,
   * 
   * Sets the appropriate Work Experience property to what the user inputted,
   * 
   * @param {Object} e Event
   * @param {Number} listid The unique key of the workExperience list item
   * @modifies this.state (this = App)
   */
   handleWorkExperienceChange = (e, listid) => {
    let we = createWorkExperienceDetails(...this.state.workExperiences.filter((workExperience) => (workExperience.key === listid)))
    we[e.target.name] = e.target.value

    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.map((workExperience) => {
        if (workExperience.key === listid) {
          return we
        } else {
          return workExperience
        }
      })
    }))
  }

  /**
   * Removes a WorkExperience,
   * 
   * @param {Number} listid The unique key of the workExperience list item
   * @modidies this.state (this = App)
   */
  removeWorkExperience = (listid) => {
    this.setState((prevState) => ({
      workExperiences: prevState.workExperiences.filter((we) => (
        we.key !== listid
      ))
    }))
  }

  /**
   * Adds WorkExperience
   * 
   * @modifies this.state (this = App)
   */
  addWorkExperience = () => {
    this.setState((prevState) => ({
      workExperiences: [
        ...prevState.workExperiences,
        createWorkExperienceDetails({
          organisationName: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          description: '',
          key: uniqid(),
        })
      ]
    }))
  }

  /**
  * Handles user input for Education fields,
  * 
  * Sets the appropriate Education property to what the user inputted,
  * 
  * @param {Object} e Event
  * @param {Number} listid The unique key of the Education list item
  * @modifies this.state (this = App)
  */
  handleEducationChange = (e, listid) => {
    let ed = createEducationDetails(...this.state.educations.filter((education) => (education.key === listid)))
    ed[e.target.name] = e.target.value

    this.setState((prevState) => ({
      educations: prevState.educations.map((education) => {
        if (education.key === listid) {
          return ed
        } else {
          return education
        }
      })
    }))
  }

  /**
   * Removes an Education,
   * 
   * @param {Number} listid The unique key of the Education list item
   * @modidies this.state (this = App)
  */
  removeEducation = (listid) => {
    this.setState((prevState) => ({
      educations: prevState.educations.filter((ed) => (
        ed.key !== listid
      ))
    }))
  }

  /**
   * Adds WorkExperience
   * 
   * @modifies this.state (this = App)
   */
   addEducation = () => {
    this.setState((prevState) => ({
      educations: [
        ...prevState.educations,
        createWorkExperienceDetails({
          organisationName: '',
          courseName: '',
          startDate: '',
          endDate: '',
          description: '',
          key: uniqid(),
        })
      ]
    }))
  }

  render () {
    const workExperiences = this.state.workExperiences.map((we) => (
      <WorkExperience
        organisationName={we.organisationName}
        jobTitle={we.jobTitle}
        startDate={we.startDate}
        endDate={we.endDate}
        description={we.description}
        onChange={this.handleWorkExperienceChange}
        onRemove={this.removeWorkExperience}
        listid={we.key}
        key={we.key}
      ></WorkExperience>
    ))
    const educations = this.state.educations.map((ed) => (
      <Education
        organisationName={ed.organisationName}
        courseName={ed.courseName}
        startDate={ed.startDate}
        endDate={ed.endDate}
        description={ed.description}
        onChange={this.handleEducationChange}
        onRemove={this.removeEducation}
        listid={ed.key}
        key={ed.key}
      ></Education>
    ))
    return (
      <div className="App">
        <header>
          <h1>
            CV Application
          </h1>
        </header>
        <main>
          <div id='production'>
            <div className='productionSection'>
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
            <div className='productionSection'>
              <h2>Work Experience</h2>
              <ul>
                {workExperiences}
              </ul>
              <button onClick={this.addWorkExperience}>Add</button>
            </div>
            <div className='productionSection'>
              <h2>Education</h2>
              <ul>
                {educations}
              </ul>
              <button onClick={this.addEducation}>Add</button>
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

/**
 * Creates a Work Experience Object and returns it,
 * 
 * @param {Obejct} we A Personal Details Object.
 *                    Its structure is {
 *                      organisationName: {String},
 *                      jobTitle: {String},
 *                      startDate: {String},
 *                      endDate: {String},
 *                      description: {String}
 *                    }
 * @returns New Work Experience Object
 */
function createWorkExperienceDetails(we) {
  return Object.assign({}, we)
}
/**
 * Creates an Education Object and returns it,
 * 
 * @param {Obejct} we A Personal Details Object.
 *                    Its structure is {
 *                      organisationName: {String},
 *                      cCourseName: {String},
 *                      startDate: {String},
 *                      endDate: {String},
 *                      description: {String}
 *                    }
 * @returns New Education Object
 */
function createEducationDetails(ed) {
  return Object.assign({}, ed)
}