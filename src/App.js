import React from 'react';
import './App.css';

import Calendar from './components/calendar/Calendar'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
