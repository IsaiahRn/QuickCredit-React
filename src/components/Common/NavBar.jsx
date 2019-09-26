/* istanbul ignore file */
import React from 'react';
import { Link } from 'react-router-dom';
import mylogo2 from '../../assets/images/mylogo2.png';
import setAuthorizationToken from '../../utils/setAuthToken';

const logout = event => {
  event.preventDefault();
  localStorage.clear();
  setAuthorizationToken(false);
  window.location = '/login';
};

const Navbar = () => {
  const token = localStorage.getItem('jwtToken');
  if (!token || token === undefined) {
    return (
      <div className="header__nav">
        <nav className="navbar " role="navigation">

          <div className="navbar__header">
            <span className="js__navbar__toggler" style={{ fontSize: '30px', cursor: 'pointer' }}>☰ </span>
            <Link to="/" className="navbar__brand">
              <img src={mylogo2} alt="Quick Credit" srcSet />
            </Link>
          </div>

          <div className="collapse navbar__collapse">
            <ul className="nav navbar__right navbar__nav">
              <li>
                <Link to="/">How it works</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Benefits</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link className="btn btn--bgcolor btn--round" to="/login">Sign In</Link>
              </li>
              <li>
                <Link className="btn btn--bgcolor btn--round" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div className="header__nav">
      <nav className="navbar " role="navigation">
        <div className="navbar__header">
          <span className="js__navbar__toggler" style={{ fontSize: '30px', cursor: 'pointer' }}>☰ </span>
          <Link to="/" className="navbar__brand">
            <img src={mylogo2} alt="Quick Credit" srcSet />
          </Link>
        </div>

        <div className="collapse navbar__collapse">
          <ul className="nav navbar__right navbar__nav">
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Benefits</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <button type="button" className="btn btn--bgcolor-red btn--round" onClick={logout}>Sign Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
