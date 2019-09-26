import createLoan from '../../redux/reducers/loans';
import initialState from '../../redux/initialState';
import { CREATE_LOAN, FAILED_LOAN_CREATION } from '../../redux/actions/actionTypes/loans';

 describe('create loan reducers', () => {
  it('CREATE_LOAN', () => {
    
    const payload = {
      message: 'Successfully created loan',
      loading: false
    };
    const initialState = {
      loan: {},
    };
    const state = createLoan(initialState, {
      type: CREATE_LOAN,
      payload,
    });
    expect(state).toHaveProperty('loan');
  });
  it('FAILED_LOAN_CREATION', () => {
    const reducer = createLoan(initialState, {
      type: FAILED_LOAN_CREATION,
    });
    expect(reducer).toHaveProperty('loan');
  });
});
