import moxios from 'moxios';
import dotenv from 'dotenv';
import http from '../../utils/axios';
import store from '../../__mocks__/store';
import * as signUp from '../../redux/actions/actionCreators/signup';
import {
  SUBMITTING_CREDENTIALS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../../redux/actions/actionTypes';

dotenv.config();
const { APP_URL_BACKEND } = process.env;

describe('Sign up actions', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  test('should return signed up successfully', async () => {
    moxios.stubRequest(`${APP_URL_BACKEND}/api/v2/auth/signup`, {
      status: 201,
      response: { message: 'success sign up' },
    });

    const user = {
      email: 'iscarf96@gmail.com',
      password: '@Kigali250',
      username: 'scarface',
    };
    await store.dispatch(signUp.signUp(user));
    expect(store.getActions()).toEqual([
      {
        type: SUBMITTING_CREDENTIALS,
        payload: user,
      },
      {
        type: SIGN_UP_SUCCESS,
        payload: 'success sign up',
      },
    ]);
  });

  test('should return signed up successfully', async () => {
    moxios.stubRequest(`${APP_URL_BACKEND}/api/v2/auth/signup`, {
      status: 409,
      response: { error: 'username and email already exist' },
    });

    const user = {
      email: 'iscarf96@gmail.com',
      password: '@Kigali250',
      username: 'scarface',
    };
    await store.dispatch(signUp.signUp(user));
    expect(store.getActions()).toEqual([
      {
        type: SUBMITTING_CREDENTIALS,
        payload: user,
      },
      {
        type: SIGN_UP_FAILURE,
        payload: 'username and email already exist',
      },
    ]);
  });
});
