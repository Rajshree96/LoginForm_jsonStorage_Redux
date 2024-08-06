import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoginGetdata from '../redux/action/login_action/LoginGetdata';
import LoginRemovedata from '../redux/action/login_action/LoginRemovedata';

function LoginDetails() {
  // on form submit redirect to lanoither page
  const dispatch = useDispatch();
  const newdata = useSelector((state) => state?.loginReducer?.login_getList);

  useEffect(() => {
    console.log('useEffect calling');
    dispatch(LoginGetdata());
  }, []);

  const removeData = (userid) => {
    dispatch(LoginRemovedata(userid));
  };

  console.log('LoginGetdata', newdata);

  return (
    <>
      <h1 className="heading-title text-center py-4">Login Details</h1>

      <div className="userDetails">

        <div className="content-userdetailsy">

          <table className="table">
            <thead className="thead-userdetails">
              <tr>
                <th scope="col">id</th>
                <th scope="col">User</th>
                <th scope="col">Password</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {newdata.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td><i className="fas fa-edit" aria-hidden="true" /></td>

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
export default LoginDetails;
