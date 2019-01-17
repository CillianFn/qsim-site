import React, {Component} from 'react'
import headshot from '../media/headshot.jpg'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer, MDBIcon} from "mdbreact"
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class Home extends Component{
  state = {
    value: 'cfennell.stflannans@gmail.com',
    copied: false,
  };
  
  render(){
    return(
      <div>
          <MDBRow>
            <MDBCol lg="5" xs="10">
                <MDBContainer style={{ marginTop: "4rem",  marginLeft: "3rem", marginRight: "1.5rem"}}>
                    <img style={{width: "90%", height: "90%"}}
                                src={headshot}
                                alt="pic"
                                className="rounded-circle z-depth-3 img-fluid"
                              />
                </MDBContainer>
            </MDBCol>
  
            <MDBCol lg="7" xs="12">
            <MDBContainer>
              <MDBCard className="card-body z-depth-2" style={{ marginTop: "8rem",  marginRight: "1.5rem", marginLeft:"1.5rem"}}>
                <MDBCardText>
                  <h1 className="flow-text">Hi, I'm <strong>Cillian</strong> <medium>👋</medium></h1>
                  <br></br>
                  <h2 className="flow-text">A Final Year Computer Science student at NUI Galway
                    interested in Full Stack Development, Data Science &amp; Machine Learning
                  </h2>
                </MDBCardText>
              </MDBCard>
            </MDBContainer>
            <MDBContainer>
              <MDBRow>
                <MDBCol lg="6">
                  <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", marginRight:"1.5rem", marginLeft:"1.5rem"}}>
                    <MDBCardText className="text-center">
                      <h5><b>Currently seeking opportunities  <br></br>  Find me here!</b>  &nbsp;<MDBIcon icon="hand-o-right" /></h5>
                    </MDBCardText>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="6">
                  <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", marginRight: "1.5rem", marginLeft:"1.5rem", marginBottom: "3rem"}}>
                      <MDBCardText>
                        <h3>
                          <MDBRow style={{ marginTop: "0.8rem"}}>
                            <MDBCol lg="4" sm="4" xs="4" className="text-center"> <a href="https://www.linkedin.com/in/CillianFn/" target="_blank"><MDBIcon icon="linkedin"/></a></MDBCol>
                            <MDBCol lg="4" sm="4" xs="4" className="text-center"> <a href="https://github.com/CillianFn" target="_blank"><MDBIcon icon="github"/></a></MDBCol>
                            <MDBCol lg="4" sm="4" xs="4" className="text-center"> 
                              <CopyToClipboard text={this.state.value}
                                onCopy={() => this.setState({copied: true})}>
                                <a href="javascript:;"><MDBIcon icon="envelope" title="Copy Email to Clipboard"/></a>
                              </CopyToClipboard>
                            </MDBCol>   
                          </MDBRow>
                          
                        </h3>
                      </MDBCardText>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </MDBCol>
          </MDBRow>
      </div>
    )
  }
}
 
export default Home