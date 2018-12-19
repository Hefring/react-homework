import {INCREASE, DELETE_ARTICLE, FILTER_ARTICLES} from '../action-types' 

export const count = () => {
    return {
        type: INCREASE
    }
}
export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payLoad: {
            id
        }
    }
}

export const filterArticles = (articles) => {
    return {
        type: FILTER_ARTICLES,
        payLoad: {
            articles: articles
        }
    }
}