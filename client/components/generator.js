import React from 'react'
import {adjectives, nouns, sevenSecond, pyramid} from '../utility/generatorWords'

class Generator extends React.Component {
    constructor() {
        super()
        this.state = {
            display: ''
          }
          this.charades = this.charades.bind(this)
          this.sevenSecond = this.sevenSecond.bind(this)
          this.pyramid = this.pyramid.bind(this)
          this.clear = this.clear.bind(this)
    }

    charades (){
        let charadesList = ''

        for (let i=0; i<5; i++){
            let selectedWordIdx = Math.floor(Math.random() * nouns.length)

            charadesList += ` ${nouns[selectedWordIdx]}\n`
        }

        this.setState({
            display: charadesList
        })

    }

    sevenSecond(){
        let selectedWordIdx = Math.floor(Math.random() * sevenSecond.length)

        this.setState({
            display: sevenSecond[selectedWordIdx]
        })
    }

    pyramid() {

        let selectedWordIdx = Math.floor(Math.random() * pyramid.length)

        let round = pyramid[selectedWordIdx]

        let roundList = ''

        round.forEach( (e) => {
            roundList += ` ${e}\n`
        })

        this.setState ({
            display: roundList
        })

 
    }

    clear () {
        this.setState({
            display: ''
        })
    }

render () {
    return (
        <div style={{color: "white", whiteSpace: "pre-wrap"}}>
            <div id='display'>
            {this.state.display}
            </div>
        <button
        type="submit"
        className="generator-button"
        onClick={this.charades}
        >
        charades
        </button>

        <button
        type="submit"
        className="generator-button"
        onClick={this.sevenSecond}
        >
        7 second challenge
        </button>

        <button
        type="submit"
        className="generator-button"
        onClick={this.pyramid}
        >
        pyramid
        </button>

        <button
        type="submit"
        className="generator-button"
        onClick={this.clear}
        >
        clear
        </button>

        </div>
    )
}
}

export default Generator