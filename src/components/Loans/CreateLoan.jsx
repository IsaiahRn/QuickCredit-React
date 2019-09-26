/* istanbul ignore file */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { applyLoan } from '../../redux/actions/actionCreators';
import mylogo1 from '../../assets/images/mylogo1.png';

export class CreateLoan extends Component {
  state = {
    tenor: '',
    amount: '',
  }

  componentDidMount() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      localStorage.clear();
      window.location = '/login';
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClickApply = e => {
    e.preventDefault();
    const { tenor, amount } = this.state;
    const bodyLoan = {
      tenor,
      amount,
    };
    this.props.applyLoan(bodyLoan).then(() => {
      this.setState({
        tenor: '',
        amount: '',
      });
    });
  }

  signOut = () => {
    localStorage.clear();
    window.location = '/';
  }

  render() {
    const {
      tenor, amount,
    } = this.state;
    return (
      <div className="wrapper dashboard--bg--grey">
        <header className="dashboard__header bg--color--white">
          <div className="header__nav">
            <nav className="navbar  container-fluid" role="navigation">
              <div className="navbar__header dashboard__navbar__header">
                <span className="js__navbar__toggler DashboardColor--primary" style={{ fontSize: '30px', cursor: 'pointer' }}>☰ </span>
                <a href="/" className="navbar__brand">
                  <div className="dashboard--logo--wrapper bg--color--primary">
                    <img src={mylogo1} alt="Ride my way logo" />
                  </div>
                </a>
              </div>
              <div className="collapse navbar__collapse dashboard__collapse">
              </div>
            </nav>
            <div className="dashboard__header__bottom bg--color--primary">
              <div className="container-fluid">
                <ul className="nav navbar__right navbar__nav">
                  <li>
                    <Link to="/">
                Go Back To Home
                      <hr className="active--indicator" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="dashboard__content">
            <div className="LoanDetails light--shadow">
              <div className="LoanDetail__header">
                <div className="LoanInfo__header">
                  <div className="LoanInfo__header__img text--center">
                    <img src={mylogo1} alt="offerer profile" />
                    <h3 className="text--primary">Loan application</h3>
                    <br />
                    <hr id="below--loan--application" />
                  </div>
                </div>
                <br />
                <div className="LoanInfo__content text--center margin--top--10">
                  <form onSubmit={this.onClickApply}>
                    <div className="input--group dashboard--input">
                      <input type="text" className="form-control form--control amount" placeholder="Enter Amount" name="amount" value={amount} onChange={this.onChange} required />
                    </div>
                    <br />
                    <div className="input--group dashboard--input">
                      <input type="text" className="form-control form--control amount" placeholder="Enter Tenor" name="tenor" value={tenor} onChange={this.onChange} required />
                    </div>
                    <br />
                    <div className="contact__submit margin--top--10--crtLoan">
                      <button type="submit" className="btn btn--block bg--color--grey text--color--white light--shadow">
                        <span>Request a loan</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <h5 className="text--center text--color--white">© Quick-Credit</h5>
        </footer>
      </div>

    );
  }
}


const getStateFromStore = state => ({
  loans: state.loan,
});

export default connect(getStateFromStore, { applyLoan })(CreateLoan);
