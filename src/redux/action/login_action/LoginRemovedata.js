import axios from 'axios';
import LoginGetdata from './LoginGetdata';

const LoginRemovedata = (userid) => async (dispatch) => {
  dispatch({
    type: 'User_Remove_Data',
  });
  try {
    const json = await axios.delete(`http://localhost:3000/loginData/${userid}`);
    console.log(json, 'Remove RES DATA ');
    dispatch({
      type: 'User_Remove_Data',
      usersid: json.data,
      isError: false,
    });
    dispatch(LoginGetdata());
    console.log(userid, 'id res');
  } catch (e) {
    console.log(e, 'USER REMOVE error');
  }
};

export default LoginRemovedata;
