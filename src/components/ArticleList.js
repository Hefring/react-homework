import React from 'react'
import Article from './Article'
import Calendar from './Calendar'
import Select from 'react-select'
import {connect} from 'react-redux'


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
        return(
            <div>
                <Select isMulti={true} value={this.state.searchObj} onChange={this.onChangeInput} options={this.props.articles.map(article => {
                        return {value: article.id, label: article.title}
                    })} />
                <Calendar/>
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

export default connect(
    (state) => {
        return {
            articles: state.articles
        }
    }
) (ArticleList)