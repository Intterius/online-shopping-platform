import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import {useParams} from "react-router-dom";
import axios from "axios";
import {url} from "../../../utils/baseUrl";
import AddProduct from "../AddProduct";

const useStyles = makeStyles((theme)=>({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2, 0)
    }
}))

const EditProduct = ()=>{
    const params = useParams();
    const classes = useStyles();
    const [product, setProduct] = useState('');

    useEffect(() => {
        axios.get(`${url}/products/description?productId=${params.id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch((err) => console.error(err))
    }, [params]);

    return(
        <>
            {product && <AddProduct productToEdit={product} />}
        </>
    );
}

export default EditProduct;
