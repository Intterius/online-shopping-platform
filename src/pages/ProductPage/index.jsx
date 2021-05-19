import React, {useEffect, useState} from 'react';
import {Box, makeStyles, Typography, Snackbar} from "@material-ui/core";
import DashboardHeader from "../../components/DashboardHeader";
import {useDispatch, useSelector} from "react-redux";
import DescriptiveAccountHeader from "../../components/DescriptiveAccountHeader";
import Rating from "@material-ui/lab/Rating";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useParams} from "react-router-dom";
import {addToCartAsGuest, addToCartAsUser} from "../../redux/reducers/cartReducer";
import {addPrice} from "../../redux/reducers/cartPriceReducer";
import useAddProductList from "../../utils/AddProductList";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    image: {
        display: "flex",
        objectFit: "contain",
        height: "350px",
        width: "450px"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(3)
    },
    descriptionContainer: {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        marginLeft: theme.spacing(5)
    },
    title: {
        fontFamily: 'Lemonada, cursive',
        fontSize: theme.spacing(4.2),
        fontWeight: "bold",
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(4)
    },
    price: {
        fontSize: theme.spacing(3),
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1.2),
        fontWeight: "bold"
    },
    rating: {
        color: theme.palette.rating.main,
        fontSize: theme.spacing(3),
        marginLeft: theme.spacing(-2),
    },
    description: {
        fontFamily: "Open Sans",
        fontSize: theme.spacing(2),
        textAlign: "left",
        margin: theme.spacing(1.5, 0),
        fontWeight: "normal"

    },
    size: {
        display: "flex",
        fontWeight: "bold",
        marginRight: theme.spacing(3),
        width: "100%",
        alignItems: "center",
        marginTop: theme.spacing(5)
    },
    sizeText: {
        fontSize: theme.spacing(3),
    },
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
    quantity: {
        display: "flex",
        fontWeight: "bold",
        marginRight: theme.spacing(3),
        width: "100%",
        alignItems: "center",
        marginTop: theme.spacing(2)
    },
    quantitySpiner: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "normal",
        width: "75%",
    },
    quantityBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #E5E5E5",
        height: theme.spacing(3.7),
        width: theme.spacing(5),
        fontSize: theme.spacing(2.5),
        cursor: "pointer",
    },
    subtotal: {
        fontSize: theme.spacing(3),
        color: theme.palette.primary.main,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        width: "75%",
        alignItems: "center"
    },
    button: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
        width: theme.spacing(18),
        height: theme.spacing(5),
        border: "2px solid #85C645",
        borderRadius: theme.spacing(3),
        fontFamily: "Open Sans",
        marginTop: theme.spacing(5),
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main
        }
    }

}))

const ProductPage = () => {
    const params = useParams();
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState(1);
    const [message, setMessage] = useState('')
    const [position, setPosition] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center'
    })
    const [products] = useSelector((state) => state.productPathReducer);
    const item =products ?  products.filter((element) => element.id === params.id) : [];
    const product = item[0];
    const classes = useStyles();
    const subtotal = quantity * size * product?.price;
    const {vertical, horizontal, open} = position;
    const {user} = useSelector((state) => state.tokenReducer);
    const dispatch = useDispatch();

    const addToCart = () => {
        product.quantity = quantity * size;
        dispatch(addPrice(subtotal))
        if (user) {
            dispatch(addToCartAsUser(product));
            setQuantity(1);
            setSize(1);
            return;
        }
        dispatch(addToCartAsGuest(product));
        setQuantity(1);
        setSize(1)
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        setQuantity(quantity - 1)
    }


    useEffect(() => {
        if (quantity < 1) {
            setQuantity(1);
            setPosition({...position, open: true});
            setMessage("Quantity should be at least 1");
        }
        if (quantity > 99) {
            setQuantity(99)
            setPosition({...position, open: true});
            setMessage("Quantity can not be more than 99");
        }
        if (quantity * size > product.quantityInStock) {
            setQuantity(quantity - 1)
            setPosition({...position, open: true});
            setMessage("We are sorry but our current amount of " + product.title + " is " + product.quantityInStock + " kg");
        }
    }, [quantity])

    if(!product) {
        return <h>loading...</h>
    }

    return (
        <>
            <DashboardHeader/>
            <DescriptiveAccountHeader title={product.title}/>
            <Box className={classes.container}>
                <Box className={classes.image}>
                    <img src={product.imagesSet[0].url} alt={product.title}/>
                </Box>
                <Box className={classes.descriptionContainer}>
                    <Box>
                        <Typography className={classes.title}>{product.title}</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.price}>{"$" + product.price}</Typography>
                    </Box>
                    <Box component='fieldset' mb={3} borderColor='transparent'>
                        <Rating
                            className={classes.rating}
                            name='read-only'
                            value={product.rating}
                            max={5}
                            readOnly
                            precision={0.25}
                        />
                    </Box>
                    <Box className={classes.description}>
                        <Typography>{product.description}</Typography>
                    </Box>
                    <Box className={classes.size}>
                        <Typography className={classes.sizeText}>Size :</Typography>
                        <Box className={classes.sizeVariant}>
                            <Box onClick={() => setSize(1)}
                                 className={(size === 1) ? classes.selected : classes.sizeBox}>1 {product.measureUnit}</Box>
                            <Box onClick={() => setSize(3)}
                                 className={(size === 3) ? classes.selected : classes.sizeBox}>3 {(product.measureUnit === "pack") ? product.measureUnit + "s" : product.measureUnit}</Box>
                            <Box onClick={() => setSize(5)}
                                 className={(size === 5) ? classes.selected : classes.sizeBox}>5 {(product.measureUnit === "pack") ? product.measureUnit + "s" : product.measureUnit.toLowerCase()}</Box>
                        </Box>
                    </Box>
                    <Box className={classes.quantity}>
                        <Typography className={classes.sizeText}>Quantity :</Typography>
                        <Box className={classes.quantitySpiner}>
                            <Box onClick={handleDecrement} className={classes.quantityBox}>-</Box>
                            <Box style={{borderLeft: "0", borderRight: "0"}}
                                 className={classes.quantityBox}>{quantity}</Box>
                            <Box onClick={handleIncrement} className={classes.quantityBox}>+</Box>
                        </Box>
                    </Box>
                    <Box className={classes.quantity}>
                        <Typography className={classes.sizeText}>Subtotal :</Typography>
                        <Typography className={classes.subtotal}>{"$" + subtotal}</Typography>
                    </Box>
                    <Box onClick={addToCart} className={classes.button}>
                        <AddShoppingCartIcon/>
                        <Typography style={{fontSize: "18px"}}>Add to cart</Typography>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                style={{height: "1000px"}}
                anchorOrigin={{vertical, horizontal}}
                open={open}
                onClose={() => setPosition({...position, open: false})}
                message={message}
                key={vertical + horizontal}
            />
        </>
    );
};

export default ProductPage;
