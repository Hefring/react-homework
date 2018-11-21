import React from 'react'

class Comment extends React.Component {

    render() {
        const {isOpen, text} = this.props;
        return(
            <div>
                {isOpen ? text : null}
            </div>
        )
    }
}


export default Comment