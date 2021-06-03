import React from "react";
import {Box, makeStyles, Typography, Button} from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    main:{
        width: "auto",
        height: "auto",
        zIndex: 1000,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: theme.spacing(-24)
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: theme.spacing(60),
        height: theme.spacing(8),
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: theme.spacing(1),
        margin: theme.spacing(10),
        background: "rgba(255, 255, 255)"
    },
    button: {
        color: theme.palette.common.white,
        fontSize: theme.spacing(2),
        margin: theme.spacing(1)
    },
    disable:{
        display: "none"
    }

}))

const RemoveProduct = ({remove, handleClose, handleRemove}) =>{
    const classes = useStyles();

    return(
        <Box className={remove? classes.main : classes.disable}>
            <Box className={classes.container}>
                <Typography>Are you sure</Typography>
                <Button onClick={handleRemove} className={classes.button} variant="contained" color="secondary">Yes</Button>
                <Button onClick={handleClose} className={classes.button} variant="contained" color="primary">Cancel</Button>
            </Box>
        </Box>
    );
}

export default RemoveProduct;
