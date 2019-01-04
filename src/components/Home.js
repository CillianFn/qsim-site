import React from 'react'
import headshot from '../media/headshot.jpg'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer, MDBIcon} from "mdbreact"
 
const Home = () =>{
  return(
    <div>
        <MDBRow>
          <MDBCol lg="5">
              <MDBContainer style={{ marginTop: "4rem", marginLeft: "3rem"}}>
                  <img style={{width: "90%", height: "90%"}}
                              src={headshot}
                              alt="pic"
                              className="rounded-circle z-depth-3 img-fluid"
                            />
              </MDBContainer>
          </MDBCol>

          <MDBCol lg="7">
          <MDBContainer>
            <MDBCard className="card-body z-depth-2" style={{ marginTop: "8rem", marginLeft: "1rem", marginRight: "3rem"}}>
              <MDBCardText>
                <h1>Hi, I'm <strong>Cillian</strong> <medium>👋</medium></h1>
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
                <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", marginLeft: "1rem", height: "13vh"}}>
                  <MDBCardText className="text-center">
                    <h4><b>Currently seeking opportunities  <br></br>  Find me here!</b>  &nbsp;<MDBIcon icon="hand-o-right" /></h4>
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="6">
                <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", marginRight: "3rem", height: "13vh"}}>
                    <MDBCardText>
                      <h3>
                        <MDBRow style={{ marginTop: "0.8rem"}}>
                          <MDBCol lg="4" className="text-center"> <a href="https://www.linkedin.com/in/CillianFn/" target="_blank"><MDBIcon icon="linkedin"/></a></MDBCol>
                          <MDBCol lg="4" className="text-center"> <a href="https://github.com/CillianFn" target="_blank"><MDBIcon icon="github"/></a></MDBCol>
                          <MDBCol lg="4" className="text-center"> <a href="mailto:cfennell.stflannans@gmail.com" target="_top"><MDBIcon icon="envelope" /></a></MDBCol>   
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
 
export default Home