import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import Login from "../../assets/images/login-vectorr.png";
import './Loginpage.css'
const Loginpage = () => {
  return (
    <div className="layout-container login-page">
      <div className='container-fluid h-100'>
        <div className='row align-items-center justify-content-center h-100'>
          <div className='col-xl-4 col-lg-5 col-md-5 d-none d-md-block'>
            <div className='d-flex align-items-center justify-content-center'>
              <img
                src={Login}
                className='img-fluid'
                width='400' />
            </div>
          </div>
          <div className='col-xl-4 col-lg-5 col-md-5 col-sm-7 ps-4'>
            <TabView>
              <TabPanel header="Login">
                <div className='card login-card p-4'>
                  <form className="form-signin align-self-center w-100">
                    <div className="form-label-group  mb-3">
                      <label for="inputEmail" className="mb-2 label-font text-white fs-14">Organization URL</label>
                      <div className="input-group ">
                        <div className="input-group-prepend w-70">
                          <button className="btn  w-100 p-0" type="button" aria-haspopup="true" aria-expanded="false">
                            <input type='text' className='form-control form-control-sm org-input' placeholder='eg: my-team'></input>
                          </button>
                        </div>
                        <div className='form-control form-control-sm d-flex align-items-center'>
                          <span type="text" readOnly>lotuswireless.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-label-group mb-3">
                      <label for="inputEmail" className="mb-2 label-font text-white fs-14">Email address</label>
                      <div className="">
                        <input type="email" id="inputEmail"
                          className="form-control form-control-sm form-control-edit p-rel input-form"
                          placeholder="Email" required="" />
                      </div>
                    </div>
                    <div className="form-label-group mb-2">
                      <label for="inputPassword" className="mb-2 label-font text-white fs-14">Password</label>
                      <div className="p-rel">
                        <input type='password' id="inputPassword"
                          className="form-control form-control-sm form-control-edit  input-form"
                          placeholder="Password" required="" />

                        <span className="view-icon">
                          {/* <i className="far fa-eye-slash fs-12"></i> */}
                          <i className="far fa-eye fs-12"></i>
                        </span>
                      </div>
                    </div>
                    <div className="text-end">
                      <div className="c-pointer text-warning">
                        <label className="label-font c-pointer forgot-font text-white"> Forgot Password?
                        </label>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn login-btn btn-sm w-100" type="submit">Log
                        in</button>
                      {/* <button className="btn  disabled sign-in-btn" type="button">
                <i className="fas fa-spinner fa-spin"></i> Log in
              </button> */}
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center mt-3'>
                  <div className='d-flex'>
                    <span>Don't have an account?</span>
                    <a className='ps-1' href='/Createaccount'>Sign Up</a>
                  </div>
                  <a className='ps-1' href=''>Login in with Another Account</a>
                </div> */}
                  </form>
                </div>
              </TabPanel>
              <TabPanel header="Sign Up">
                <div className='card login-card p-3'>
                  <form className="form-signin align-self-center w-100">

                    <div className="form-label-group mb-3">
                      <label for="orgname" className="mb-2 label-font text-white fs-14">Organization Name</label>
                      <div className="">
                        <input type="text" id="orgname"
                          className="form-control form-control-sm form-control-edit p-rel input-form"
                          placeholder="Organization Name" required="" />
                      </div>
                    </div>
                    <div className="form-label-group mb-3">
                      <label for="name" className="mb-2 label-font text-white fs-14">Your Name</label>
                      <div className="">
                        <input type="text" id="name"
                          className="form-control form-control-sm form-control-edit p-rel input-form"
                          placeholder="Your Name" required="" />
                      </div>
                    </div>
                    <div className="form-label-group mb-3">
                      <label for="inputEmail" className="mb-2 label-font text-white fs-14">Email address</label>
                      <div className="">
                        <input type="email" id="inputEmail"
                          className="form-control form-control-sm form-control-edit p-rel input-form"
                          placeholder="Email" required="" />
                      </div>
                    </div>
                    <div className="form-label-group mb-4">
                      <label for="inputPassword" className="mb-2 label-font text-white fs-14">Password</label>
                      <div className="p-rel">
                        <input type='password' id="inputPassword"
                          className="form-control form-control-sm form-control-edit  input-form"
                          placeholder="Password" required="" />

                        <span className="view-icon">
                          {/* <i className="far fa-eye-slash fs-12"></i> */}
                          <i className="far fa-eye fs-12"></i>
                        </span>
                      </div>
                    </div>

                    <div className="text-center mb-3">
                      <button className="btn  btn-sm login-btn w-100" type="submit">Sign
                        in</button>
                      {/* <button className="btn  disabled sign-in-btn" type="button">
                    <i className="fas fa-spinner fa-spin"></i> Sign in
                  </button> */}
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex'>
                                        <div>Already have an account?<a className='ps-1' href='/Loginpage'>Log in</a></div> 
                                    </div>
                                 
                                </div> */}
                  </form>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage