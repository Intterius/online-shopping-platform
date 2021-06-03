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

const ProductCategory = () => {
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [category, setCategory] = useState(product.category);
    const [incorrect, setIncorrect] = useState(false);

    useEffect(() => {
        if (category.length <= 2 || category.length > 15) {
            setIncorrect(true);
        } else {
            setIncorrect(false)
        }
    }, [category]);

    useEffect(() => {
        setCategory(product.category)
    }, [product])

    const handleInput = (input) => {
        setCategory(input);
        setProduct({...product, category: input})
    }

    return (
        <Box className={classes.container}>
            <form className={classes.root}>
                <TextField error={incorrect} onChange={(e) => handleInput(e.target.value)} label="Category"
                           variant="outlined"
                           helperText={incorrect ? "Category should have form 3 to 15 characters" : ""}
                           value={category}/>
            </form>
        </Box>
    );
}

export default ProductCategory;
