import {combineReducers} from 'redux'
import countReducer from './count'
import articlesReducer from './articles';

export default combineReducers({
    count: countReducer,
    articles: articlesReducer
}) 
