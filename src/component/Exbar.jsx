import React from 'react'

function Exbar(props) {

    const color = props.l==1?"from-green-800 to-green-500":props.l==2?"from-yellow-800 to-yellow-500":"from-red-800 to-red-500" ;


  return (
   <>
    <div className=' w-[80%] rounded-full  h-fit bg-[#11111b] my-4 '>
        <div className={`w-1/${props.l} h-1 bg-gradient-to-r ${color} rounded-full`}
 ></div>
    </div>
   </>
  )
}

export default Exbar