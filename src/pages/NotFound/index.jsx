import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import { useStyles } from './styles';
import DashboardHeader from '../../components/DashboardHeader';

const NotFound = () => {
  const classes = useStyles();

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'404 Not Found'} />
      <Box display='grid' className={classes.notFoundBox}>
        <h1 className={classes.title}>404 Page Not Found</h1>
        <p className={classes.description}>
          The page you requested does not exist. Click{' '}
          <span>
            <Link className={classes.linkBtn} to={'/home'}>
              here
            </Link>
          </span>{' '}
          to continue shopping.
        </p>
      </Box>
    </>
  );
};

export default NotFound;
