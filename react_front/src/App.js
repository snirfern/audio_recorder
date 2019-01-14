import React, { Component } from 'react';
import Records from '../src/containers/records'
import { connect } from 'react-redux';
import * as actions from '../src/store/actions'
import Spinner from  '../src/components/spinner/spinner';

class App extends Component {


constructor(props){
  super(props);
    this.props.recordsInit();

}
componentWillUpdate(nextProps, nextState){
  console.log(nextProps)
  
  return (this.props.records !== nextProps.records); 
}
componentDidMount(){


}
 
  render() {


   
    return (
      <div className="App">

      {this.props.isLoading}
     {!this.props.isLoading ?   <Records audios = {   this.props.records }/> : <Spinner/>}
      
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    some : state.name,
    records : state.records,
    isLoading : state.loading
}
}

const mapDispatchToProps = dispatch=>{

  return{
    recordsInit : ()=>dispatch(actions.fetchRecords())
}

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
