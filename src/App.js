import React, { Component } from 'react';
import Form from "./Components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventid: '',
    };
  }

  render() {
    return <Form/>;
  }
}

export default App;
