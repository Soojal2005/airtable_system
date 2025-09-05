import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-table me-2"></i>
          Airtable Form Builder
        </Link>
        
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            <i className="fas fa-home me-1"></i> Dashboard
          </Link>
          <Link className="nav-link" to="/create">
            <i className="fas fa-plus-circle me-1"></i> Create Form
          </Link>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i className="fas fa-user me-1"></i> {user?.name}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button className="dropdown-item" onClick={onLogout}>
                  <i className="fas fa-sign-out-alt me-1"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;