import React from 'react';
import food from '../../food'
import Card from '../Card'
import './style.css'

const foodSorted = food.sort((a, b) => (a.name > b.name) ? 1 : -1);
const mostPopular = [...food].sort((a, b) => (a.rating < b.rating) ? 1 : -1);

mostPopular.splice(15)

const cardList = foodSorted.map((e) => {
    return (
        <div key={e.id} className="cartContainer">
            <Card food={e}/>
        </div>
    );
})

const mostPopularCardList = mostPopular.map((e) => {
    return (
        <div key={e.id} className="cartContainer">
            <Card food={e}/>
        </div>
    );
})

const Dashboard = () => {
    return (
        <div>
            <h1>Product list</h1>
            <hr/>
            <div className='cardList'>
                {cardList}
            </div>
            <h1>Most popular</h1>
            <hr/>
            <div className='cardList'>
                {mostPopularCardList}
            </div>
        </div>
    );
}

export default Dashboard;
