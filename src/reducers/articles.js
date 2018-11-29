import articles from '../data'
import { DELETE_ACTICLE } from '../action-types';

const articlesReducer = (state = articles, action) => {
    switch (action.type) {
        case DELETE_ACTICLE:
            return state.filter(article => article.id !== action.payLoad.id);
        default: 
            return state;
    }
}

export default articlesReducer