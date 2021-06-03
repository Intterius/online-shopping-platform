import React, {useEffect, useState} from 'react';
import Card from '../Card';
import {Divider, makeStyles, Typography} from '@material-ui/core';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import {CircularProgress} from '@material-ui/core';
import {url} from '../../utils/baseUrl';
import {interceptorRequest} from "../../utils/requestInterceptor";

const useStyles = makeStyles((theme) => ({
    cardList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        margin: theme.spacing(1, 10),
    },
    cardContainer: {
        margin: theme.spacing(0.6),
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: theme.fontFamily.main,
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(2, 0),
    },
}));

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        axios
            .get(
                `${url}/products/rated?pageNumber=0&itemsPerPage=15&category=&department=`
            )
            .then((res) => {
                setLoading(false);
                setMostPopular(res.data);
            })
            .catch((err) => console.error(err));
        axios
            .get(
                `${url}/products?pageNumber=0&itemsPerPage=100&category=&department=`
            )
            .then((res) => {
                setLoading(false);
                setData(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const foodSorted = data.sort((a, b) => (a.title > b.title ? 1 : -1));

    const handleRemove = (id) => {
        interceptorRequest.delete(`${url}/products/?productId=${id}`,)
            .then(res => {
                console.log(res.data.warning, res)
            })
            .catch((err) => console.error(err));
    }


    const cardList = foodSorted.map((e) => {
        return (
            <div key={e.id} className={classes.cardContainer}>
                <Card handleRemove={handleRemove} food={e}/>
            </div>
        );
    });

    const mostPopularCardList = mostPopular.map((element) => {
        return (
            <div key={element.id} className={classes.cardContainer}>
                <Card handleRemove={handleRemove} food={element}/>
            </div>
        );
    });

    return (
        <Box>
            <Typography align='center' variant='h3' style={{paddingBottom: '15px'}}>
                Most popular
            </Typography>
            <Divider variant='middle'/>
            {loading && (
                <Box className={classes.loader}>
                    <CircularProgress/>
                </Box>
            )}
            <Box className={classes.cardList}>{mostPopularCardList}</Box>
            <Typography align='center' variant='h3' style={{paddingBottom: '15px'}}>
                Product list
            </Typography>
            <Divider variant='middle'/>
            {loading && (
                <Box className={classes.loader}>
                    <CircularProgress/>
                </Box>
            )}
            <Box className={classes.cardList}>{cardList}</Box>
        </Box>
    );
};

export default Dashboard;
