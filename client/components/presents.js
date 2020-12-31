import React from 'react'
import {Link} from 'react-router-dom'

class Presents extends React.Component {
  render() {
    return (
      <div id="presents">
        <Link to="/present1">
          <div className="present">
            <div className="bow">
              <div className="tear" style={{transform: 'rotate(180deg)'}} />
              <div className="tear" style={{transform: 'rotate(270deg)'}} />
            </div>
            <div className="box" style={{backgroundColor: '#006aff'}}>
              <div className="ribbon" />
            </div>
          </div>
        </Link>

        <Link to="/present2">
          <div className="present">
            <div className="bow">
              <div className="tear" style={{transform: 'rotate(180deg)'}} />
              <div className="tear" style={{transform: 'rotate(270deg)'}} />
            </div>
            <div className="box" style={{backgroundColor: 'blue'}}>
              <div className="ribbon" />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Presents
