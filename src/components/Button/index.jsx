import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    buttonContainer:{
        width: "125px",
        height: "40px",
        margin: "auto",
        marginTop: "20px"
    },
    btnAddToCart:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        borderRadius: "25px",
        backgroundColor: "#85C645",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "18px",
        cursor: "pointer",
        '&:hover':{
            backgroundColor: "#FF6600",
            transition: "1s"
        },
        '&:active':{
            transform: "scale(0.9)",
            transition: "none"
        }
    }
});

const Button = () => {
    const classes = useStyles();

    return (
        <div className={classes.buttonContainer}>
            <div className={classes.btnAddToCart}>Add to cart</div>
        </div>
    );
}

export default Button;
