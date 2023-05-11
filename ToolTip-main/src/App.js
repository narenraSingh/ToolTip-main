import React from "react";
import "./style.css";
import Tooltip from "./tooltip";

// APP COMPONENT
class App extends React.Component{


  constructor(){
    super();
    this.state ={
      position: "top",
      hovering: false
    };
  }

  // function to Handle_Click
  handleClick = (pos) =>{
    this.setState({
      position: pos
    })
  };

  // function to Handel_Mouse_Enter
  handleMouseEnter = () =>{
    this.setState({hovering: true});
  };

  // function to Handel_Mouse_Leave
  handleMouseLeave = () =>{
    this.setState({hovering: false});
  };



  render(){
    return (
      <div  className="App">
        <div className="btn-position">
          <div className="grp-name">
            Choose the position for hovering
          </div>
                    {/* BUTTONS WHICH WILL APPEAR ON TOP */}
          <button
          className={this.state.position === "top" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("top")}}
          >
            Top
          </button>

          <button
          className={this.state.position === "left" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("left")}}>
            Left
          </button>

          <button
          className={this.state.position === "right" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("right")}}>
            Right
          </button>

          <button
          className={this.state.position === "down" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("down")}}>
            Bottom
          </button>
        </div>

        {/* BUTTON CONTAINER WHICH WILL BE USED FOR HOVERING */}
        <div id="button-container">
          <button
          className="btn hover-btn"
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me!!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position}  />}
        </div>

          {/* FOR SHOWING COPYRIGHTS !!! */}
        <div>
          <h5 className="copyright">
            Copyright 2023 Narendra singh. All Rights Reserved!
          </h5>
        </div>

      </div>
    );
  }
}

export
 default App;
