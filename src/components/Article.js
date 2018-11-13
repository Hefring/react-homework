import React from 'react'

class Article extends React.PureComponent {
        
    handleClick = () => {
        this.props.toggleVisibility(this.props.article.id);
    }


    render() {
        console.log('Render Article');
        const {article, isOpen} = this.props; 
        return (
            <div>
                {article.title}
                <button onClick={this.handleClick}>Close</button>
                {isOpen ? <p>{article.text}</p> : null}
            </div> 
        )
    }
}

export default Article