import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    donor_name: '',
    donor_blood_type: '',
    donor_height: '',
    donor_weight: '',
    donor_age: '',
    donor_organ: '',
    zip: '',
    recipient_name: '',
    recipient_blood_type: '',
    recipient_height: '',
    recipient_weight: '',
    recipient_age: '',
    recipient_organ: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.donor_name && this.state.donor_blood_type &&
      this.state.donor_height && this.state.donor_weight && this.state.donor_age && this.state.donor_organ &&
      this.state.zip && this.state.recipient_name && this.state.recipient_blood_type && this.state.recipient_height &&
      this.state.recipient_weight && this.state.recipient_age && this.state.recipient_organ) {
        this.props.dispatch({
          type: 'REGISTER',
          payload: {
            username: this.state.username,
            password: this.state.password,
          },
        })
        this.props.dispatch({
          type: 'REGISTER_DATA',
          payload: {
            donor_name: this.state.donor_name,
            donor_blood_type: this.state.donor_blood_type,
            donor_height: this.state.donor_height,
            donor_weight: this.state.donor_weight,
            donor_age: this.state.donor_age,
            donor_organ: this.state.donor_organ,
            zip: this.state.zip,
            recipient_name: this.state.recipient_name,
            recipient_blood_type: this.state.recipient_blood_type,
            recipient_height: this.state.recipient_height,
            recipient_weight: this.state.recipient_weight,
            recipient_age: this.state.recipient_age,
            recipient_organ: this.state.recipient_organ
          }
        })
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="donor_name">
              Donor Name:
              <input
                type="text"
                name="donor_name"
                value={this.state.donor_name}
                onChange={this.handleInputChangeFor('donor_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="donor_blood_type">
              Donor Blood Type:
              <input
                type="text"
                name="donor_blood_type"
                value={this.state.donor_blood_type}
                onChange={this.handleInputChangeFor('donor_blood_type')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="donor_height">
              Donor Height:
              <input
                type="number"
                name="donor_height"
                value={this.state.donor_height}
                onChange={this.handleInputChangeFor('donor_height')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="donor_weight">
              Donor Weight:
              <input
                type="number"
                name="donor_weight"
                value={this.state.donor_weight}
                onChange={this.handleInputChangeFor('donor_weight')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="donor_age">
              Donor Age:
              <input
                type="number"
                name="donor_age"
                value={this.state.donor_age}
                onChange={this.handleInputChangeFor('donor_age')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="donor_organ">
              Donor Organ:
              <input
                type="text"
                name="donor_organ"
                value={this.state.donor_organ}
                onChange={this.handleInputChangeFor('donor_organ')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zip">
              Zip:
              <input
                type="number"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChangeFor('zip')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="recipient_name">
              Recipient Name:
              <input
                type="text"
                name="recipient_name"
                value={this.state.recipient_name}
                onChange={this.handleInputChangeFor('recipient_name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="recipient_blood_type">
              Recipient Blood Type:
              <input
                type="text"
                name="recipient_blood_type"
                value={this.state.recipient_blood_type}
                onChange={this.handleInputChangeFor('recipient_blood_type')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="recipient_height">
              Recipient Height:
              <input
                type="number"
                name="recipient_height"
                value={this.state.recipient_height}
                onChange={this.handleInputChangeFor('recipient_height')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="recipient_weight">
              Recipient Weight:
              <input
                type="number"
                name="recipient_weight"
                value={this.state.recipient_weight}
                onChange={this.handleInputChangeFor('recipient_weight')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="recipient_age">
              Recipient Age:
              <input
                type="number"
                name="recipient_age"
                value={this.state.recipient_age}
                onChange={this.handleInputChangeFor('recipient_age')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="recipient_organ">
              Recipient Organ:
              <input
                type="text"
                name="recipient_organ"
                value={this.state.recipient_organ}
                onChange={this.handleInputChangeFor('recipient_organ')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);