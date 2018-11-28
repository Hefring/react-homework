import React from 'react';
import ArticleList from './components/ArticleList'
import articles from './data'
import store from './store'

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
