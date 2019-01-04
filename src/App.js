import React, { Component } from 'react';
import Content from './components/Content';
import Menu from './components/Menu';
import { Helmet } from 'react-helmet';
 
class App extends Component {
  render() {
    return (
      <div className="App amy-crisp-gradient" style={{height: "100vh"}}>
          <Helmet>
            <style>{'body { background-color: default; overflow-x: hidden;}'}</style>
          </Helmet>
      
          {/* Renders navbar */}
          <Menu/>

          {/* Renders content from respective component */}
          <div className="content ">
            <Content/>
          </div>

          {/* Footer */}
      </div>
    );
  }
}
 
export default App;