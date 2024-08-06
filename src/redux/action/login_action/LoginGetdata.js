import axios from 'axios';

const LoginGetdata = () => async (dispatch) => {
  dispatch({
    type: 'load',
  });
  try {
    const json = await axios.get('http://localhost:3000/loginData');
    console.log(json, 'JSON RESPONESE USER GET DATA');
    dispatch({
      type: 'User_login_Getdata',
      usersData: json.data,
      isError: false,
    });
  } catch (e) {
    console.log(e, 'GETDATA response error');
  }
};

export default LoginGetdata;
