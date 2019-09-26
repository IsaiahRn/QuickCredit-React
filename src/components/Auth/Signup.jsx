import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Validator from '../../utils/authValidation';
import { signUp } from '../../redux/actions/actionCreators/signup';
import mylogo1 from '../../assets/images/mylogo1.png';


export class Signup extends Component {
  state = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    address: '',
    emailError: '',
    firstNameError: '',
    lastNameError: '',
    addressError: '',
    passwordError: '',
    redirecting: false,
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email, firstname, lastname, password, address,
    } = this.state;
    this.clearErrors();
    const emailError = Validator.validateEmail({ email });
    const firstnameError = Validator.validateFirstname({ firstname });
    const lastnameError = Validator.validateLastname({ lastname });
    const addressError = Validator.validateAddress({ address });
    const passwordError = Validator.validatePassoword({ password });
    if (emailError) {
      return this.displayError(emailError, 'emailError');
    }
    if (firstnameError) {
      return this.displayError(firstnameError, 'firstnameError');
    }
    if (lastnameError) {
      return this.displayError(lastnameError, 'lastnameError');
    }
    if (addressError) {
      return this.displayError(addressError, 'addressError');
    }
    if (passwordError) {
      return this.displayError(passwordError, 'passwordError');
    }

    const signupData = {
      email,
      firstname,
      lastname,
      address,
      password,
    };
    this.props.signUp(signupData);
  };

  displayError = (error, key) => {
    this.setState({ [key]: error });
  };

  clearErrors = () => this.setState(prevState => ({
    ...prevState,
    emailError: '',
    firstnameError: '',
    lastnameError: '',
    addressError: '',
    passwordError: '',
  }))

  render() {
    const {
      email, firstname, lastname, password, address,
      emailError, firstnameError, lastnameError, addressError, passwordError,
    } = this.state;

    const successMsg = this.props.signUpSuccess;
    const failedMsg = this.props.signUpFailure;

    if (successMsg) {
      setTimeout(() => this.setState({
        redirecting: true,
      }), 3000);
    }

    if (this.state.redirecting) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <div className="wrapper">
          <section className="CreateAccount">
            <div className="CreateAccount__title">
              <div className="logo--wrapper">
                <Link to="/">
                  <img src={mylogo1} alt="Quick Credit logo" />
                </Link>
              </div>
              <h4 className="text--center text--primary">Sign Up to Quick Credit</h4>
            </div>
            <div className="CreateAccount__headline">Short term loan in minutes</div>
            <div className="CreateAccount__content">
              <div className="CreateAccount__form">
                <form onSubmit={this.handleSubmit} className="signup-form">
                  <div>
                    { successMsg ? (
                      <div className="success">
                        successfully registered
                        {' '}
                      </div>
                    ) : false}
                  </div>
                  <br />
                  <div className="input--group--signin">
                    <input type="text" className={`form-control form--control ${firstnameError ? 'input-error' : ''}`} placeholder="First Name" name="firstname" value={firstname} onChange={this.handleOnChange} />
                    <input type="text" className={`form-control form--control ${lastnameError ? 'input-error' : ''}`} placeholder="Last Name" name="lastname" value={lastname} onChange={this.handleOnChange} />
                  </div>
                  {firstnameError && <div className="error">{firstnameError}</div>}
                  {lastnameError && <div className="error">{lastnameError}</div>}

                  <div className="input--group--signin">
                    <input type="text" className={`form-control form--control ${emailError ? 'input-error' : ''}`} placeholder="Email address" name="email" value={email} onChange={this.handleOnChange} />
                    <input type="password" className={`form-control form--control ${passwordError ? 'input-error' : ''}`} placeholder="Password" name="password" value={password} onChange={this.handleOnChange} />
                  </div>
                  {emailError && <div className="error">{emailError}</div>}
                  {passwordError && <div className="error">{passwordError}</div>}

                  <div className="input--group--signin">
                    <input type="text" className={`form-control form--control ${addressError ? 'input-error' : ''}`} placeholder="Address" name="address" value={address} onChange={this.handleOnChange} />
                  </div>
                  {addressError && <div className="error">{addressError}</div>}

                  <div className="contact__submit__signin">
                    <button type="submit" className="btn btn--block bg--color--grey text--color--white">
                      <span>Register</span>
                    </button>
                  </div>
                  {failedMsg && <div className="error">{failedMsg}</div>}
                  <div className="margin--top--10">
                    <p className="text--primary">
                      Already have an account?
                      <Link to="/login" className="text--color--grey">Sign In</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section className="contact CreateAccountFooter gradient">
            <footer>
              <h5 className="text--center text--color--white">© Quick-Credit</h5>
            </footer>
          </section>

        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  signUpSuccess: state.signup.userSignup.signUpSuccess,
  signUpFailure: state.signup.userSignup.signUpFailure,
});

const signUpPage = connect(mapStateToProps, { signUp })(Signup);
export default signUpPage;
