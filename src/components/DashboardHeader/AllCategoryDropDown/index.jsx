import { useEffect, useState } from 'react';
import { useStyles, StyledMenu, StyledMenuItem } from './style';
import { Link, useLocation } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import queryString from 'query-string';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AllCategoryDropDown = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState('All Categories');
  const [searchInput, setSearchInput] = useState('');
  const { search } = useLocation();
  const { category: queryCategory } = queryString.parse(search);
  const categories = ['All Categories', 'Fruits', 'Vegetables', 'Meat'];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryChange = (event) => {
    let str = event.target.innerText;
    if (str === 'All Categories') {
      setCategory('All Categories');
    } else if (str === 'Fruits') {
      setCategory('Fruits');
    } else if (str === 'Vegetables') {
      setCategory('Vegetables');
    } else if (str === 'Meat') {
      setCategory('Meat');
    } else {
      setCategory(category);
    }
  };

  const handleSearchInput = (event) => {
    if (/^[a-zA-Z]*$/.test(event.target.value)) {
      return setSearchInput(event.target.value);
    }
  };

  const handleQuery = () => {
    if (category === 'All Categories') {
      return '';
    } else {
      return category;
    }
  };

  const handleCategoriesDisplay = () => {
    const result = categories.filter((el) => el !== category);
    return result.map((el) => (
      <StyledMenuItem key={Math.random()}>
        <ListItemText primary={el} />
      </StyledMenuItem>
    ));
  };

  useEffect(() => {
    if (queryCategory !== undefined) {
      setCategory(queryCategory === '' ? 'All Categories' : queryCategory);
    }
  }, [queryCategory]);

  return (
    <Box>
      <Box className={classes.navContainer}>
        <Box className={classes.categoryAndSearchContainer}>
          <Box
            className={classes.allCategoryStyle}
            aria-controls='customized-menu'
            aria-haspopup='true'
            variant='contained'
            color='primary'
            onClick={handleClick}
          >
            {category}
            <ExpandMoreIcon />
          </Box>
          <Box className={classes.iconBetween}>|</Box>
          <Box className={classes.searchContainer}>
            <input
              value={searchInput}
              onChange={handleSearchInput}
              className={classes.searchInput}
              placeholder='Search Here'
            />
            <Link
              to={`/search?category=${handleQuery()}&title=${searchInput}`}
              style={{ height: '100%', textDecoration: 'none' }}
            >
              <Box className={classes.searchButton}> Search</Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <StyledMenu
        onClick={(e) => {
          setAnchorEl(null);
          handleCategoryChange(e);
        }}
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        {handleCategoriesDisplay()}
      </StyledMenu>
    </Box>
  );
};

export default AllCategoryDropDown;
