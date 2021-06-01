import React, {useContext, useEffect, useState} from "react";
import {Box, makeStyles} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme) => ({
    sizeVariant: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "normal",
        width: "80%",
    },
    sizeBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #E5E5E5",
        height: theme.spacing(3.7),
        width: "auto",
        marginLeft: theme.spacing(2),
        fontSize: theme.spacing(2.5),
        cursor: "pointer",
        padding: theme.spacing(0, 1)
    },
    selected: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #85C645",
        height: theme.spacing(3.7),
        width: "auto",
        marginLeft: theme.spacing(2),
        fontSize: theme.spacing(2.5),
        cursor: "pointer",
        padding: theme.spacing(0, 1)
    },
}))

const MeasureUnit = () => {
    const classes = useStyles();
    const {product, setProduct} = useContext(AppContext);
    const [measureUnit, setMeasureUnit] = useState(product.measureUnit);

    useEffect(()=>{
        setMeasureUnit(product.measureUnit)
    },[product]);

    return (
        <Box className={classes.sizeVariant}>
            <Box onClick={() => {
                setMeasureUnit("kg");
                setProduct({...product, measureUnit: "kg"})
            }
            } className={(measureUnit === "kg") ? classes.selected : classes.sizeBox}>kg</Box>
            <Box onClick={() => {
                setMeasureUnit("pack");
                setProduct({...product, measureUnit: 'pack'});
            }
            } className={(measureUnit === "pack") ? classes.selected : classes.sizeBox}>pack</Box>
        </Box>
    );
}

export default MeasureUnit;
