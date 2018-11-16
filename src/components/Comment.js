import React from 'react'

class Comment extends React.Component {

    state = {
        isOpen: false,
    }

    render() {
        const text = this.props.text;
        return(
            <div>
                {this.state.isOpen ? text : null}
            </div>
        )
    }
}


export default Comment