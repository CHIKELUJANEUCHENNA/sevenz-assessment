import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className="sidebar ms-4" style={{ width: '308px'}}>
      <ul className="nav flex-column">
        <li className="nav-item bg-primary d-flex my-2">
          <img style={{marginTop: '10px', paddingLeft: '5px', width: '20px', height: '20px'}} src='/images/Vector (1).png' alt='logo'/>
          <Link className="nav-link text-body-tertiary active " to="/dashboard">Dashboard</Link>
          
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector.png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Profile</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector (2).png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Service</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector (3).png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Medical Records</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector (4).png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Care wallet</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector (5).png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Messages</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector (6).png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Resources</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector (7).png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Account setting</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector 7.png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">Contact support</a>
        </li>
        <li className="nav-item d-flex my-2">
        <img style={{marginTop: '10px', width: '20px', height: '20px'}} src='/images/Vector.png' alt='logo'/>
          <a className="nav-link text-body-tertiary" href="/dashboard">logout</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;