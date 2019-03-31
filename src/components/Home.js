import React, {Component} from 'react'
import nuig from '../media/nuigLogo.png'
import tauProlog from '../media/tauProlog.png'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer, MDBIcon} from "mdbreact"
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Home extends Component{

  render(){
    return(
      <div>
          <MDBRow>
            <MDBCol lg="5" >
                <MDBContainer style={{ marginTop: "7.5rem",  marginLeft: "2rem"}}>
                  <img style={{width: "90%", height: "90%"}}
                              src={nuig}
                              alt="pic"
                              className="z-depth-3 img-fluid"
                            />
                </MDBContainer>
            </MDBCol>

            <MDBCol lg="7" xs="12">
            <MDBContainer>
              <MDBCard className="card-body z-depth-2" style={{ marginTop: "4rem",  marginRight: "1.5rem", marginLeft:"1.5rem"}}>
                <MDBCardText>
                  <h1 className="flow-text"><strong>Qualitative Reasoning</strong></h1>
                  <br></br>
                  <h2 className="flow-text">Qualitative Simulation using the QSIM algorithm developed in Prolog. Tau-Prolog <span>
                            <img style={{width: "3.5%", height: "3.5%", marginRight: "0.5rem"}}
                                src={tauProlog}
                                alt="pic"
                                className="img-fluid"
                              /></span>was used to run Prolog code in the browser.
                  </h2>
                </MDBCardText>
              </MDBCard>
            </MDBContainer>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="5" >
            </MDBCol>

            <MDBCol lg="7" xs="12">
            <MDBContainer>
              <MDBCard className="card-body z-depth-2" style={{ marginTop: "4rem", marginRight: "1.5rem", marginLeft:"1.5rem"}}>
                <MDBCardText>
                  <h4 className="flow-text"><strong>Visaul</strong></h4>
                  <h4 className="flow-text">A visual representation of throwing a ball in the air. All states of the system are generated and displayed in diagrams.
                  </h4>
                </MDBCardText>

                <MDBCardText>
                  <h4 className="flow-text"><strong>Steps</strong></h4>
                  <h4 className="flow-text">The steps required to generate each state of the system are calculated and displayed.
                  </h4>
                </MDBCardText>
              </MDBCard>
            </MDBContainer>
            </MDBCol>
          </MDBRow>

      </div>
    )
  }
}

export default Home
