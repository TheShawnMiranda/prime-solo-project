import React from 'react';
import { connect } from 'react-redux';

const AboutPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>

    <h5>This is your match information: </h5>
    {props.donor &&
      <>
        <ul> Donor
        <li>Full Name: {props.donor.donor_name}</li>
          <li>Blood Type: {props.donor.donor_blood_type}</li>
          <li>Height: {props.donor.donor_height}</li>
          <li>Weight: {props.donor.donor_weight}</li>
          <li>Age: {props.donor.donor_age}</li>
          <li>Organ to Donate: {props.donor.donor_organ}</li>
        </ul>
        <ul> Recipient
        <li>Full Name: {props.recipient.recipient_name}</li>
          <li>Blood Type: {props.recipient.recipient_blood_type}</li>
          <li>Height: {props.recipient.recipient_height}</li>
          <li>Weight: {props.recipient.recipient_weight}</li>
          <li>Age: {props.recipient.recipient_age}</li>
          <li>Organ Needed: {props.recipient.recipient_organ}</li>
        </ul>
      </>
    }
    <button className="log-in" onClick={() => props.dispatch({ type: 'GET_DONOR_DATA' }) }>Get Donor Info</button>
    <button className="log-in" onClick={() => props.dispatch({ type: 'GET_RECIPIENT_DATA' }) }>Get Recipient Info</button>
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data[0],
  donor: state.donor,
  recipient: state.recipient
});

export default connect(mapStateToProps)(AboutPage);