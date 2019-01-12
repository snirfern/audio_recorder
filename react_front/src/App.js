import React, { Component } from 'react';
import Records from '../src/containers/records'
import { connect } from 'react-redux';
import * as actions from '../src/store/actions'
import Audio from './components/audio/audio'


class App extends Component {

constructor(props){
  super(props)
  
  this.state={
    isLoading : false
  }
}

componentWillUpdate(nextProps, nextState){
  console.log(nextProps)
  return (this.props.records !== nextProps.records); 
}
componentDidMount(){

  this.props.recordsInit();

}
 
  render() {
  let audioItems =  this.props.records.map((currAudioItem,index)=>{

   
   
      return <Audio src = {"http://localhost:8000/uploads"+currAudioItem.path+".wav"} key={index}></Audio>
   });
   
    return (
      <div className="App">
      <Records audios = {   this.props.records}/>
   
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    some : state.name,
    records : state.records
}
}

const mapDispatchToProps = dispatch=>{

  return{
    recordsInit : ()=>dispatch(actions.fetchRecords())
}

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
