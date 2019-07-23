import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Locations from './components/Locations';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/locations" component={Locations} />
        <Route path="/contact" component={Contact} />
      </React.Fragment>
    </Router>
  );
}

export default App;
