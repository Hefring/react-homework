import React from 'react'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import {deleteArticle} from '../action-creators'

class Article extends React.PureComponent { 

    state = {
        hasError: null
    }
    
    componentDidCatch(error) {
        this.setState({
            hasError: true,
        })
    }


    handleClick = () => {
        if(this.props.isOpen === true) {
            this.props.toggleVisibility(null);
            return;
        }
        this.props.toggleVisibility(this.props.article.id);
    }
    deleteArticle = () => {
        this.props.deleteArticle(this.props.article.id);
    }

    

    render() {
        const {article, isOpen} = this.props; 
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick={this.handleClick}>{isOpen ? "Close" : "Open"}</button>
                <button className="delete-article" onClick={this.deleteArticle}>delete</button>
                {isOpen ? <section>{article.text}{this.state.hasError ? null : <CommentList comments={article.comments}/>}</section> : null}
            </div> 
        )
    }
}

export default connect(
    null,
    (dispatch) => {
        return {
            deleteArticle: id => dispatch(deleteArticle(id))
        }
    }
) (Article)