import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo';

import App from './components/App'
import SongList from './components/songlist';
import SongCreate from './components/songCreate'

const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory} >
        <Route path='/' component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
        </Route>
        {/* <Route path="song/new" component={SongCreate} /> */}
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
