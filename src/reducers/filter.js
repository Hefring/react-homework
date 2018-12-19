import { FILTER_ARTICLES } from '../action-types'

const filterReducer = (state = null, action) => {
    switch (action.type) {
        case FILTER_ARTICLES:
            return action.payLoad.articles.filter(article => state === article.title);
        default:
            return state;
    }
}

export default filterReducer


