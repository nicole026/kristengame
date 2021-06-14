import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div id="all-circles">
        
        <Link to="/timer">
          <div className='circle'>
          <div className='hover-div' >
          <div className='circle' style= {{background: '#ff7a18'}}>
            <div className='page-label' 
            >
              timer
            </div>  
          </div>
          </div>
          </div>
        </Link>

        <Link to="/generator">
        <div className='circle'>
          <div className='hover-div' style= {{padding: '30px'}}>
        <div className='circle'
        style={{background: '#af002d'}}>
            <div className='page-label'>
              generator
            </div>  
          </div>
          </div>
          </div>
        </Link>

        <Link to="/inspiration">
          <div className='circle'>
          <div className='hover-div' style= {{padding: '30px'}}>
          <div className='circle' style={{background: '#138cb1'}}>
            <div className='page-label' 
              >
              inspiration
            </div>  
          </div>
          </div>
          </div>
        </Link>

        <Link to="/lorumipsum">
          <div className='circle'>
          <div className='hover-div' style= {{padding: '15px'}}>
          <div className='circle' style={{background: '#34306f'}}>
            <div className='page-label'>
              about
            </div>  
          </div>
          </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Home
