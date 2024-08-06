/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPostdata from '../redux/action/login_action/LoginPostdata';

function Login() {
  const dispatch = useDispatch(); // using redux to send data
  const navigate = useNavigate(); // on form submit redirect to lanoither page

  // login form, fields
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const payload = {
    name,
    password,
  };

  const submitFormData = (e) => {
    e.preventDefault();

    dispatch(LoginPostdata(payload));

    // Local sTorage Data
    const Name = payload.name;
    const Password = payload.password;

    if (payload.name === Name && payload.password === Password) {
      navigate('/dashboard');
      console.log('wlcm to loged user');
    } else {
      document.write('failed to login please try again');
      console.log('failed to login please try again');
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title">Login</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">

              <form onSubmit={submitFormData}>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* <!-- Error Message --> */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>
  );
}

export default Login; // Exported in app component
