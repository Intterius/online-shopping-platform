import { Link } from 'react-router-dom';
import Dashboard from "../../components/Dashboard";

const Home = () => {
  return (
    <div>
      <Link to='/account/login'>Sign In</Link>
      <Dashboard />
    </div>
  );
};

export default Home;
