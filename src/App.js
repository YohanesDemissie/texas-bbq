import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </React.Fragment>
    </Router>
  );
}

export default App;
