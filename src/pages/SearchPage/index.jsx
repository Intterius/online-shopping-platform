import { useLocation } from 'react-router';
import { url } from '../../utils/baseUrl';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import DashboardHeader from '../../components/DashboardHeader';
import DescriptiveAccountHeader from '../../components/DescriptiveAccountHeader';
import queryString from 'query-string';
import axios from 'axios';
import Card from '../../components/Card';

const SearchPage = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const { category, title } = queryString.parse(search);
  const [products, setProducts] = useState([]);

  const displayResult = products.map((product) => (
    <div key={product.id} className={classes.cardContainer}>
      <Card food={product} />
    </div>
  ));

  const handleSearchTitle = () => {
    if (title === '' && category === '') {
      return 'All products';
    } else if (title === '' && category === 'Vegetables') {
      return 'All vegetable products';
    } else if (title === '' && category === 'Fruits') {
      return 'All fruit products';
    } else if (title === '' && category === 'Meat') {
      return 'All meat products';
    } else if (products.length) {
      return `Your search for "${title}" revealed the following:`;
    } else {
      return `Your search for "${title}" did not yield any results.`;
    }
  };

  useEffect(() => {
    axios
      .get(
        `${url}/products/search?pageNumber=0&itemsPerPage=60&category=${category}&title=${title}`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => setProducts([]));
  }, [category, title]);

  return (
    <>
      <DashboardHeader />
      <DescriptiveAccountHeader title={'Search'} />
      <h1 className={classes.searchTitle}>{handleSearchTitle()}</h1>
      <div className={classes.cardList}>{displayResult}</div>
    </>
  );
};

export default SearchPage;
