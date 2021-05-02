import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import RoomContainer from './components/RoomContainer'
import FaqsContainer from './components/FaqsContainer'
import Login from './components/Login'
import Footer from './components/Footer'
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
    ],

    roomInfo: [
      {
        id: 1,
        name: `Abigail's Playroom`,
        url: `/abigails-playroom`,
        image_url: `/images/abigailsBanner.jpeg`,
        introduction: `A tragedy has occurred in the Pierson household involving little Abigail, and all those closest to her are being questioned by the court. Filled with grief, shock, and a desire for truth, the family's loyal butler now requests your immediate assistance to unravel the facts behind this puzzle-packed mystery. The police are at a dead end because their primary investigator has gone missing while in pursuit of evidence inside Abigail's Playroom.`,
        mission: `As the butler’s secret investigators, it is up to you to discover the truth and bring justice to this case. All primary suspects are about to be questioned, and you have one hour to search Abigail's Playroom for evidence before the court's decision is finalized. Beware, however, as the playroom is designed to be Mr. Pierson's "greatest puzzle" ever, in which case... you must have what it takes to escape the room.`,
      },
      {
        id: 2,
        name: `The Estate`,
        url: `/the-estate`,
        image_url: `/images/EstatePainting_Banner.png`,
        introduction: `Richard Prasad is determined to become the greatest ‘Master of Puzzles’, and he will do anything in his power to claim this title. Recently, it has come to light that Mr. Prasad has stolen a particular set of blueprints containing the Greatest Puzzle Ever, and he has hidden it in a secret and highly guarded area of his Estate. The Black Knight Organization, the original creators of the blueprints, aim to retrieve the masterful puzzle designs from The Estate without alarming Richard. They are able to provide a 60-minute window in which a group of highly skilled agents will infultrate and obtain the documents safely and securely. Will you rise up to the challenge as undercover agents to help set things right?`,
        mission: `You have 60 minutes to search Richard’s mansion in order to find the stolen blueprints and rightfully return them to the Black King, the leader of the Black Knight Organization. This very important task requires incredible teamwork, observational skills, and the ability to think quickly on your toes. Although it may look like an ordinary mansion, Richard's Estate is far from ordinary. It is the home of an extremely passionate puzzle maker, so don't be surpsised if things are not what they seem to be. Remember, this is a stealth mission, so you must not get caught, otherwise the conequences may be dire, in which case... you must have what it takes to escape the room.`,
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
            <div style={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
              <Nav navItems={ this.state.navItems } />
              <Route exact path="/" render={ routeInfo => <Home setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
              <Route path="/abigails-playroom" render={ routeInfo => {
                  let room = this.state.roomInfo.find(item => item.url === routeInfo.location.pathname)
                  return <RoomContainer setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } room={ room } />
                } } />
              <Route path="/the-estate" render={ routeInfo => {
                  let room = this.state.roomInfo.find(item => item.url === routeInfo.location.pathname)
                  return <RoomContainer setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } room={ room } />
                } } />
              <Route path="/faqs" render={ routeInfo => <FaqsContainer setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
              <Route path="/login" render={ routeInfo => <Login setActive={ this.setActive } navItems={ this.state.navItems } routeInfo={ routeInfo } /> } />
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
