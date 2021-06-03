import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles, TextField} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "auto",
        display: "flex",
        justifyContent: "left",
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
            width: theme.spacing(66),
        },
    }
}))

const ProductDescription = () => {
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [description, setDescription] = useState(product.description);
    const [incorrect, setIncorrect] = useState(false);

    useEffect(() => {
        setDescription(product.description)
    }, [product]);

    useEffect(()=>{
        if(description.length>700 || description.length<10){
            setIncorrect(true);
        }else{
            setIncorrect(false)
        }
    },[description])

    const handleInput = (input) => {
            setDescription(input);
            setProduct({...product, description: input});
    }

    return (
        <Box className={classes.container}>
            <form className={classes.root}>
                <TextField error={incorrect} inputProps={{maxLength: 700, minLength: 11}} fullWidth={true} multiline={true}
                           onChange={(e) => handleInput(e.target.value)} label="Please set description" variant="outlined" value={description}
                           helperText={incorrect? "Description should have from 10 to 700 characters": ""}
                />
            </form>
        </Box>
    );
}

export default ProductDescription;
