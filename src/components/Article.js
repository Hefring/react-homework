import React from 'react'

class Article extends React.PureComponent {
        
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
                {article.title}
                <button onClick={this.handleClick}>{isOpen ? "Close" : "Open"}</button>
                {isOpen ? <p>{article.text}</p> : null}
            </div> 
        )
    }
}

export default Article