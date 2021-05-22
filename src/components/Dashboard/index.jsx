import React, {useEffect, useState} from 'react';
import Card from '../Card'
import {Divider, makeStyles, Typography} from "@material-ui/core";
import axios from "axios";
import Box from "@material-ui/core/Box";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardList: {
        display: "flex",
        flexWrap: "wrap",
        margin: theme.spacing(1, 10)
    },
    cardContainer: {
        margin: theme.spacing(0.6)
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: theme.fontFamily.main
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(2, 0)
    }
}));

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [mostPopular, setMostPopular] = useState([])
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://online-shopping-platform-back.herokuapp.com/products/rated')
            .then(res => {
                setLoading(false)
                setMostPopular(res.data)
            })
            .catch((err) => console.error(err))
        axios.get(`https://online-shopping-platform-back.herokuapp.com/products?pageNumber=0&itemsPerPage=100`)
            .then(res => {
                setLoading(false)
                setData(res.data)
            })
            .catch((err) => console.error(err))
    }, [])

    const foodSorted = data.sort((a, b) => (a.title > b.title) ? 1 : -1);
    // const mostPopular = [...data].sort((a, b) => (a.rating < b.rating) ? 1 : -1).slice(0, 15);

    const cardList = foodSorted.map((e) => {
        return (
            <div key={e.id} className={classes.cardContainer}>
                <Card food={e}/>
            </div>
        );
    });

    const mostPopularCardList = mostPopular.map((e) => {
        return (
            <div key={e.id} className={classes.cardContainer}>
                <Card food={e}/>
            </div>
        );
    });

    return (
        <Box>
            <Typography align="center" variant="h3" style={{paddingBottom: '15px'}}>Most popular</Typography>
            <Divider variant="middle"/>
            {loading &&
            <Box className={classes.loader}>
                <CircularProgress />
            </Box>
            }
            <Box className={classes.cardList}>
                {mostPopularCardList}
            </Box>
            <Typography align="center" variant="h3" style={{paddingBottom: '15px'}}>Product list</Typography>
            <Divider variant="middle"/>
            {loading &&
            <Box className={classes.loader}>
                <CircularProgress />
            </Box>
            }
            <Box className={classes.cardList}>
                {cardList}
            </Box>
        </Box>
    );
}

export default Dashboard;
