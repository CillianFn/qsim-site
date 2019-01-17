import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer} from "mdbreact" 

const Projects = () =>{
  return(
    <div>
      <MDBContainer>
            <MDBRow>
              <MDBCol lg="1">

              </MDBCol>
              <MDBCol lg="5">
                <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem"}}>
                  <MDBCardText>
                    <h3 className="flow-text">This website was developed using <b>React</b> and <b>MDBootstrap</b> on the frontend, and hosted using <b>Netlify</b></h3>
                  </MDBCardText>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="5">
                <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem"}}>
                  <MDBCardText>
                    <h3><a href="https://github.com/CillianFn/C45" target="_blank">C4.5</a> Classification algorithm developed using Java 8 with <a href="https://github.com/agodinez1" target="_blank">Andre Godinez</a></h3>
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
              
              <MDBCol lg="1">

              </MDBCol>

            </MDBRow>
          </MDBContainer>
    </div>
  )
}
 
export default Projects