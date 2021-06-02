import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme)=>({
    container:{
        width: theme.spacing(25),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        flexDirection: 'column'
    }
}))

const ProductTitle = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [title, setTitle] = useState(product.title)

    useEffect(()=>{
        setTitle(product.title)
    },[product])

    const handleInput =(input)=>{
        if(/^[a-zA-Z]{1,15}$/.test(input)){
            setTitle(input);
            setProduct({...product, title: input})
        }
    }

    return(
        <Box className={classes.container}>
            <Typography>Please set title</Typography>
            <TextField onChange={(e)=>handleInput(e.target.value)} variant="standard" value={title}/>
        </Box>
    );
}

export default ProductTitle;
