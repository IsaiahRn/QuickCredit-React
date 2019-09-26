import {
  CREATE_LOAN,
  FAILED_LOAN_CREATION,
} from '../actions/actionTypes';

const initialState = {
  loan: {
    loanSuccess: '',
    loanFailure: '',
  },
  loading: true,
  error: null,
};
export default function (state = initialState, action) {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case CREATE_LOAN: {
      return {
        ...state,
        loading: false,
        loan: {
          loanSuccess: payload,
        },
      };
    }
    case FAILED_LOAN_CREATION: {
      return {
        ...state,
        loading: false,
        loan: {
          loanFailure: payload,
        },
      };
    }
    default:
      return state;
  }
}
