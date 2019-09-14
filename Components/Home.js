import React from 'react';
import ResultComponent from './ResultComponent'
import SearchComponent from './SearchComponent'

class Home extends React.Component{

  render(){
    return(
      <React.Fragment>
      <SearchComponent/>
      <ResultComponent/>
      </React.Fragment>
    );
  }

}

export default Home;