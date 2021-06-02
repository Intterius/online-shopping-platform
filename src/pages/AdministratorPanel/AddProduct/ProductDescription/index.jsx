import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme)=>({
    container:{
        width: theme.spacing(80),
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

const ProductDescription = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [description, setDescription] = useState(product.description);

    useEffect(()=>{
        setDescription(product.description)
    },[product]);

    const handleInput =(input)=>{
        console.log(input)
        if(/(^[a-zA-Z0-9?]{1,1000}$)/.test(input)){
            console.log("here")
            setDescription(input);
            setProduct({...product, description: input});
        }
    }

    return(
        <Box className={classes.container}>
            <Typography className={classes.text}>Please set description</Typography>
            <TextField fullWidth={true} multiline={true} onChange={(e)=>handleInput(e.target.value)} variant="standard" value={description}/>
        </Box>
    );
}

export default ProductDescription;
