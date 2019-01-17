import React from 'react'
import pdf from '../media/Cillian-Fennell-Résumé.pdf'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer} from "mdbreact"
 
const Résumé = () =>{
  return(
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="3">
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="card-body z-depth-3" style={{ marginTop: "3rem", textAlign: "center"}}>
              <MDBCardText>
                <span><h2 style={{display: "inline"}}>Find my full CV, <a href={pdf} target="_blank">here</a></h2></span>
              </MDBCardText>
            </MDBCard>
          </MDBCol>
              
          <MDBCol lg="3">
          </MDBCol>

        </MDBRow>
      </MDBContainer> 
    </div>
  )
}
 
export default Résumé