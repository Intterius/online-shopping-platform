import React, {useEffect, useState} from 'react';
import {CircularProgress, Box, makeStyles} from '@material-ui/core';
import DashboardHeader from '../../../components/DashboardHeader';
import DescriptiveAccountHeader from '../../../components/DescriptiveAccountHeader';
import {url} from '../../../utils/baseUrl';
import {interceptorRequest} from '../../../utils/requestInterceptor';
import DashboardProducts from './DashboardProducts';
import UserDashboard from './UserDashboard';
import SoldStockDashboard from "./SoldStockDahsboard";

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
    userChart: {
        height: theme.spacing(50),
        width: theme.spacing(50),
        margin: theme.spacing(10, 'auto'),
    },
    chartsContainer:{
        display: "flex",
        flexWrap: "wrap",
        margin: theme.spacing(4),

    }
}));

const AdminDashboard = () => {
    const classes = useStyles();
    const [popularProducts, setPopularProducts] = useState(['']);
    const [unpopularProducts, setUnpopularProducts] = useState(['']);
    const [productList, setProductList] = useState([''])
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
                setUnpopularProducts(unpopular.splice(-10));
                setProductList(res.data);
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
            <DashboardHeader/>
            <DescriptiveAccountHeader title='Dashboards'/>
            <Box className={classes.chartsContainer}>
                {!popularProducts[0] && (
                    <Box className={classes.loader}>
                        <CircularProgress/>
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
                {!productList[0] && (
                    <Box className={classes.loader}>
                        <CircularProgress/>
                    </Box>
                )}
                {productList[0] && (
                    <Box className={classes.userChart}>
                        <SoldStockDashboard
                            products={productList}
                            title='Sold vs stock amount'
                        />
                    </Box>
                )}
                {!unpopularProducts[0] && (
                    <Box className={classes.loader}>
                        <CircularProgress/>
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
                        <CircularProgress/>
                    </Box>
                )}
                {userList[0] && (
                    <Box className={classes.userChart}>
                        <UserDashboard userList={userList} title='Users creation statistic'/>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default AdminDashboard;
