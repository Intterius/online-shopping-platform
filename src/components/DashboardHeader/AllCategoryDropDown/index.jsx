import React, {useState} from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles, StyledMenu, StyledMenuItem} from "./style";

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
        <Box>
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
        </Box>
    );
}

export default AllCategoryDropDown;
