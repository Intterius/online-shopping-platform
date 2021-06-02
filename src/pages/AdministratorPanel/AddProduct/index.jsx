import React, {createContext, useContext, useEffect, useState} from "react";
import {Box, Button, makeStyles} from "@material-ui/core";
import DashboardHeader from "../../../components/DashboardHeader";
import DescriptiveAccountHeader from "../../../components/DescriptiveAccountHeader";
import ProductPhoto from "./ProductPhoto";
import InputForNewUrl from "./InputForNewUrl";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ProductDepartment from "./ProductDepartment";
import ProductCategory from "./ProductCategory";
import ProductQuantityInStock from "./ProductQuantityInStock";
import MeasureUnit from "./MeasureUnit";
import {AppContextEdit} from "../EditProduct";

const useStyles = makeStyles((theme) => ({
    photo: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
        marginTop: theme.spacing(10)
    },
    details:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    btnSubmit:{
        width: theme.spacing(15),
        color: theme.palette.common.white,
        fontSize: theme.spacing(3),
        marginTop: theme.spacing(2),
        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
        }
    },
    btnAdd:{
        width: theme.spacing(30),
        color: theme.palette.common.white,
        fontSize: theme.spacing(3),
        marginTop: theme.spacing(2),
        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
        }
    }

}))

export const AppContext = createContext([]);

const AddProduct = () => {
    const {productToEdit, handleEdit, setProductToEdit} = useContext(AppContextEdit)
    const classes = useStyles();
    const [urlInput, setUrlInput] = useState(false);
    const [title, setTitle] = useState('Add product');
    const [product, setProduct] = useState({
        category: 'category',
        department: 'department',
        description: 'description',
        id: Math.random()+Math.random(),
        imagesSet: [
            {
                id: Math.random()*Math.random(),
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwJGQfzWC5sSRL2r4zJTXPRj-eJO-BgGWxg&usqp=CAU',
            }
        ],
        measureUnit: 'kg',
        price: 0.5,
        quantity: 1,
        quantityInStock: 1,
        rating: 1,
        title: 'title',
        tags: 'tasty'
    })

    useEffect(()=>{
        if(productToEdit){
            setProductToEdit(product);
        }
    },[product])

    useEffect(() => {
       if(productToEdit){
           setTitle("Edit :"+productToEdit.title)
           setProduct(productToEdit);
       }else{
           setProduct({
               category: 'category',
               department: 'department',
               description: 'description',
               id: Math.random()+Math.random(),
               imagesSet: [
                   {
                       id: Math.random()*Math.random(),
                       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwJGQfzWC5sSRL2r4zJTXPRj-eJO-BgGWxg&usqp=CAU',
                   }
               ],
               measureUnit: 'kg',
               price: 0.1,
               quantity: 1,
               quantityInStock: 1,
               rating: 1,
               title: 'title',
               tags: 'tasty'
           })
       }
    }, [])


    return (
        <AppContext.Provider value={{product, setProduct, urlInput, setUrlInput}}>
            <Box>
                <InputForNewUrl/>
                <Box>
                    <DashboardHeader/>
                    <DescriptiveAccountHeader title={title}/>
                    <Box display="flex">
                        <Box className={classes.photo}>
                            <ProductPhoto/>
                        </Box>
                        <Box className={classes.details}>
                            <ProductTitle/>
                            <ProductPrice/>
                            <ProductDescription />
                            <ProductDepartment />
                            <ProductCategory />
                            <ProductQuantityInStock />
                            <MeasureUnit />
                            {productToEdit && <Button className={classes.btnSubmit} onClick={handleEdit} variant="contained" color="primary">Submit</Button>}
                            {!productToEdit && <Button className={classes.btnAdd} onClick={()=>console.log(product)} variant="contained" color="primary">Add Product</Button>}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppContext.Provider>
    );
}

export default AddProduct;
