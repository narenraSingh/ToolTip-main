import React from "react";

//  TWO FUNCTIONS FOR HANDLING THE POSITION FOR HOVERING
class Tooltip extends React.Component {
  class = () => {
    return `${this.props.position}`;
  };

  render() {
    return (
      <div className={`${this.class()}`}>
        you are hovering on "{this.props.position}" position!
      </div>
    );
  }
}

export default Tooltip;
