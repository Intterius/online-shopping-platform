import React, {useState} from 'react';
import './style.css';
import Button from "../Button";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: "black"
    }
})

const Card = ({food}) => {
    const [rating, setRating] = useState(food.rating)
    const classes = useStyles();

    return (
        <div className='cart-container'>
            <div className="cart-img-container">
                <img src={food.picture} alt="here should be apple"/>
            </div>
            <div className='cart-name'>
                <p>{food.name}</p>
            </div>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating className={classes.root} name="read-only" value={rating} max={6} readOnly precision={0.5}/>
                </Box>
            </div>
            <div className="cart-price">
                <p>${food.price}</p>
            </div>
            <Button/>
        </div>
    );
}

export default Card;
