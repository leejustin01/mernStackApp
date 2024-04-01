import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
       <Link to="/">Home</Link>
       <br></br>
       <Link to="/create">Create</Link>
       <br></br>
    </nav>
  );
}

export default Navigation;