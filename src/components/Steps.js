import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { MDBRow, MDBCol, MDBCard, MDBContainer} from "mdbreact"


class Steps extends Component{

  stepOne = () => {
    ReactDOM.render(
      <div>
        <h4>Possible Transitions</h4>
        <p style = {{marginTop: "1rem"}}>{window.stepOneA}</p>
        <p>{window.stepOneB}</p>
        <p>{window.stepOneC}</p>
      </div>,
      document.getElementById('renderOne')
    );
  }

  stepTwo = () => {
    ReactDOM.render(
      <div>
        <h4>Constraint Transactions</h4>
        <p style = {{marginTop: "1rem"}}>{window.stepTwoA}</p>
        <p>{window.stepTwoB}</p>
        <p>{window.stepTwoC}</p>
        <p>{window.stepTwoD}</p>
        <p>{window.stepTwoE}</p>
        <p>{window.stepTwoF}</p>
        <p>{window.stepTwoG}</p>
        <p>{window.stepTwoH}</p>
        <p>{window.stepTwoI}</p>
      </div>,
      document.getElementById('renderTwo')
    );
  }

  stepThree = () => {
    ReactDOM.render(
      <div>
        <h4>Constraint Transactions after Filtering</h4>
        <p style = {{marginTop: "1rem"}}>{window.stepThreeA}</p>
        <p>{window.stepThreeB}</p>
        <p>{window.stepThreeC}</p>
        <p>{window.stepThreeD}</p>
        <p>{window.stepThreeE}</p>
      </div>,
      document.getElementById('renderThree')
    );
  }

  stepFour = () => {
    ReactDOM.render(
      <div>
        <h4>Next States</h4>
        <p style = {{marginTop: "1rem"}}>{window.stepFourA}</p>
        <p>{window.stepFourB}</p>
      </div>,
      document.getElementById('renderFour')
    );
  }


  render() {
    window.session.consult("steps.pl");
    window.session.consult("initial.pl");
    //Set up queries in steps.pl so that output from each stage can be queried and displayed here

    //Step One
    window.session.query("stepOne(A,_,_).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepOneA = window.pl.format_answer(x);});

    window.session.query("stepOne(_,B,_).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepOneB = window.pl.format_answer(x);});

    window.session.query("stepOne(_,_,C).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepOneC = window.pl.format_answer(x);});


    //Step Two
   window.session.query("stepTwo(A,_,_,_,_,_,_,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoA = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,B,_,_,_,_,_,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoB = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,C,_,_,_,_,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoC = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,_,D,_,_,_,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoD = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,_,_,E,_,_,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoE = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,_,_,_,F,_,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoF = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,_,_,_,_,G,_,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoG = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,_,_,_,_,_,H,_).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoH = window.pl.format_answer(x);});

   window.session.query("stepTwo(_,_,_,_,_,_,_,_,I).");
   window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                         window.stepTwoI = window.pl.format_answer(x);});

    //Step Three
    window.session.query("stepThree(A,_,_,_,_).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepThreeA = window.pl.format_answer(x);});

    window.session.query("stepThree(_,B,_,_,_).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepThreeB = window.pl.format_answer(x);});

    window.session.query("stepThree(_,_,C,_,_).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepThreeC = window.pl.format_answer(x);});

    window.session.query("stepThree(_,_,_,D,_).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepThreeD = window.pl.format_answer(x);});

    window.session.query("stepThree(_,_,_,_,E).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepThreeE = window.pl.format_answer(x);});



    //Step Three
    window.session.consult("qsim.pl");

    window.session.query("firstOutput(_, A).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepFourA = window.pl.format_answer(x);});

    window.session.query("firstOutput(B, _).");
    window.session.answer(function(x){console.log(window.pl.format_answer(x));
                                          window.stepFourB = window.pl.format_answer(x);});



    return(
      <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="3">
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="card-body z-depth-3" id="renderOne" style={{ marginTop: "3rem", textAlign: "center"}}>
              <button type="button" className="btn btn-primary" onClick={() => this.stepOne()}>
                Generate Possible State Transitions
              </button>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="3">
          </MDBCol>

        </MDBRow>

        <MDBRow>
          <MDBCol lg="3">
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="card-body z-depth-3" id="renderTwo" style={{ marginTop: "3rem", textAlign: "center"}}>
              <button type="button" className="btn btn-success" onClick={() => this.stepTwo()}>
                Generate Constraint Transactions
              </button>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="3">
          </MDBCol>

        </MDBRow>

        <MDBRow>
          <MDBCol lg="3">
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="card-body z-depth-3" id="renderThree" style={{ marginTop: "3rem", textAlign: "center"}}>
              <button type="button" className="btn btn-warning" onClick={() => this.stepThree()}>
                Filter Constraint Transactions
              </button>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="3">
          </MDBCol>

        </MDBRow>

        <MDBRow>
          <MDBCol lg="3">
          </MDBCol>

          <MDBCol lg="6">
            <MDBCard className="card-body z-depth-3" id="renderFour" style={{ marginTop: "3rem", marginBottom: "3rem", textAlign: "center"}}>
              <button type="button" className="btn btn-danger" onClick={() => this.stepFour()}>
                Generate Next States
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
