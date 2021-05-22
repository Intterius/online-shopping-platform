import React, {useEffect, useState} from 'react';
// import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Product from "./product";
import {CircularProgress, Box, makeStyles} from "@material-ui/core";
import DashboardHeader from "../../components/DashboardHeader";
import DescriptiveAccountHeader from "../../components/DescriptiveAccountHeader";
import axios from "axios";

const useStyles = makeStyles((theme)=>({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2, 0)
    }
}))

const ProductPage = () => {
    const classes = useStyles();
    const params = useParams();
    // const [products] = useSelector((state) => state.productPathReducer);
    // const item = products ? products.filter((element) => element.id === params.id) : [];
    // const product = item[0];
    const [product, setProduct] = useState('')

    useEffect(() => {
        axios.get(`https://online-shopping-platform-back.herokuapp.com/products/description?productId=${params.id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch((err) => console.error(err))
    }, [])


    return (
        <>
            {product && <Product product={product} />}
            {!product &&
            <>
                <DashboardHeader/>
                <DescriptiveAccountHeader title="Title"/>
                <Box className={classes.loader}>
                    <CircularProgress/>
                </Box>
            </>
            }

        </>
    );
};

export default ProductPage;
