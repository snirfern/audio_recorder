import React from 'react'


const audio = (props)=>{

return(
 
<div>
  {props.length}
  <audio controls="controls" src = {props.src} />
</div>


)


}


export default audio;