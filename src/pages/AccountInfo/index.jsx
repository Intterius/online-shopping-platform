import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DashboardHeader from '../../components/DashboardHeader';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';

const AccountInfo = () => {
  const { user, status } = useSelector((state) => state.tokenReducer);
  const history = useHistory();

  useEffect(() => {
    if (!status) {
      history.push('/account/login');
    }
  }, [history, status]);

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Account'} />
      <h3>User information</h3>
      <p>Username: {user}</p>
    </>
  );
};

export default AccountInfo;
