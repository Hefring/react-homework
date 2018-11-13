import React from 'react'
import Article from './Article'

class ArticleList extends React.Component {

    state = {
        openArticleId: null
    }
    
    toggleVisibility = (id) => {
        this.setState({openArticleId: id})
    }

    render() {
        return(
            <div>
                {this.props.articles.map(article => 
                    <Article 
                        article={article}
                        key={article.id} 
                        isOpen={this.state.openArticleId === article.id} 
                        toggleVisibility={this.toggleVisibility}
                    />
                )}
            </div>
        )
    }
}

export default ArticleList