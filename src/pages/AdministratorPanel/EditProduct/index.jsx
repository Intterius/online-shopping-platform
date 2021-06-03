import React, {createContext, useEffect, useState} from "react";
import {makeStyles, Box} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {url} from "../../../utils/baseUrl";
import AddProduct from "../AddProduct";
import {interceptorRequest} from "../../../utils/requestInterceptor";
import InputForNewUrl from "../AddProduct/InputForNewUrl";
import AddProductCheck from "../AddProduct/AddProductCheck";

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
    const [incorrect, setIncorrect] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${url}/products/description?productId=${params.id}`)
            .then(res => {
                setProductToEdit(res.data)
            })
            .catch((err) => console.error(err))
    }, [params]);

    const handleEdit =()=>{
        if(productToEdit.title.length>=3 && productToEdit.description.length>=10 && productToEdit.department.length>=3 && productToEdit.category.length>=3 && productToEdit.quantityInStock<=999){
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
        }else{
            setIncorrect(true);
        }
    }

    const handleClose = ()=>{
        setIncorrect(false);
    }

    return(
        <AppContextEdit.Provider value={{productToEdit, setProductToEdit, handleEdit}}>
            <Box>
                <AddProductCheck incorrect={incorrect} handleClose={handleClose}/>
                {productToEdit && <AddProduct />}
            </Box>

        </AppContextEdit.Provider>
    );
}

export default EditProduct;
