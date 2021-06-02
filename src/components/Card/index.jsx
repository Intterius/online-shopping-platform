import React from 'react';
import Button from '../Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {useDispatch, useSelector} from 'react-redux';
import {
    addToCartAsGuest,
    addToCartAsUser,
} from '../../redux/reducers/cartReducer';
import {Link} from 'react-router-dom';
import {getProductId} from '../../redux/reducers/getProductIdReducer';
import {useStyles} from './style';
import {addPrice} from '../../redux/reducers/cartPriceReducer';
import {interceptorRequest} from '../../utils/requestInterceptor';
import {url} from '../../utils/baseUrl';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Card = ({food}) => {
    const classes = useStyles();
    const {role} = useSelector((state) => state.userRoleReducer);
    const noImage =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwJGQfzWC5sSRL2r4zJTXPRj-eJO-BgGWxg&usqp=CAU';
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.tokenReducer);
    food.quantity = 1;
    const addToCart = () => {
        if (user) {
            interceptorRequest.post(
                `${url}/cart?product_id=${food.id}&quantity=${food.quantity}`
            );
            dispatch(addToCartAsUser(food));
            return;
        }
        return dispatch(addToCartAsGuest(food));
    };

    return (
        <div className={classes.cartContainer}>
            {
                role === "ADMIN" &&
                <Box className={classes.iconsContainer}>
                    <Box className={classes.icons}>
                        <DeleteForeverIcon/>
                    </Box>
                    <Link style={{color: '#89c74a'}} to={`/edit-product/${food.id}`}>
                        <Box className={classes.icons}>
                            <EditIcon/>
                        </Box>
                    </Link>
                </Box>
            }
            <Link to={`/product/${food.id}`}>
                <div
                    onClick={() => dispatch(getProductId(food.id))}
                    className={classes.cartImgContainer}
                >
                    <img
                        src={food.imagesSet.length > 0 ? food.imagesSet[0].url : noImage}
                        className={classes.cartImgContainerImg}
                        alt={food.title}
                    />
                </div>
            </Link>
            <div className={classes.cartName}>
                <p className={classes.cartNameP}>{food.title}</p>
            </div>
            <div>
                <Box component='fieldset' mb={3} borderColor='transparent'>
                    <Rating
                        className={classes.root}
                        name='read-only'
                        value={food.rating}
                        max={5}
                        readOnly
                        precision={0.25}
                    />
                </Box>
            </div>
            <div className={classes.cartName}>
                <p className={classes.cartPriceP}>${food.price}</p>
            </div>
            <Button
                onClick={() => {
                    addToCart();
                    dispatch(addPrice(food.price));
                }}
            />
        </div>
    );
};

export default Card;
