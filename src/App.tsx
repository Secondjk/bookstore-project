import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from 'views/Navigation';
import { Pager } from 'views/Pager';
import { Container } from 'views/Container';
import { Catalog } from 'views/Catalog';
import { Footer } from 'views/Footer';
import { CarouselBase } from 'views/Carousel';
import { ItemView }  from 'views/ItemView';
import { About } from 'views/About';
import { Contact } from 'views/Contact';
import { Main } from 'views/Main';
import { Order } from './views/Order';

export const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Navigation />
        <CarouselBase />
        <Pager />
        <Container>
          <Switch>
            <Route path='/contacts' component={Contact} />
            <Route path='/catalog/item/:id' component={ItemView} />
            <Route path='/catalog/:category' component={Catalog} />
            <Route path='/catalog' component={Catalog} />
            <Route path='/about' component={About} />
            <Route path='/order' component={Order} />
            <Route path='/' component={Main} />
            <Route path='*' redirect='/' />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
};
