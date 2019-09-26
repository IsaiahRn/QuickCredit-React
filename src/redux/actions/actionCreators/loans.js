import '@babel/polyfill';
import {
  toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  checkToken,
} from '../../../utils/checkToken';
import {
  CREATE_LOAN,
  FAILED_LOAN_CREATION,
} from '../actionTypes/loans';

toast.configure({
  autoClose: 8000,
  draggable: false,
});

const performAction = (type, payload) => ({
  type,
  payload,
});

export const applyLoan = (bodyLoan) => async (dispatch) => {
  checkToken();
  try {
    const res = await axios.post(`${process.env.APP_URL_BACKEND}/api/v2/loans`, bodyLoan);
    dispatch(performAction(CREATE_LOAN, res.data));
    toast.success('Application sent successfully!');
  } catch (error) {
    dispatch(performAction(FAILED_LOAN_CREATION, error));
    if (error.response.status === 400) {
      toast.error('Tenor and Amount must be number');
    }
  }
};
