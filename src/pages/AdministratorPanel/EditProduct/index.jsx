import React, {createContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import {useParams} from "react-router-dom";
import axios from "axios";
import {url} from "../../../utils/baseUrl";
import AddProduct from "../AddProduct";
import {interceptorRequest} from "../../../utils/requestInterceptor";

const useStyles = makeStyles((theme)=>({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2, 0)
    }
}));

export const AppContextEdit = createContext([]);

const EditProduct = ()=>{
    const params = useParams();
    const classes = useStyles();
    const [productToEdit, setProductToEdit] = useState('');

    useEffect(() => {
        axios.get(`${url}/products/description?productId=${params.id}`)
            .then(res => {
                setProductToEdit(res.data)
            })
            .catch((err) => console.error(err))
    }, [params]);

    const handleEdit =()=>{
        console.log(productToEdit)
        interceptorRequest.put(`${url}products/?productId=${params.id}`,{...productToEdit})
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => console.error(err))
    }

    // useEffect(()=>{
    //     console.log(productToEdit)
    // },[productToEdit])

    return(
        <AppContextEdit.Provider value={{productToEdit, setProductToEdit, handleEdit}}>
            {productToEdit && <AddProduct />}
        </AppContextEdit.Provider>
    );
}

export default EditProduct;
