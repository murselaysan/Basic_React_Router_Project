// import React from 'react';

// const Message = ({ match }) => (
//   <div>
// {console.log(match)}
//   <h3>Message with ID {match.params.id}</h3>
//   </div>
// );

// export default Message;

import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.match)}
        <h3>Message with ID {this.props.match.params.id}</h3>
      </div>
    );
  }
}
