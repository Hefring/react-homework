import {INCREASE, DELETE_ACTICLE} from '../action-types' 

export const count = () => {
    return {
        type: INCREASE
    }
}
export const deleteArticle = (id) => {
    return {
        type: DELETE_ACTICLE,
        payLoad: {
            id
        }
    }
}