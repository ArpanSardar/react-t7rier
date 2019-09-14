import React from 'react';
import { connect } from 'react-redux';
import {  Table, Button} from 'antd';
import 'antd/dist/antd.css';

import '../style.css'

const columns = [
  {
    title: 'Flight Number',
    dataIndex: 'FlightNumber',
  },
  {
    title: 'Airline Name',
    dataIndex: 'AirlineName',
  },
  {
    title: 'Departure Time',
    dataIndex: 'DepartureTime',
  },
  {
    title: 'Arrival  Time',
    dataIndex: 'ArrivalTime',
  },
  {
    title: 'Duration',
    dataIndex: 'Duration',
  },
  {
    title: 'No. Of Stops.',
    dataIndex: 'NoOfStops',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
  }
];

class ResultComponent extends React.Component{
  state={
    searchResult:[]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.flights !== this.props.flights) {
      this.setState({
        searchResult: this.props.flights
      });
    }
  }

  render(){
    return(
      <React.Fragment>
      <Table columns={columns} dataSource={this.state.searchResult} />
      </React.Fragment>
    );
  }

}

// export default ResultComponent;

const mapStateToProps = state => ({
  flights: state.flights.flights
});

export default connect(
  mapStateToProps,
  {  }
)(ResultComponent);