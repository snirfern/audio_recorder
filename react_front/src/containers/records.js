import React,{Component} from 'react'

import '../style.css'
import './records.css'
import Audio from '../components/audio/audio'

class Records extends Component{

  constructor(props){
    super(props)
    
  
  }

    render(){

const rows =this.props.audios.map(currItem=>{
  return (
  <div className="row" key={currItem.time}>

  <div className="col-md-4">
    <div className="date alert alert-success text-center" role="alert">{currItem.date.substring(0,currItem.date.indexOf('GMT'))}

    </div>
  </div>



<div className="col-md-4">
<div className="time alert alert-success text-center" role="alert">{currItem.time} <strong>[ms]</strong></div>
 
  </div>



  <div className="col-md-4">
  <div className="alert alert-success text-center" role="alert"><Audio src = {currItem.data} key={currItem.time}/></div>
  
  </div>
<hr ></hr>
    </div>

)
});
     
     /* <ul id="logs">
              <li className="alert alert-success"></li>
            </ul>*/
        return(

            <div className="container container_extra">

                <div className="row">

          <div className="col-sm">
            <div className="alert alert-primary text-center" role="alert"><strong>Date </strong></div>
           
          </div>



        <div className="col-sm">
            <div className="alert alert-primary text-center" role="alert"><strong>Time</strong></div>
         
          </div>
       


          <div className="col-sm">
            <div className="alert alert-primary text-center" role="alert"><strong>Records</strong></div>
          
          </div>

            </div>
            {rows}
</div>
        );
    }
}

export default Records;