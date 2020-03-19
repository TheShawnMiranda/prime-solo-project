import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <h5>This is the information you have on file: </h5>
    <ul> Donor
      <li>Full Name: {props.data.id}</li>
      <li>Blood Type: </li>
      <li>Height: </li>
      <li>Weight: </li>
      <li>Date of Birth: </li>
      <li>Organ to Donate: </li>
    </ul>
    <ul> Recipient
      <li>Full Name: </li>
      <li>Blood Type: </li>
      <li>Height: </li>
      <li>Weight: </li>
      <li>Date of Birth: </li>
      <li>Organ Needed: </li>
    </ul>
    {JSON.stringify(props.data)}
    <LogOutButton className="log-in" />
  </div>
);

console.log()

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data[0]
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);