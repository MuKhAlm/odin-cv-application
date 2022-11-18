import React from 'react';
import './PersonalDetails.css'

export default class PersonalDetails extends React.Component {
  render() {
    return (
      <div className='PersonalDetails'>
        <input 
          name='firstName' 
          type={"text"} 
          placeholder={"First Name"}
          value={this.props.firstName}
          onChange={this.props.onChange}
        ></input>
        <input 
          name='surname'  
          type={"text"} 
          placeholder={"Surname"}
          value={this.props.surname}
          onChange={this.props.onChange}
        ></input>
        <input 
          name='email' 
          type={"email"}
          placeholder={"Email"}
          value={this.props.email}
          onChange={this.props.onChange}
        ></input>
        <input 
          name='phoneNumber' 
          type={"number"} 
          placeholder={"Phone Number"}
          value={this.props.phoneNumber}
          onChange={this.props.onChange}
        ></input>
        <textarea 
          name='description'
          placeholder="Description"
          value={this.props.description}
          onChange={this.props.onChange}
        ></textarea>
      </div>
    )
  }
}