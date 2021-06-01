import React from "react";
import {makeStyles, Box} from "@material-ui/core";
import DashboardHeader from "../../../components/DashboardHeader";
import DescriptiveAccountHeader from "../../../components/DescriptiveAccountHeader";

const useStyles = makeStyles((theme)=>({

}))

const Users = ()=>{
    return(
        <>
            <DashboardHeader/>
            <DescriptiveAccountHeader title='Users'/>
            <Box>
                Users list
            </Box>
        </>
    );
}

export default Users;
