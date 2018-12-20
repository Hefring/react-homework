import {combineReducers} from 'redux'
import countReducer from './count'
import articlesReducer from './articles'
import filterReducer from './filter'

export default combineReducers({
    count: countReducer,
    articles: articlesReducer,
    filter: filterReducer
}) 
