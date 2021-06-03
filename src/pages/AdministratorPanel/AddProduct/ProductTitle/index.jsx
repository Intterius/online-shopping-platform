import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        flexDirection: 'column'
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

const ProductTitle = () => {
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [title, setTitle] = useState(product.title);
    const [incorrect, setIncorrect] = useState(false);

    useEffect(()=>{
        if(title.length <= 0 || title.length>15){
            setIncorrect(true);
        }else{
            setIncorrect(false)
        }
    },[title]);

    useEffect(() => {
        setTitle(product.title)
    }, [product])

    const handleInput = (input) => {
        setTitle(input);
        setProduct({...product, title: input})
    };

    return (
        <Box className={classes.container}>
            <form className={classes.root}>
                <TextField error={incorrect} onChange={(e) => handleInput(e.target.value)} label="Title" variant="outlined"
                           helperText={incorrect? "Title should have form 1 to 15 characters": ""}
                           value={title}/>
            </form>
        </Box>
    );
}

export default ProductTitle;
