import React from 'react';
import food from '../../food'
import Card from '../Card'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    cardList: {
        display: "flex",
        flexWrap: "wrap"
    },
    cardContainer: {
        margin: theme.spacing(0.6)
    }
}));

const foodSorted = food.sort((a, b) => (a.name > b.name) ? 1 : -1);
const mostPopular = [...food].sort((a, b) => (a.rating < b.rating) ? 1 : -1);

mostPopular.splice(15)

const Dashboard = () => {
    const classes = useStyles();

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
        <div>
            <h1>Product list</h1>
            <hr/>
            <div className={classes.cardList}>
                {cardList}
            </div>
            <h1>Most popular</h1>
            <hr/>
            <div className={classes.cardList}>
                {mostPopularCardList}
            </div>
        </div>
    );
}

export default Dashboard;
