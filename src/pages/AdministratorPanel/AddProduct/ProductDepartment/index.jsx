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

const ProductDepartment = ()=>{
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [department, setDepartment] = useState(product.department);

    useEffect(()=>{
        setDepartment(product.department);
    },[product]);

    const handleInput =(input)=>{
        if(/^[a-zA-Z]{1,15}$/.test(input)){
            setDepartment(input);
            setProduct({...product, department: input})
        }
    }

    return(
        <Box className={classes.container}>
            <Typography className={classes.text}>Please set department</Typography>
            <TextField onChange={(e)=>handleInput(e.target.value)} variant="standard" value={department}/>
        </Box>
    );
}

export default ProductDepartment;
