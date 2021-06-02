import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme)=>({
    container:{
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    text:{
        fontSize: theme.spacing(3),
        fontWeight: "bold"
    }
}))

const ProductQuantityInStock = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [quantity, setQuantity] = useState(product.quantityInStock);

    useEffect(()=>{
        setQuantity(product.quantityInStock)
    },[product])

    useEffect(()=>{
        if(quantity>9999){
            setQuantity(9999)
        }
        if(quantity<1){
            setQuantity(1)
        }
    },[quantity])

    const handleInput =(input)=>{
        const result = Number(input);
        setQuantity(result);
        setProduct({...product, quantityInStock: parseFloat(result.toFixed(2))});
    }

    return(
        <Box className={classes.container}>
            <Typography className={classes.text}>Please set quantity in stock</Typography>
            <TextField  type="number" onChange={(e)=>handleInput(e.target.value)} variant="standard" value={quantity}/>
        </Box>
    );
}

export default ProductQuantityInStock;
