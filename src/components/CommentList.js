import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {

    static defaultProps = {
        comments: []
    }

    state = {
        isOpen: false,
    }

    render() {
        const comments = this.props.comments;
        
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.isOpen ? "hide comments" : "show comments"}</button>
                {this.state.isOpen ? 
                    comments.length ? 
                    (<ul>
                        {comments.map(comment => 
                            <Comment     
                                key={comment.id}
                                text={comment.text}
                                isOpen={this.state.isOpen}
                            />
                        )}
                    </ul>
                    ) : (
                    <h3>No comments yet</h3>)
                : null}
            </div>
        )
    }


    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
}



export default CommentList