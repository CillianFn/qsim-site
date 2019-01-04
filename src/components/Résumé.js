import React from 'react'
import pdf from '../media/Cillian-Fennell-Résumé.pdf'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer} from "mdbreact"
 
const Résumé = () =>{
  return(
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4">
          </MDBCol>

          <MDBCol>
            <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", marginLeft: "1rem", textAlign: "center"}}>
              <MDBCardText>
                <a href={pdf} target="_blank">Click here for my pdf</a>
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
 
export default Résumé