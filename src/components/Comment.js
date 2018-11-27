import React from 'react'

class Comment extends React.Component {

    render() {
        const {isOpen, text} = this.props;
        return (
            <div>
                {isOpen ? <li>{text}</li> : null}
            </div>
        )
    }
}


export default Comment