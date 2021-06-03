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

const ProductDepartment = () => {
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [department, setDepartment] = useState(product.department);
    const [incorrect, setIncorrect] = useState(false);

    useEffect(() => {
        if (department.length <= 0 || department.length > 15) {
            setIncorrect(true);
        } else {
            setIncorrect(false)
        }
    }, [department]);

    useEffect(() => {
        setDepartment(product.department);
    }, [product]);

    const handleInput = (input) => {
        setDepartment(input);
        setProduct({...product, department: input})
    }

    return (
        <Box className={classes.container}>
            <form className={classes.root}>
                <TextField error={incorrect} onChange={(e) => handleInput(e.target.value)}  label="Department" variant="outlined"
                           helperText={incorrect? "Department should have form 1 to 15 characters": ""}
                           value={department}/>
            </form>
        </Box>
    );
}

export default ProductDepartment;
