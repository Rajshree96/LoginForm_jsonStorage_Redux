/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import addUser from '../redux/action/adduser_action/addUser';
import getByIdData from '../redux/action/update_action/getByIdData';
import updateUser from '../redux/action/update_action/updateUser';

function AddUser() {
  const dispatch = useDispatch(); // using redux to send data
  const navigate = useNavigate(); // on form submit redirect to lanoither page
  const param = useParams();
  // console.log(param.id, '---useparam');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const iddata = useSelector((state) => state?.loginReducer?.getbyidData);

  // setName(iddata?.name);
  //     setPassword(iddata?.password);
  //     setContact(iddata?.contact);
  //     setAddress(iddata?.address);

  useEffect(() => {
    setName(iddata?.name);
    setPassword(iddata?.password);
    setContact(iddata?.contact);
    setAddress(iddata?.address);
  }, [iddata]);

  useEffect(() => {
    if (param.id) {
      dispatch(getByIdData(param.id));
    }
  }, [param.id]);

  const payload = {
    name,
    password,
    contact,
    address,
  };

  const submitFormData = (e) => {
    e.preventDefault();

    if (param.id) {
      dispatch(updateUser(param.id, {
        name, password, contact, address,
      }));
    } else {
      dispatch(addUser(payload));
    }
    navigate('/user-details');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 AddUser-box">
          <div className="col-lg-12 login-title">{param?.id ? 'Edit user' : 'Add New user' }</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">

              <form onSubmit={submitFormData}>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
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
                    id="password"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-control-label">CONTACT</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="contact"
                    placeholder="enter contact"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-control-label">ADDRESS</label>
                  <input
                    className="form-control"
                    type="textarea"
                    id="address"
                    placeholder="enter address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* <!-- Error Message --> */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    {param?.id ? (
                      <button type="submit" className="btn btn-outline-primary">
                        Update
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-outline-primary">
                        Publish
                      </button>
                    ) }
                    {/* <button type="submit" className="btn btn-outline-primary">
                      Publish
                    </button> */}
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

export default AddUser; // Exported in app component
