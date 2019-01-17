import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
          <header>
            <MDBNavbar expand="md" dark style={{width : "100vw"}}>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
              
              <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/"><b>ABOUT ME</b></MDBNavLink>
                  </MDBNavItem>
              </MDBNavbarNav>
             
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/CV"><b>CV</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{}} to="/blog"><b>BLOG</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/projects"><b>PROJECTS</b></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        
      </div>
    );
  }
}

export default Menu