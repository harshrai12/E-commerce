import { ColorFactory } from 'antd/es/color-picker/color'
import React from 'react'
import { Link } from 'react-router-dom'


function Warning() {
  return (
    <div>
      <h1>You are not logged in!</h1>
      <Link to="/register"><p style={{color:'grey'}}>Click here to Register</p></Link>
      
    </div>
  )
}

export default Warning
