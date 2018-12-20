import { FILTER_ARTICLES } from '../action-types'
import store from '../store'

const filterReducer = (state = null, action) => {
    switch (action.type) {
        case FILTER_ARTICLES:
            console.log(store);
            return state;
        default:
            return state;
    }
}

export default filterReducer


