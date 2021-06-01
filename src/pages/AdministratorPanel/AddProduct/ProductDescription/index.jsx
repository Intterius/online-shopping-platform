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
        if(/(^[a-zA-Z0-9 ]{1,700}$)/.test(input)){
            setDescription(input);
            setProduct({...product, description: input});
        }
    }

    return(
        <Box className={classes.container}>
            <Typography>Please set description</Typography>
            <TextField fullWidth={true} multiline={true} onChange={(e)=>handleInput(e.target.value)} variant="standard" value={description}/>
        </Box>
    );
}

export default ProductDescription;
