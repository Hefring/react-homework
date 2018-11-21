import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {

    state = {
        isOpen: false,
    }

    render() {
        const comments = this.props.comments;
        console.log(comments);
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.isOpen ? "Close Comments" : "Open Comments"}</button>
                {comments.map(comment =>
                    <Comment 
                        key={comment.id}
                        text={comment.text}
                        isOpen={this.state.isOpen}
                    />
                )}
            </div>
        )
    }


    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
}



export default CommentList