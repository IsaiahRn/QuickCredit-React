import React from 'react';
import { Link } from 'react-router-dom';
import account from '../../assets/images/account.png';
import wed from '../../assets/images/wedding-planning.png';
import graph from '../../assets/images/graph.png';
import Navbar from '../Common/NavBar';

const Home = () => (
  <div className="wrapper">
    <header className="header__main">
      <Navbar />
      <div className=" container-fluid">
        <div className="row">
          <div className="margin--top--100">
            <div className="header ">
              <div className="header__title typed m--center">
              Quick Credit
              </div>
              <div className="header__content">
              Short term soft loans for you.
              </div>
              <div className="header__apply">
                <Link className="btn btn--bgcolor btn--round" to="/loan">
                Apply for a loan!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* HOW IT WORKS */}
    <section id="howitworks" className="how-it-works">
      <div className="container-fluid">
        <h1 className="how__title text--primary text--center">
        Let us see, how it works
        </h1>
        <p className="how__headline">Few steps to have a short term soft loan</p>
        <div className="how__content">
          <div className="card">
            <div className="card__header">
              <img src={account} alt="Account" />
            </div>
            <div className="card__content">
              <div className="card--content__title text--primary">
              Create an Account
              </div>
              <div className="card--content__body">
              Simply, create your account and request your loan!
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={wed} alt="Account" />
            </div>
            <div className="card__content">
              <div className="card--content__title text--primary">
              Request a loan
              </div>
              <div className="card--content__body">
              Once you have an account, feel free to request your loan!
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <img src={graph} alt="Account" />
            </div>
            <div className="card__content">
              <div className="card--content__title text--primary">
              Get a loan
              </div>
              <div className="card--content__body">
              Request a loan and get it in a minute!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="contact gradient">
      <div className="container">
        <div className="contact__title text--color--white">Contact Us</div>
        <div className="contact__form">
          <form action="#" method="POST">
            {/* group inputs */}
            <div className="input--group">
              <input type="text" className="form-control form--control" placeholder="Your name" disabled />
              <hr />
              <input type="text" className="form-control form--control" placeholder="Your Email" disabled />
              <hr />
              <input type="text" className="form-control form--control" placeholder="Your Phone" disabled />
            </div>
            {/* textarea */}
            <div className="text__area p--0">
              <textarea className="form-control" rows={3} required="required" placeholder="Your message" defaultValue="" disabled />
            </div>
            {/* submit button */}
            <div className="contact__submit">
              <button type="submit" className="btn btn--block bg--color--grey text--color--white" disabled>
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <h5 className="text--center text--color--white">© Quick-Credit</h5>
      </footer>
    </section>
  </div>

);
export default Home;
