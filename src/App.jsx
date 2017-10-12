import React, { Component } from 'react';
import MyRouter from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
            <div>
              <MyRouter />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
