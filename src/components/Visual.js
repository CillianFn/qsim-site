import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import initialPic from '../media/initialState.png'
import intermediatePic from '../media/intermediate.png'
import finalPic from '../media/finalState.png'
import { MDBRow, MDBCol, MDBCard, MDBCardText, MDBContainer} from "mdbreact"


class Visual extends Component{

  handleClick = () => {
    ReactDOM.render(
      <div>
        <h4><strong>All States</strong></h4>
        <p style = {{marginTop: "1rem"}}>{window.initial}</p>
        <p>{window.first}</p>
        <p>{window.second}</p>
      </div>,
      document.getElementById('toRender')
    );
  }


  render() {
    window.session.consult("qsim.pl");
    window.session.consult("initial.pl");

    window.session.query("firstOutput(_, Initial).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.initial = window.pl.format_answer(x);});

    window.session.query("firstOutput(First, _).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.first = window.pl.format_answer(x);});

    window.session.consult("retract.pl");
    window.session.consult("second.pl");
    window.session.query("secondOutput(Second).");
    window.session.answer(function(y){console.log(window.pl.format_answer(y));
                                          window.second = window.pl.format_answer(y);});


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

          <MDBRow>
            <MDBCol lg="4" >
                <MDBContainer style={{ marginTop: "4rem"}}>
                    <img style={{width: "75%", height: "75%"}}
                                src={initialPic}
                                alt="pic"
                                className=" z-depth-3 img-fluid float-left"
                              />
                </MDBContainer>
            </MDBCol>
            <MDBCol lg="4" >
                <MDBContainer style={{ marginTop: "4rem", marginLeft: "2.5rem"}}>
                    <img style={{width: "75%", height: "75%"}}
                                src={intermediatePic}
                                alt="pic"
                                className=" z-depth-3 img-fluid"
                              />
                </MDBContainer>
            </MDBCol>
            <MDBCol lg="4" >
                <MDBContainer style={{ marginTop: "4rem", marginBottom: "3rem"}}>
                    <img style={{width: "75%", height: "75%", marginBottom: "2rem"}}
                                src={finalPic}
                                alt="pic"
                                className=" z-depth-3 img-fluid float-right"
                              />
                </MDBContainer>
            </MDBCol>
          </MDBRow>


        </MDBContainer>
      </div>
    )
  }
}


export default Visual
