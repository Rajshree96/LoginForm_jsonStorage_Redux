import axios from 'axios';

const getByIdData = (userid) => async (dispatch) => {
  try {
    const json = await axios.get(`http://localhost:3000/users/${userid}`);
    console.log(json, 'get by id data');
    dispatch({
      type: 'Get_By_ID',
      payload: json?.data,
    });
  } catch (e) {
    console.log(e, 'GETDATA response error');
  }
};

export default getByIdData;
