import React from 'react';
import {Box, Typography} from "@material-ui/core";
import DashboardHeader from "../../components/DashboardHeader";
import {useSelector} from "react-redux";

const ProductPage = () => {
    const [products] = useSelector((state)=>state.productPathReducer);
    const {productId} = useSelector((state)=>state.getProductIdReducer);

    console.log(productId)
    console.log(products)
    return (
        <>
            <DashboardHeader/>
            <Box>
                <Typography>Here will be product page</Typography>
            </Box>
        </>
    );
}

export default ProductPage;
