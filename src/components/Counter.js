import React from 'react'
import {connect} from 'react-redux'
import {count} from '../action-creators'

class Counter extends React.PureComponent {
    render() {
        return(
            <React.Fragment>
                <h1>{this.props.count}</h1>
                <button onClick={this.handleClick}>increase</button>
            </React.Fragment> 
        )
    }
    handleClick = () => {
        this.props.dispatch(count()); 
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps) (Counter)