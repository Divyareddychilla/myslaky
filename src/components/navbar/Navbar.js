import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-bg w-100">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <div className='logo-bg'><i className="fas fa-sitemap fs-12 text-white "></i></div><div className='ps-2 fs-20 text-white'>Slaky</div>
          </a>
          <div className='org-name me-3'>
            Lotus Wireless
          </div>
          {/* <div className='dropdown'>
            <button className='btn ellipsis-btn' type='button' >
                <i class="fas fa-ellipsis-h"></i>
            </button>
       
          </div> */}
          </div>
          <div className='d-flex align-items-center'>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav topbar">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"><i className="fas fa-home icon-color"></i></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-cube icon-color"></i></a>
                  <ul className="dropdown-menu">
                  <li><a className="dropdown-item">
                    <a className='d-flex align-items-center'>
                      <span><i class="fas fa-users"></i></span>
                      <span className='ms-2'>Teams</span>
                    </a>
                     </a></li>
                  <li><a className="dropdown-item">
                  <a className='d-flex align-items-center'>
                      <span><i class="fas fa-cog"></i></span>
                      <span className='ms-2'>User Management</span>
                    </a>
                    </a></li>
                  {/* <li><a className="dropdown-item">
                  <a className='d-flex align-items-center'>
                      <span><i class="fas fa-trash-alt"></i></span>
                      <span className='ms-2'>SArchive/Trash</span>
                    </a></a></li> */}
                </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="far fa-star icon-color"></i>
                    {/* <i className="fas fa-star icon-color"></i> */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-bell icon-color"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    <i className="fas fa-user-plus icon-color"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">
                    <i className="far fa-question-circle icon-color"></i>
                  </a>
                </li>
              </ul>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='topnav-right'>
              <div>
                <button className='btn theme-btn' type='button'>
                <i class="far fa-moon icon-color"></i>
                {/* <i className="fas fa-adjust icon-color fs-16"></i> */}
                </button>
              </div>
              <div className='dropdown'>
                <button type='button' className='btn profile-btn' data-bs-toggle="dropdown">P</button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar