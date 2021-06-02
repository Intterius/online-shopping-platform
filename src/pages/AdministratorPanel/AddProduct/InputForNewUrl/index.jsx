import React, {useContext, useState} from "react";
import {Box, Button, makeStyles, TextField} from "@material-ui/core";
import {AppContext} from "../index";

const useStyles = makeStyles((theme) => ({
    main: {
        width: "100%",
        height: "115%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.5)"
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
    disable: {
        display: "none"
    },
    button: {
        color: theme.palette.common.white,
        fontSize: theme.spacing(2),
        margin: theme.spacing(1)
    }
}))

const InputForNewUrl = () => {
    const classes = useStyles();
    const [url, setUrl] = useState('');
    const {urlInput, setUrlInput, product, setProduct} = useContext(AppContext);

    return (
        <Box className={urlInput ? classes.main : classes.disable}>
            <Box className={classes.container}>
                <TextField onChange={(e) => setUrl(e.target.value)}/>
                <Button onClick={() => {
                    setProduct({...product, imagesSet: [{...product.imagesSet[0], url: url}]});
                    setUrlInput(false);
                }} className={classes.button} variant="contained" color="primary">Add url</Button>
                <Button onClick={() => setUrlInput(false)} className={classes.button} variant="contained"
                        color="secondary">Cancel</Button>
            </Box>
        </Box>
    );
}

export default InputForNewUrl;
