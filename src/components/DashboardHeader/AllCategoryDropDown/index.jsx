import React, {useState} from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText';
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./style";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        borderRadius: 0
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        backgroundColor: {
            color: theme.palette.primary.main
        },
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white
            }
        },
        width: theme.spacing(36),

    }
}))(MenuItem);

const AllCategoryDropDown = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    }

    return (
        <div>
            <Box className={classes.navContainer}>
                <Box className={classes.categoryAndSearchContainer}>
                    <Box
                        className={classes.allCategoryStyle}
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        All Categories
                        <ExpandMoreIcon/>
                    </Box>
                    <Box className={classes.iconBetween}>|</Box>
                    <Box className={classes.searchContainer}>
                        <input className={classes.searchInput} placeholder="Search Here"/>
                        <Box className={classes.searchButton}> Search</Box>
                    </Box>
                </Box>
            </Box>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText primary="Fruits"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Vegetables"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Flour"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Cookies"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Meat"/>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

export default AllCategoryDropDown;
