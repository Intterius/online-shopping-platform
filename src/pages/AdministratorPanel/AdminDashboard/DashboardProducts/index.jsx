import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        display: "flex",
        justifyContent: "center",
        fontSize: theme.spacing(3),
    }
}));

const DashboardProducts = ({products, title}) => {
    const classes = useStyles();
    const labels = [];
    const soldAmount = [];
    const timesSold = [];
    const quantityInStock = [];
    for (let i = 0; i < products.length; i++) {
        labels.push(products[i].productName);
        soldAmount.push(products[i].soldAmount);
        timesSold.push(products[i].timesSold);
        quantityInStock.push(products[i].quantityInStock);
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Sold amount',
                data: soldAmount,
                backgroundColor: '#FF6600',
            },
            {
                label: 'Times sold',
                data: timesSold,
                backgroundColor: 'black',
            },
            {
                label: 'Quantity in stock',
                data: quantityInStock,
                backgroundColor: '#89c74a',
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>
            <Box className='header'>
                <Typography className={classes.title}>{title}</Typography>
            </Box>
            <Bar data={data} options={options}/>
        </>
    );
}

export default DashboardProducts;

