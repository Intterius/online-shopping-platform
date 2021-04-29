import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: "#85C645"
        },
        secondary: {
            main: '#FF6600'
        },
        rating:{
            main: 'black'
        }
    }
});

export default theme;
