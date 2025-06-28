// frontend/src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '1rem', background: '#111', color: '#fff' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>
          Home
        </Link>
        <Link to="/about" style={{ color: 'white' }}>
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
