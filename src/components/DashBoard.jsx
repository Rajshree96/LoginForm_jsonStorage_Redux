import React from 'react';
import { useSelector } from 'react-redux';
// import UserDetails from './UserDetails';

function DashBoard() {
  const list = useSelector((state) => state?.loginReducer?.login_postList);

  // eslint-disable-next-line no-console
  console.log(list, 'list data');
  return (
    <>

      <div className="container">
        <div className="user_info shadow-lg p-3 mb-5 bg-white rounded">

          <h1 className="heading-title text-center py-3">
            Welcome
            <span> </span>
            <span className="text-success">{list?.name}</span>
            <span> </span>
            You Are Logged
          </h1>
        </div>
        <div className="dashboardBox">
          <div className="user_info shadow-lg p-3 mb-5 bg-white rounded">
            <h1 className="heading-title text-center py-3">

              <a className="dashboard-link" href="/login-details">
                Login Details
              </a>
            </h1>
          </div>

          <div className="user_info shadow-lg p-3 mb-5 bg-white rounded">
            <h1 className="heading-title text-center py-3">

              <a className="dashboard-link" href="/user-details">
                User Details
              </a>
            </h1>
          </div>
        </div>
      </div>
      {/* <UserDetails /> */}

    </>
  );
}

export default DashBoard;
