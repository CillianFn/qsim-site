import React, { Component } from 'react';
import Content from './components/Content';
import Menu from './components/Menu';
 
class App extends Component {
  render() {
    return (
      <div className="App">

          {/* Renders navbar */}
          <Menu/>

          {/* Renders content from respective component */}
          <div className="content">
            <Content/>
          </div>

          {/* Footer */}
      </div>
    );
  }
}
 
export default App;