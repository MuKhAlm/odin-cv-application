import React from 'react';

import './Education.css'

export default class Education extends React.Component {
  render() {
    return (
      <li className='Education'>
        <input
          name='organisationName'
          type={"text"} 
          placeholder={"Organisation Name"}
          value={this.props.organisationName}
          onChange={(e) => {this.props.onChange(e, this.props.listid)}}
        ></input>
        <input
          name='courseName'
          type={"text"} 
          placeholder={"Course Name"}
          value={this.props.courseName}
          onChange={(e) => {this.props.onChange(e, this.props.listid)}}
        ></input>
        <input
          name='startDate'
          type={'text'} 
          placeholder={"Start Date eg. 01/10/2010"}
          value={this.props.startDate}
          onChange={(e) => {this.props.onChange(e, this.props.listid)}}
        ></input>
        <input
          name='endDate'
          type={'text'} 
          placeholder={"End Date, leave empty for ongoing"}
          value={this.props.endDate}
          onChange={(e) => {this.props.onChange(e, this.props.listid)}}
        ></input>
        <textarea 
          name='description'
          placeholder="Description"
          value={this.props.description}
          onChange={(e) => {this.props.onChange(e, this.props.listid)}}
        ></textarea>
        <button onClick={(e) => {this.props.onRemove(this.props.listid)}}>Remove</button>
      </li>
    )
  }
}