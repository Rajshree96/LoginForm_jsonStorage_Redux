import axios from 'axios';

const getUser = () => async (dispatch) => {
  try {
    const json = await axios.get('http://localhost:3000/users');
    console.log(json, 'JSON RESPONESE USER GET DATA');
    dispatch({
      type: 'Get_user_data',
      usersData: json.data,
    });
  } catch (e) {
    console.log(e, 'GETDATA response error');
  }
};

export default getUser;
