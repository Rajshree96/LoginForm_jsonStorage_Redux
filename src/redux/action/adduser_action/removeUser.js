import axios from 'axios';
import getUser from './getUser';

const removeUser = (userid) => async (dispatch) => {
  dispatch({
    type: 'Added_User_Data_Remove',
  });
  try {
    const json = await axios.delete(`http://localhost:3000/users/${userid}`);
    console.log(json, 'Remove RES DATA ');
    dispatch({
      type: 'Added_User_Data_Remove',
      usersid: json.data,
    });
    dispatch(getUser());
    console.log(userid, 'id res');
  } catch (e) {
    console.log(e, 'remove added data');
  }
};

export default removeUser;
