import React, {createContext, useEffect, useState} from "react";
import {makeStyles, Box} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {url} from "../../../utils/baseUrl";
import AddProduct from "../AddProduct";
import {interceptorRequest} from "../../../utils/requestInterceptor";
import InputForNewUrl from "../AddProduct/InputForNewUrl";

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
    const history = useHistory();

    useEffect(() => {
        axios.get(`${url}/products/description?productId=${params.id}`)
            .then(res => {
                setProductToEdit(res.data)
            })
            .catch((err) => console.error(err))
    }, [params]);

    const handleEdit =()=>{
        if(productToEdit.description.length<10){
            alert("Description should have more than 10 characters")
        }else{
            interceptorRequest.put(`${url}/products/?productId=${params.id}`,{...productToEdit})
                .then(res => {
                    history.push('/home');
                    window.location.reload();
                    console.log(res.data)
                })
                .catch((err) => console.error(err));
            interceptorRequest.put(`${url}/images?productId=${params.id}&imageId=${productToEdit.imagesSet[0].id}`,{url: productToEdit.imagesSet[0].url})
                .then(res => {
                    console.log(res.data.warning, res)
                })
                .catch((err) => console.error(err));
        }
    }

    return(
        <AppContextEdit.Provider value={{productToEdit, setProductToEdit, handleEdit}}>
            {productToEdit && <AddProduct />}
        </AppContextEdit.Provider>
    );
}

export default EditProduct;
