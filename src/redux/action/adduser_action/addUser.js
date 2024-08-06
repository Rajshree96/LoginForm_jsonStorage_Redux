import axios from 'axios';
import getUser from './getUser';

const addUser = (udata) => async (dispatch) => {
  // eslint-disable-next-line no-console
  console.log({ udata }, '-------');

  const json = await axios.post('http://localhost:3000/users', udata);
  console.log(json, 'json data in action add user');
  dispatch({
    type: 'Add_User',
    payload: json?.data,
  });
  dispatch(getUser());
};

export default addUser;
