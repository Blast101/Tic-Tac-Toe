import React from 'react'

function Square(Props) {
  return (
    <div className='square' style={
        {border:"2px solid  rgba(240, 239, 232, 0.941)",height:"150px",width:"100%",display:"flex",
        justifyContent:"center",alignItems:"center",cursor:"pointer",fontSize:"100px"}
        } onClick={Props.click}>
        <h5>
            {Props.value}
        </h5>
    </div>
  )
}

export default Square