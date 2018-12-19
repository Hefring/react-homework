import articles from '../data'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../action-types';

const articlesReducer = (state = {articles: articles, filterString: null}, action) => {
    switch (action.type) {
        case DELETE_ARTICLE:
            return state.articles.filter(article => article.id !== action.payLoad.id);
        case FILTER_ARTICLES:
            return state.articles.filter(article => article.title === state.filterString);
        default: 
            return state;
    }
}

export default articlesReducer