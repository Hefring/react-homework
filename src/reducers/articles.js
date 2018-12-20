import articles from '../data'
import { DELETE_ARTICLE } from '../action-types';

const articlesReducer = (state = articles, action) => {
    switch (action.type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== action.payLoad.id);
        default: 
            return state;
    }
}

export default articlesReducer