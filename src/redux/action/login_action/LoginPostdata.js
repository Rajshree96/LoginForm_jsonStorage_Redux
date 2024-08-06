import axios from 'axios';

const LoginPostdata = (udata) => async (dispatch) => {
  // eslint-disable-next-line no-console
  console.log({ udata }, '-------');

  localStorage.setItem('name', udata.name);
  localStorage.setItem('password', udata.password);

  const json = await axios.post('http://localhost:3000/loginData', udata);
  console.log(json, 'json data in action');
  dispatch({
    type: 'User_login_Postdata',
    payload: json?.data,
  });
};

export default LoginPostdata;
