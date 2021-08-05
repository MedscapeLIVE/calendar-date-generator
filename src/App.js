import React, { Component } from 'react';
// import Form from './Components/Form';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accesstoken: '',

      eventid: '',
      eventName: '',
      eventStartDate: '',
      eventStartTime: '',
      eventEndDate: '',
      eventEndTime: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://api-na.eventscloud.com/api/v2/global/authorize.json?accountid=8388&key=7ebf25bb8970ffeabb6f426fe3072e4ebc25bfce')
      .then(response => {
        this.setState({ accesstoken: response.data.accesstoken });
      })
      .catch(error => console.log(error));
  }

  onChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getEvent = () => {
    const url = `https://api-na.eventscloud.com/api/v2/ereg/getEvent.json?accesstoken=${this.state.accesstoken}&eventid=${this.state.eventid}&customfields=true`;

    axios
      .get(url)
      .then(response => {
        const data = response.data;

        console.log(data);

        this.setState({
          ...data,
          eventName: data.name,
          eventStartDate: data.startdate,
          eventStartTime: data.starttime,
          eventEndDate: data.enddate,
          eventEndTime: data.endtime,
        });
      })
      .catch(error => console.log(error));
  };

  updateEvent = () => {
    const googleDate = 'date sent through app';
    const outlookDate = 'date sent through app';
    const yahooDate = 'date sent through app';

    const url = `https://api-na.eventscloud.com/api/v2/ereg/updateEvent.json?accesstoken=${this.state.accesstoken}&eventid=${this.state.eventid}&143317=${googleDate}&143320=${outlookDate}&143319=${yahooDate}`;

    axios
      .put(url, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, PUT, POST' } })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <input type='number' name='eventid' value={this.state.eventid} onChange={this.onChange}></input>
        <button onClick={this.updateEvent}>Search</button>

        <p>Event ID: {this.state.eventid}</p>
        <p>Event Name: {this.state.eventName}</p>
        <p>Event Start Date: {this.state.eventStartDate}</p>
        <p>Event Start Time: {this.state.eventStartTime}</p>
        <p>Event End Date: {this.state.eventEndDate}</p>
        <p>Event End Time: {this.state.eventEndTime}</p>
      </div>
    );
  }
}

export default App;
