import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length; 
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this,this.handleChange} name="message" id="message" />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
