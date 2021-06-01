import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme)=>({
    container:{
        width: theme.spacing(25),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    }
}))

const ProductPrice = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [price, setPrice] = useState(product.price);

    useEffect(()=>{
        setPrice(product.price);
    },[product])

    useEffect(()=>{
        if(price>9999){
            setPrice(9999)
        }
        if(price<0.5){
            setPrice(0.5)
        }
    },[price])

    const handleInput =(input)=>{
        const result = Number(input);
        setPrice(result);
        setProduct({...product, price: parseFloat(result.toFixed(2))});
    }

    return(
        <Box className={classes.container}>
            <Typography>Please set price in $</Typography>
            <TextField  type="number" onChange={(e)=>handleInput(e.target.value)} variant="standard" value={price}/>
        </Box>
    );
}

export default ProductPrice;
