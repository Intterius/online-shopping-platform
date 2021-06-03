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
import {interceptorRequest} from "../../../utils/requestInterceptor";
import {url} from "../../../utils/baseUrl";
import AddProductCheck from "./AddProductCheck";

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
        margin: theme.spacing(2, 0),
        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
        }
    },
    btnAdd:{
        width: theme.spacing(30),
        color: theme.palette.common.white,
        fontSize: theme.spacing(3),
        marginTop: theme.spacing(2, 0),
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
    const [incorrect, setIncorrect] = useState(false);
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
               imagesSet: [
                   {
                       url: 'https://www.portdoverkia.com/dist/img/nophoto.jpg',
                   }
               ],
               measureUnit: 'kg',
               price: 0.1,
               quantity: 1,
               quantityInStock: 1,
               rating: 1,
               title: 'title',
               tags: 'tasty',
               manufacturer: "Moldova SRL",
           })
       }
    }, [])

    const handleAddProduct = () =>{
        if(product.title.length>=3 && product.description.length>=10 && product.department.length>=3 && product.category.length>=3 && product.quantityInStock<=999){
            interceptorRequest.post(`${url}/products/`, {...product})
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


    return (
        <AppContext.Provider value={{product, setProduct, urlInput, setUrlInput}}>
            <Box>
                <InputForNewUrl/>
                <AddProductCheck incorrect={incorrect} handleClose={handleClose}/>
                <Box>
                    <DashboardHeader/>
                    <DescriptiveAccountHeader title={title}/>
                    <Box display="flex">
                        <Box className={classes.photo}>
                            <ProductPhoto/>
                        </Box>
                        <Box className={classes.details}>
                            <Box display="flex">
                                <ProductTitle/>
                                <ProductPrice/>
                            </Box>
                            <ProductDescription />
                            <Box display="flex">
                                <ProductDepartment />
                                <ProductCategory />
                            </Box>
                            <Box display="flex">
                                <ProductQuantityInStock />
                                <MeasureUnit />
                            </Box>
                            {productToEdit && <Button className={classes.btnSubmit} onClick={handleEdit} variant="contained" color="primary">Submit</Button>}
                            {!productToEdit && <Button className={classes.btnAdd} onClick={handleAddProduct} variant="contained" color="primary">Add Product</Button>}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppContext.Provider>
    );
}

export default AddProduct;
