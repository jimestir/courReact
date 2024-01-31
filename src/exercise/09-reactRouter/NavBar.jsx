import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary  bg-dark-subtle mx-3 rounded'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>UseContext</Link>

        <button className='navbar-toggler' type='button'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              {/* <a className='nav-link active' href='#'>Home</a> */}
            </li>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/Login'
            >
              Login
            </NavLink>

          </ul>
        </div>
      </div>
    </nav>
  )
}
