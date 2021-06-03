import React, {createContext, useEffect, useState} from "react";
import {makeStyles, Box, CircularProgress} from "@material-ui/core";
import DashboardHeader from "../../../components/DashboardHeader";
import DescriptiveAccountHeader from "../../../components/DescriptiveAccountHeader";
import {interceptorRequest} from "../../../utils/requestInterceptor";
import {url} from "../../../utils/baseUrl";
import UserTable from "./userTable";

const useStyles = makeStyles((theme)=>({
    container:{
        margin: theme.spacing(6,3)
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(2, 0),
        marginTop: theme.spacing(20)
    },

}))

export const AppContextUsers = createContext([]);

const Users = ()=>{
    const classes = useStyles();
    const [userList, setUserList] = useState();

    useEffect(()=>{
        interceptorRequest.get(`${url}/admin/users`)
            .then(res => {
                setUserList(res.data)
            })
    },[])


    return(
        <AppContextUsers.Provider value={{userList}}>
            <DashboardHeader/>
            <DescriptiveAccountHeader title='Users'/>
            {
                userList &&
                <Box className={classes.container}>
                    <UserTable />
                </Box>
            }
            {!userList && (
                <Box className={classes.loader}>
                    <CircularProgress/>
                </Box>
            )}
        </AppContextUsers.Provider>
    );
}

export default Users;
