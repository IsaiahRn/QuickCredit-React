import moxios from 'moxios';
import dotenv from 'dotenv';
import store from '../../__mocks__/store';
import {
  applyLoan
} from '../../redux/actions/actionCreators/loans';

dotenv.config();

describe('loan action', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should create loan application', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'Successfully created loan'
        },
      });
      request.respondWith({
        status: 204,
      });
    });

    return store.dispatch(applyLoan()).then(() => {
      expect(store.getActions().length).toBe(1);
    });
  });
});