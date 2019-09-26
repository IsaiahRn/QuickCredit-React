import moxios from 'moxios';
import dotenv from 'dotenv';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from '../../utils/axios';
import {
  SET_CURRENT_USER, SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS, SET_LOGIN_ERROR
} from '../../redux/actions/actionTypes';

import { setCurrentUser, setLoginPending, setLoginSuccess, setLoginError,
  login } from '../../redux/actions/actionCreators';

dotenv.config();

const mockStore = configureMockStore([thunk]);
const store  =  mockStore({});

const { APP_URL_BACKEND } = process.env;

describe('Testing Login actions', () => {
  beforeEach(() => {
    moxios.install(http);
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall(http);
  });

  it('should dispatch SET_LOGIN_SUCCESS incase of success', () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
        request.respondWith({
            status: 201,
            response: {
              message: 'logged in',
              user: {
                username: 'peter',
                email: 'peter@gmail.com',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NGI0ODlmLTI1NzctNGQyNC05OTNkLTFlMjQ2ZTI5MTIyOSIsImVtYWlsIjoibmt1bGloZXJ2ZUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImhlcnZlcmEiLCJpYXQiOjE1Njc1MTk1MzQsImV4cCI6MTU2NzYwNTkzNH0.75_QbEoyNdCmWjLQ8hvyMu5W25RUEiMwXOuOJVsNPYg'
              }
            }
        });
    });
    let expectedActions = [
      SET_LOGIN_PENDING,
      SET_LOGIN_ERROR,
      SET_LOGIN_PENDING,
    ];

    return store.dispatch(login('isaie@gmail.com', '@Isaiah47')).then(() => {
        let dispatchedActions = store.getActions();
        let dispatchedTypes = dispatchedActions.map(action => action.type);
        expect(dispatchedTypes).toEqual(expectedActions);
    })
  });


  it('should not return signed in successfully', async () => {
    moxios.stubRequest(`${APP_URL_BACKEND}/api/v2/auth/login`, {
      status: 404,
      response: { 
        error: 'user not found' 
      },
    });

    const user = {
      email: 'xsddd2eff@gmail.com',
      password: '@Isaiah47',
    };
    await store.dispatch(login(user.email, user.password));
    expect(store.getActions()).toEqual([
      {
        type: SET_LOGIN_PENDING,
        isLoginPending: true,
      },
      {
        type: SET_LOGIN_ERROR,
        loginError: "user not found",
        
      },
      {
        type: SET_LOGIN_PENDING,
        isLoginPending: false,
      },
    ]);
  });

  it('should dispatch SET_LOGIN_ERROR incase the token is undefined', () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
        request.respondWith({
            response: {
              error: 'Something went wrong. Check your internet connection.',
            }
        });
    });
    let expectedActions = [
      SET_LOGIN_PENDING,
      SET_LOGIN_ERROR,
      SET_LOGIN_PENDING,
    ];

    return store.dispatch(login('isaie@gmail.com', '@Isaiah47')).then(() => {
        let dispatchedActions = store.getActions();
        let dispatchedTypes = dispatchedActions.map(action => action.type);
        expect(dispatchedTypes).toEqual(expectedActions);
    })
  });
});


describe('Default actions', () => {
  it('Should return setCurrentUser type', () => {
    const user = { firstName: 'Peter', password: 'Peter***' };
    const response = setCurrentUser(user);
    expect(response).toEqual({
      type: SET_CURRENT_USER,
      user,
    });
  });

  it('Should return setLoginPending type', () => {
    const isLoginPending = false;
    const response = setLoginPending(isLoginPending);
    expect(response).toEqual({
      type: SET_LOGIN_PENDING,
      isLoginPending,
    });
  });

  it('Should return setLoginSuccess type', () => {
    const isLoginSuccess = false;
    const response = setLoginSuccess(isLoginSuccess);
    expect(response).toEqual({
      type: SET_LOGIN_SUCCESS,
      isLoginSuccess,
    });
  });

  it('Should return setLoginError type', () => {
    const loginError = {};
    const response = setLoginError(loginError);
    expect(response).toEqual({
      type: SET_LOGIN_ERROR,
      loginError,
    });
  });
});
