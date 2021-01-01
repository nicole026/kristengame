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
              <div
                className="tear"
                style={{
                  transform: 'rotate(180deg)',
                  border: '3px #5f1d0e solid',
                  backgroundColor: '#efa83e',
                }}
              />
              <div
                className="tear"
                style={{
                  transform: 'rotate(270deg)',
                  border: '3px #5f1d0e solid',
                  backgroundColor: '#efa83e',
                }}
              />
            </div>
            <div
              className="box"
              style={{
                backgroundImage:
                  'linear-gradient(#253582, #1e5ce8, #75e5e8,#09a756, #c39618)',
              }}
            >
              <div className="stars">
                <div
                  className="ribbon"
                  style={{
                    backgroundImage:
                      'linear-gradient(35deg,  rgb(80 59 41), rgb(169 44 44), rgb(239, 168, 62) )',
                    borderLeft: '3px #5f1d0e solid',
                    borderRight: '3px #5f1d0e solid',
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Presents
