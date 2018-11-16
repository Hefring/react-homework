import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        const comments = this.props.comments;
        console.log(comments);
        return(
            <div>
                <button onClick={this.handleClick}>Open Comments</button>
                {comments.map(comment =>
                    <Comment 
                        key={comment.id}
                        text={comment.text}
                    />
                )}
            </div>
        )
    }


    handleClick = () => {
        
    }
}



export default CommentList