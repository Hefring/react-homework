import React from 'react'
import Article from './Article'
import Calendar from './Calendar'
import Select from 'react-select'


class ArticleList extends React.Component {

    state = {
        date: new Date(),
        openArticleId: null,
        searchObj: null
    }
    
    toggleVisibility = (id) => {
        // if(this.state.openArticleId === id) {
        //     this.setState({openArticleId: null});
        //     return;
        // }
        this.setState({openArticleId: id})
    }
    onChangeInput = selectedOption => {
        this.setState({searchObj: selectedOption});
    }

    render() {
        const {articles} = this.props;
        return(
            <div>
                <Select isMulti={true} value={this.state.searchObj} onChange={this.onChangeInput} options={articles.map(article => {
                        return {value: article.id, label: article.title}
                    })} />
                <Calendar/>
                {articles.map(article => 
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