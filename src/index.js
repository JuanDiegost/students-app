import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

//apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = createHttpLink({
  uri: 'http://localhost:5555/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({addTypename: false})
})

ReactDOM.render(  
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, 
    document.getElementById('root'));
