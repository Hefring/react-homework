import React from 'react'

class Comment extends React.Component {

    render() {
        const {text} = this.props;
        return (
            <li>
                {text}
            </li>
        )
    }
}


export default Comment