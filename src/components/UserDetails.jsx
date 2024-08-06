import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getUser from '../redux/action/adduser_action/getUser';
import removeUser from '../redux/action/adduser_action/removeUser';

function UserDetails() {
  const dispatch = useDispatch();
  const [userlist, setUserList] = useState([]);
  const adduserdata = useSelector((state) => state?.loginReducer?.getUserList);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log('useEffect calling');
    dispatch(getUser());
  }, []);

  useEffect(() => {
    // console.log('useEffect calling');
    setUserList(adduserdata);
  }, [adduserdata]);

  const removeData = (userid) => {
    dispatch(removeUser(userid));
  };

  const editData = (userid) => {
    navigate(`/adduser/${userid}`);
  };

  const adduserhandler = () => {
    navigate('/adduser');
  };

  return (
    <>
      <h1 className="heading-title text-center py-4">Added User Details</h1>
      <div className="addnewuser">
        <button type="button" className="btn btn-primary" onClick={adduserhandler}>Add New User</button>
      </div>
      <div className="userDetails">

        <div className="content-userdetailsy">

          <table className="table">
            <thead className="thead-userdetails">
              <tr>
                <th scope="col">id</th>
                <th scope="col">User</th>
                <th scope="col">Password</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {userlist?.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>{user.contact}</td>
                  <td>{user.address}</td>
                  <td><i className="fas fa-edit" aria-hidden="true" onClick={() => editData(user.id)} /></td>

                  <td><i className="fas fa-trash" aria-hidden="true" onClick={() => removeData(user.id)} /></td>
                </tr>
              </tbody>
            ))}
          </table>

        </div>
      </div>

    </>
  );
}
export default UserDetails;
