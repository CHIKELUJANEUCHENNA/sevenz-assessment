import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 ">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active px-2">
            <a className="nav-link text-primary" href="/dashboard">Take a tour</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="/dashboard"><img src='/images/notification.png' alt='notification' /></a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="/dashboard"><img src='/images/Vector.png' alt='vector' /></a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="/dashboard"><img src='/images/ellipse.png' alt='' /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
