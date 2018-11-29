import React from 'react';
import {Provider} from 'react-redux'
import ArticleList from './components/ArticleList'
import articles from './data'
import Counter from './components/Counter'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <ArticleList articles={articles} />
        </div>
      </Provider>
    );
  }
}

export default App;
