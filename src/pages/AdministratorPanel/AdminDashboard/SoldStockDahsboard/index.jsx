import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import {Pie} from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
    title: {
        display: "flex",
        justifyContent: "center",
        fontSize: theme.spacing(3),
    }
}));

const SoldStockDashboard = ({products, title}) => {
    const classes = useStyles();
    // const soldAmount1 = products.reduce((acc, cur) => acc + cur.soldAmount, 0);
    // const amountInStock1 = products.reduce((acc, cur) => acc + cur.quantityInStock, 0);
    let soldAmount = 0;
    let amountInStock = 0;

    for(let i=0; i<products.length; i++){
        soldAmount+=products[i].soldAmount;
        amountInStock+=products[i].quantityInStock;
    }

    const data = {
        labels: ["Products sold", "Products in stock"],
        datasets: [
            {
                label: "Created on:",
                data: [soldAmount, amountInStock],
                backgroundColor: [
                    '#FF6600',
                    '#89c74a'
                ],
                borderColor: [
                    'black',
                    'black'
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <Box>
            <Box className='header'>
                <Typography className={classes.title}>{title}</Typography>
            </Box>
            <Pie data={data}/>
        </Box>
    );
}

export default SoldStockDashboard;
