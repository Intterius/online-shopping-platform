import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    text: {
        fontSize: theme.spacing(3),
        fontWeight: "bold"
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(30),
        },
    }
}))

const ProductPrice = () => {
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [price, setPrice] = useState(product.price);

    useEffect(() => {
        setPrice(product.price);
    }, [product])

    useEffect(() => {
        if (price > 9999) {
            setPrice(9999)
        }
        if (price < 0.1) {
            setPrice(0.1)
        }

    }, [price])

    const handleInput = (input) => {
        const result = Number(input);
        setPrice(result);
        setProduct({...product, price: parseFloat(result.toFixed(2))});
    }

    return (
        <Box className={classes.container}>
            <form className={classes.root}>
                <TextField type="number" label="Product price" onChange={(e) => handleInput(e.target.value)} variant="outlined"
                           value={price.toFixed(2)}/>
            </form>
        </Box>
    );
}

export default ProductPrice;
