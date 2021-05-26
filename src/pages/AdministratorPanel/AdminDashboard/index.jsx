
import React, { useEffect, useState } from 'react';
import { CircularProgress, Box, makeStyles } from '@material-ui/core';
import DashboardHeader from '../../../components/DashboardHeader';
import DescriptiveAccountHeader from '../../../components/DescriptiveAccountHeader';
import { url } from '../../../utils/baseUrl';
import { interceptorRequest } from '../../../utils/requestInterceptor';
import DashboardProducts from './DashboardProducts';
import UserDashboard from './UserDashboard';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(20),
  },
  dashboard: {
    height: theme.spacing(50),
    width: theme.spacing(100),
    margin: theme.spacing(10, 'auto'),
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();
  const [popularProducts, setPopularProducts] = useState(['']);
  const [unpopularProducts, setUnpopularProducts] = useState(['']);
  const [userList, setUserList] = useState(['']);
  
    useEffect(() => {
        interceptorRequest
            .get(
                `${url}/admin/popularProducts?orderDesc=true`
            )
            .then((res) => {
                let popular = [...res.data];
                let unpopular = [...res.data];
                setPopularProducts(popular.splice(0, 10));
                setUnpopularProducts(unpopular.splice(-10))
            })
            .catch((err) => console.error(err));
        interceptorRequest
            .get(
                `${url}/admin/users`
            )
            .then((res) => {
               setUserList(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title='Dashboards' />
      {!popularProducts[0] && (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
      {popularProducts[0] && (
        <Box className={classes.dashboard}>
          <DashboardProducts
            products={popularProducts}
            title='Most popular products'
          />
        </Box>
      )}
      {!unpopularProducts[0] && (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
      {unpopularProducts[0] && (
        <Box className={classes.dashboard}>
          <DashboardProducts
            products={unpopularProducts}
            title='Less popular products'
          />
        </Box>
      )}
      {!userList[0] && (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
      {userList[0] && (
        <Box className={classes.dashboard}>
          <UserDashboard userList={userList} title='Users creation statistic' />
        </Box>
      )}
    </>
  );
};

export default AdminDashboard;
