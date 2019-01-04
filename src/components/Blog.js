import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer} from "mdbreact"

 
const Blog = () =>{
  return(
    <div>
      <MDBContainer>
            <MDBRow>
              <MDBCol lg="4">

              </MDBCol>
              <MDBCol>
                <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", marginLeft: "1rem", textAlign: "center"}}>
                  <MDBCardText>
                    <h2>Coming soon...</h2>
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
              
              <MDBCol lg="4">

              </MDBCol>

            </MDBRow>
          </MDBContainer>
    </div>
  )
}
 
export default Blog