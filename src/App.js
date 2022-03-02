import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import { Navbar, Exchanges, Cryptocurrensies, CryptoDetails, News, Homepage } from './components';
import './index.css'
const App = () => {
  return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
          <div className="routes">
          <Switch>
             <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrensies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
          </Layout>
        </div>
        <div className="footer">
          
        </div>
      </div>
  )
}

export default App