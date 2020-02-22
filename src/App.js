import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataRequest } from './actions/data'; 

class App extends Component {    
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return(
      <div>
        <h1>
          {this.props.data}
        </h1>
      </div>
    )
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
    return {
      data: state.data.test
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getDataRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)  