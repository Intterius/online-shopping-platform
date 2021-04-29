import { Link } from 'react-router-dom';
import DescriptiveAccountHeader from '../DescriptiveAccountHeader';
const NotFound = () => {
  return (
    <>
      <DescriptiveAccountHeader title={'404 Not Found'} />
      Not found, go to <Link to='/home'>home</Link>
    </>
  );
};

export default NotFound;
