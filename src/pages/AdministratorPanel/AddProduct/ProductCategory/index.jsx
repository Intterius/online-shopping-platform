import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme)=>({
    container:{
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        flexDirection: 'column'
    },
    text:{
        fontSize: theme.spacing(3),
        fontWeight: "bold"
    }
}))

const ProductCategory = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [category, setCategory] = useState(product.category);

    useEffect(()=>{
        setCategory(product.category)
    },[product])

    const handleInput =(input)=>{
        if(/^[a-zA-Z]{1,15}$/.test(input)){
            setCategory(input);
            setProduct({...product, category: input})
        }
    }

    return(
        <Box className={classes.container}>
            <Typography className={classes.text}>Please set category</Typography>
            <TextField onChange={(e)=>handleInput(e.target.value)} variant="standard" value={category}/>
        </Box>
    );
}

export default ProductCategory;
