import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme)=>({
    container:{
        width: "auto",
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    text:{
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

const ProductQuantityInStock = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [quantity, setQuantity] = useState(product.quantityInStock);
    const [incorrect, setIncorrect] = useState(false);

    useEffect(()=>{
        if(quantity<0 || quantity>999){
            setIncorrect(true);
        }else{
            setIncorrect(false)
        }
    },[quantity])

    useEffect(()=>{
        setQuantity(product.quantityInStock)
    },[product])

    const handleInput =(input)=>{
        if(/^\d{0,999}$/.test(input)){
            setQuantity(input);
            setProduct({...product, quantityInStock: Number(input)});
        }
    }

    return(
        <Box className={classes.container}>
            <form className={classes.root}>
                <TextField error={incorrect} label="Quantity in stock" onChange={(e)=>handleInput(e.target.value)}
                           helperText={incorrect ? "Quantity should be form 0 to 999 characters" : ""}
                           variant="outlined" value={quantity}/>
            </form>
        </Box>
    );
}

export default ProductQuantityInStock;
