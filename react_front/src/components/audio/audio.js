import React from 'react'


const audio = (props)=>{

return(
 
<div>
  {props.length}
  <audio controls="controls" src = {"data:audio/wav; codecs=opus;base64,"+props.src} />
</div>


)


}


export default audio;