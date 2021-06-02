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
        if(price<0.1){
            setPrice(0.1)
        }

    },[price])

    const handleInput =(input)=>{
        if (input[0] === '0' && input[1] === '0') {
            console.log("here")
            let result = [...input];
            result.shift();
            result.shift();
            let finalResult = Number(result.join(''));
            console.log(finalResult, price);
            return setPrice(finalResult);
        }
        if (input[1] === '0' && input[2] === '.') {
            console.log("second")
            let result = [...input];
            result.shift();
            let finalResult = Number(result.join(''));
            console.log(finalResult, price);
            return setPrice(finalResult);
        }
        const result = Number(input);
        console.log("ajunge")
        setPrice(result);
        setProduct({...product, price: parseFloat(result.toFixed(2))});
    }

    return(
        <Box className={classes.container}>
            <Typography className={classes.text}>Please set price in $</Typography>
            <TextField type="number" onChange={(e)=>handleInput(e.target.value)} variant="standard" value={price.toFixed(2)}/>
        </Box>
    );
}

export default ProductPrice;
