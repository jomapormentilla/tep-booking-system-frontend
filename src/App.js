import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import AbigailContainer from './components/AbigailContainer'
import EstateContainer from './components/EstateContainer'
import FaqsContainer from './components/FaqsContainer'
import Login from './components/Login'
import CovidMessage from './components/CovidMessage'

class App extends React.Component {
  state = {
    navItems: [
      {
        id: 1,
        name: `The Escape Plan`,
        url: `/`,
        active: false
      },
      {
        id: 2,
        name: `Abigail's Playroom`,
        url: `/abigails-playroom`,
        active: false
      },
      {
        id: 3,
        name: `The Estate`,
        url: `/the-estate`,
        active: false
      },
      {
        id: 4,
        name: `FAQs`,
        url: `/faqs`,
        active: false
      },
      {
        id: 5,
        name: `Login`,
        url: `/login`,
        active: false
      }
    ]
  }

  setActive = (idx) => {
    if (this.state.navItems[idx].active === false) {
      // Make all other item.active = false
      this.setState(prevState => {
        for (let el of prevState.navItems) {
          el.active = false
        }
        return { navItems: prevState.navItems }
      }, ()=>{
        // Change only current item.acive = true
        this.setState({
          navItems: [
            ...this.state.navItems.slice(0, idx),
            { ...this.state.navItems[idx], active: true },
            ...this.state.navItems.slice(idx+1)
          ]
        })
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CovidMessage />
            <div style={{ display: 'flex', marginTop: '10px' }}>
              <Nav navItems={ this.state.navItems } />
              <Route exact path="/" render={ routeInfo => <Home setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
              <Route path="/abigails-playroom" render={ routeInfo => <AbigailContainer setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
              <Route path="/the-estate" render={ routeInfo => <EstateContainer setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
              <Route path="/faqs" render={ routeInfo => <FaqsContainer setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
              <Route path="/login" render={ routeInfo => <Login setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
