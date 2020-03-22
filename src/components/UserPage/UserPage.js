import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DeleteButton from '../DeleteButton/DeleteButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    
    <h5>This is the information you have on file: </h5>
    {props.data &&
    <>
      <ul> Donor
        <li>Full Name: {props.data.donor_name}</li>
        <li>Blood Type: {props.data.donor_blood_type}</li>
        <li>Height: {props.data.donor_height}</li>
        <li>Weight: {props.data.donor_weight}</li>
        <li>Age: {props.data.donor_age}</li>
        <li>Organ to Donate: {props.data.donor_organ}</li>
      </ul>
      <ul> Recipient
        <li>Full Name: {props.data.recipient_name}</li>
        <li>Blood Type: {props.data.recipient_blood_type}</li>
        <li>Height: {props.data.recipient_height}</li>
        <li>Weight: {props.data.recipient_weight}</li>
        <li>Age: {props.data.recipient_age}</li>
        <li>Organ Needed: {props.data.recipient_organ}</li>
      </ul>
      </>
    }
    <LogOutButton className="log-in" />
    <DeleteButton className="delete" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data[0]
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);