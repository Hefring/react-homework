import React from 'react'
import CommentList from './CommentList'

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

    

    render() {
        console.log('Render Article');
        const {article, isOpen} = this.props; 
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick={this.handleClick}>{isOpen ? "Close" : "Open"}</button>
                {isOpen ? <section>{article.text}{this.state.hasError ? null : <CommentList comments={article.comments}/>}</section> : null}
            </div> 
        )
    }
}

export default Article