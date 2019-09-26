/* istanbul ignore file */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Validator from '../../utils/authValidation';
import { login } from '../../redux/actions/actionCreators';
import mylogo1 from '../../assets/images/mylogo1.png';

export class LoginContainer extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    redirecting: false,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.clearErrors();
    const emailError = Validator.validateEmail({ email });
    const passwordError = Validator.validatePassoword({ password });
    if (emailError) {
      return this.displayError(emailError, 'emailError');
    }
    if (passwordError) {
      return this.displayError(passwordError, 'passwordError');
    }
    this.props.login(email, password);
  }

  displayError = (error, key) => {
    this.setState({ [key]: error });
  };

  clearErrors = () => this.setState(prevState => ({
    ...prevState,
    emailError: '',
    passwordError: '',
  }))

  render() {
    const {
      email, password, emailError, passwordError,
    } = this.state;

    const successMsg = this.props.isLoginSuccess;
    const failedMsg = this.props.loginError;

    if (successMsg) {
      setTimeout(() => this.setState({
        redirecting: true,
      }), 3000);
    }

    if (this.state.redirecting) {
      return <Redirect to="/" />;
    }

    return (
      <div className="wrapper">
        <section className="CreateAccount padding--bottom--210">
          <div className="CreateAccount__title">
            <div className="logo--wrapper">
              <Link to="/">
                <img src={mylogo1} alt="Quick Credit logo" />
              </Link>
            </div>
            <h4 className="text--center text--primary">Sign In</h4>
          </div>
          <div className="CreateAccount__headline">Get your short term loan in few minutes</div>
          <div className="CreateAccount__content">
            <div className="CreateAccount__form">
              <form onSubmit={this.onSubmit}>
                <div>
                  { successMsg ? (
                    <div className="success">
                        successfully loggedIn
                      {' '}
                    </div>
                  ) : false}
                </div>
                {failedMsg && <div className="error">{failedMsg}</div>}
                <div className="input--group--signin">
                  <input type="text" className={`form-control form--control ${emailError ? 'input-error' : ''}`} placeholder="Enter Email address" name="email" value={email} onChange={this.onChange} />
                  <hr />
                  <input type="password" className={`form-control form--control ${passwordError ? 'input-error' : ''}`} placeholder="Enter Password" name="password" value={password} onChange={this.onChange} />
                </div>
                {emailError && <div className="error">{emailError}</div>}
                {passwordError && <div className="error">{passwordError}</div>}
                <div className="contact__submit__signin">
                  <button type="submit" className="btn btn--block bg--color--grey text--color--white">
                    <span>Sign In</span>
                  </button>
                </div>
                <div className="margin--top--10">
                  <p className="text--primary">
                  Dont have an account?
                    <Link to="/signup" className="text--color--grey">Create an account.</Link>
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

    );
  }
}

export const mapStateToProps = (state) => ({
  isLoginSuccess: state.login.isLoginSuccess,
  loginError: state.login.loginError,
  auth: state.login,
});

export const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
