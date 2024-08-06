import axios from 'axios';
import getUser from '../adduser_action/getUser';

const updateUser = (userid, dta) => async (dispatch) => {
  console.log('-----------dta----', userid, dta);
  try {
    const json = await axios.put(`http://localhost:3000/users/${userid}`, dta);
    console.log(json, 'updateUser-------------');
    dispatch({
      type: 'Update_By_ID',
      payload: json?.data,
    });
    dispatch(getUser());
  } catch (e) {
    console.log(e, 'updateUser data response error');
  }
};

export default updateUser;
