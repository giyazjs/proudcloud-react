import React from 'react';
import './index.scss';
import { Header } from './components/header/index'
import { Aboutus } from './components/aboutus/index'
import { Card } from './components/cards/card'
import { Rocket } from './components/rocket/rocket';
import { Security } from './components/securityy/security';
import { Support } from './components/support/support';
import { CustomerCard } from './components/customerCards/CustomerCard';
import { Money } from './components/money/Money';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Aboutus />
      <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <Rocket />
      <Security />
      <Support />
      <h1 className="h1">Our Customers Say</h1>
      <div className="CustomerCards">
      <CustomerCard />
      <CustomerCard />
      <CustomerCard />
      </div>
      <Money />
      <Footer />
    </div>
  );
}

export default App;
