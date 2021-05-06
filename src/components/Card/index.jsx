import React from 'react';
import Button from "../Button";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    root: {
        color: theme.palette.rating.main,
        fontSize: theme.spacing(2),
        display: "flex",
        justifyContent: 'center'
    },
    cartContainer: {
        width: theme.spacing(22.5),
        height: theme.spacing(42.5),
        border: "1px solid #E3E5E4",
        padding: theme.spacing(1.2),
        borderRadius: theme.spacing(1),
        '&:hover':{
            border: '1px solid #85C645',
            transition: '0.5s'
        }

    },
    cartImgContainer: {
        display: "flex",
        width: "100%",
        height: theme.spacing(16.25),
    },
    cartImgContainerImg:{
        width: "100%",
        objectFit: "contain"

    },
    cartName:{
        display: "flex",
        justifyContent: "center",
        fontFamily: theme.fontFamily.main
    },
    cartNameP:{
        fontWeight: "bold",
        fontSize: theme.spacing(3),
        textTransform: "capitalize",
        margin: theme.spacing(0.6, 0)
    },
    cartPriceP:{
        color: "#85C645",
        fontSize: theme.spacing(2.5),
        fontWeight: "bold",
        margin: theme.spacing(0.6, 0)
    }
}))

const Card = ({food}) => {
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
                    <Rating className={classes.root} name="read-only" value={food.rating} max={5} readOnly precision={0.25}/>
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
