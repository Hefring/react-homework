import React from 'react';
import ArticleList from './components/ArticleList'
import articles from './data'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
