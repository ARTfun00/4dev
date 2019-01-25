import {combineReducers} from 'redux';
import CarReducers from './car';
import ActiveCar from './car-active'
import NewsReducers from './curencies.js'
import SelectedArticle from './article-selected'

const allReducers = combineReducers ({
    cars: CarReducers,
    active: ActiveCar,
    articles: NewsReducers,
    info: SelectedArticle
});

export default allReducers;