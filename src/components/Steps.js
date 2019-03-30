import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { MDBRow, MDBCol, MDBCard, MDBContainer} from "mdbreact"


class Steps extends Component{

  handleClick = () => {
    ReactDOM.render(
      <div>
        <p style = {{marginTop: "1rem"}}>{window.initial}</p>
        <p>{window.first}</p>
        <p>{window.second}</p>
      </div>,
      document.getElementById('toRender')
    );
  }


  render() {
    window.session.consult("qsim.pl");
    window.session.consult("retract.pl")
    window.session.consult("initial.pl")

    window.session.query("firstOutput(_, Initial).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.initial = window.pl.format_answer(x);});

    return(
      <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="3">
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="card-body z-depth-3" id="toRender" style={{ marginTop: "3rem", textAlign: "center"}}>
              <button type="button" className="btn btn-primary" onClick={() => this.handleClick()}>
                Generate All States
              </button>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="3">
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      </div>
    )
  }
}


export default Steps
