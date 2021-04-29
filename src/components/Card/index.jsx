import React, {useState} from 'react';
import Button from "../Button";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: "black",
    },
    cartContainer: {
        width: "180px",
        height: "340px",
        border: "1px solid #E3E5E4",
        padding: "10px",
        borderRadius: "8px"
    },
    cartImgContainer: {
        display: "flex",
        width: "100%",
        height: "130px",
    },
    cartImgContainerImg:{
        width: "100%",
        objectFit: "contain"

    },
    cartName:{
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Roboto', sans-serif"
    },
    cartNameP:{
        fontWeight: "bold",
        fontSize: "24px",
        margin: "5px 0",
        textTransform: "capitalize"
    },
    cartPriceP:{
        color: "#85C645",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "5px 0"
    }
})

const Card = ({food}) => {
    const [rating, setRating] = useState(food.rating)
    const classes = useStyles();

    return (
        <div className={classes.cartContainer}>
            <div className={classes.cartImgContainer}>
                <img src={food.picture} className={classes.cartImgContainerImg} alt="here should be apple"/>
            </div>
            <div className={classes.cartName}>
                <p className={classes.cartNameP}>{food.name}</p>
            </div>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating className={classes.root} name="read-only" value={rating} max={6} readOnly precision={0.25}/>
                </Box>
            </div>
            <div className={classes.cartName}>
                <p className={classes.cartPriceP}>${food.price}</p>
            </div>
            <Button/>
        </div>
    );
}

export default Card;
