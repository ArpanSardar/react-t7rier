import React from 'react';
import { connect } from 'react-redux';
import {getFlightDetails} from '../Actions/flightActions'
import {city} from '../AutoCompleteData/data'
import {  Icon, Input, Button, AutoComplete,DatePicker, Alert,message} from 'antd';
import 'antd/dist/antd.css';

import '../style.css'

class SearchComponent extends React.Component{
  state={
    searchResult:[],
    sourceCity:'',
    desticationCity:'',
    travelDate:'',
    returnDate:''
  }



  searchFlight=()=>{
    // if(this.validateRequiredFields()){
      if(this.state.sourceCity && this.state.desticationCity && this.state.travelDate){
    var _searchObject={
      sourceCity= this.state.sourceCity,
      destinationCity= this.state.destinationCity,
      travelDate= this.state.travelDate,
      returnDate= this.state.returnDate
    }

    this.props.getFlightDetails(_searchObject);
      }
      else{
        message.warning('Please provide all the mandatory fields');
      }
    // }
  }

  onchangeHandler=(val,propName)=>{
this.setState({[propName]:val}) ;
  }
onChangeDestinationHandler=val=>{
  this.setState({destinationCity: val})
}
onChangeSourceHandler=val=>{
  this.setState({sourceCity: val})
}

  render(){
    return(
      <React.Fragment>
      <div className='container'>
      {this.props.error.error ? (
        <Alert message={this.props.error.error} type="error" />
      ) : null}
      <table className='tblSearchComponent'>
      <tr>
      <td>Source City:<span style={{color:'red', marginLeft:10, fontSize:20}}>*</span>
      <br/>
      <AutoComplete
        dataSource={city}
        placeholder='Source city'
        name='sourceCity'
        value={this.state.sourceCity}
        onChange={this.onChangeSourceHandler}
        allowClear={true}
      />
      </td>
      <td>Destination City:<span style={{color:'red', marginLeft:10, fontSize:20}}>*</span>
      <br/>
      <AutoComplete
        dataSource={city}
        placeholder='Destination city'
        name='destinationCity'
        value={this.state.destinationCity}
        // onChange={(val)=>this.onChangeHandler(val,'destinationCity')}
        onChange={this.onChangeDestinationHandler}
        allowClear={true}
      />
      </td>
      <td rowSpan={2}>
      <Button type="primary" icon="search" onClick={this.searchFlight}>
      Search
    </Button>
      </td>
      </tr>
      <tr>
      <td>Travel Date:<span style={{color:'red', marginLeft:10, fontSize:20}}>*</span><br/>
      <DatePicker 
      name='travelDate'
      onChange={(date,dateString)=>this.onchangeHandler(dateString,'travelDate')} />
      </td>
      <td>Return Date:<br/>
      <DatePicker 
      name='rturnDate'
      onChange={(date,dateString)=>this.onchangeHandler(dateString,'rturnDate')} />
      </td>
      </tr>
      </table>
</div>
      </React.Fragment>
    );
  }

}

// export default SearchComponent;

const mapStateToProps = state => ({
  flights: state.flights.flights,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getFlightDetails }
)(SearchComponent);