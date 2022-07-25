import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          About
        </NavLink>
        <NavLink
          to='/products'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default StyledNavbar;

//  style={({ isActive }) => {return {color: isActive ? 'red' : 'green',};}}
