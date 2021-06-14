import React from 'react'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
          minutes: 0,
          seconds: 0,
          paused: false,
          timerRunning: false,
          timesUp: false
        }
        this.timerStart = this.timerStart.bind(this)
        this.addMinutes = this.addMinutes.bind(this)
        this.addSeconds = this.addSeconds.bind(this)
        this.timerReset = this.timerReset.bind(this)
        this.timerPause = this.timerPause.bind(this)
    }

    addMinutes(val){
        this.setState((prevState) => {
            return {
                minutes: prevState.minutes + val
            }
        })
    }

    addSeconds(val){
        this.setState((prevState) => {
            let addedSeconds = prevState.seconds + val
            if(addedSeconds > 59){
                let secondsDiff = addedSeconds - 60
                return {
                    seconds: secondsDiff,
                    minutes: prevState.minutes + 1
                }
            }
            return {seconds: addedSeconds}
        })
    }

    timerStart(){
        if (this.state.timerRunning){
            console.log('hittt')
            return
        }

        this.setState({
            paused: false,
            timerRunning: true
        })

        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                seconds: seconds - 1
                }))
            }

            if (seconds === 1){
                this.setState({
                    timesUp: true
                })
            }

            if (seconds === 0) {
                if (minutes === 0) {

                clearInterval(this.myInterval)
                } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
                }
            }

            if (this.state.paused){
                let pausedSeconds = seconds
                let pausedMinutes = minutes

                clearInterval(this.myInterval)

                this.setState({
                    minutes: pausedMinutes,
                    seconds: pausedSeconds
                })
            }

            }, 1000)
    }

    timerReset(){
        this.setState({
            seconds: 0,
            minutes: 0,
            timerRunning: false,
            timesUp: false
        })
    }

    timerPause(){
        console.log(this.state.timerRunning)
        if (!this.state.paused) {
            this.setState({
            paused: true,
            timerRunning: false
            })
        } else{
            this.timerStart()
        }
    }

    render () {
        const { minutes, seconds, timesUp } = this.state
        return (
            <div>
                <div className="timer-display">
                {timesUp ? ('time!') : ( `${minutes}:${ seconds < 10 ? `0${ seconds }` : seconds }`) }
                </div>

                <div className='timer-button-div'>
                    <button
                    type="button"
                    className="timer-addtime-button"
                    style={{background: '#ff7a18'}}
                    onClick={() => {this.addMinutes(1)}}
                    >
                    1:00
                    </button>

                    <button
                    type="button"
                    className="timer-addtime-button"
                    style={{background: '#b60d2c'}}
                    onClick={() => {this.addSeconds(30)}}
                    >
                    :30
                    </button>

                    <button
                    type="button"
                    className="timer-addtime-button"
                    style={{background: '#750e4b'}}
                    onClick={() => {this.addSeconds(7)}}
                    >
                    :07
                    </button>

                    <button
                    type="button"
                    className="timer-addtime-button"
                    style={{background: '#3c1b66'}}
                    onClick={() => {this.addSeconds(5)}}
                    >
                    :05
                    </button>
                </div>

                <div className="timer-button-div">
                    <button
                    type="submit"
                    className="timer-command"
                    style={{background: '#2b256f'}}
                    onClick={this.timerStart}
                    >
                    Go!
                    </button>

                    <button
                    type="submit"
                    className="timer-command"
                    style={{background: '#244b85'}}
                    onClick={this.timerPause}
                    >
                    Pause
                    </button>

                    <button
                    type="submit"
                    className="timer-command"
                    style={{background: '#138cb1'}}
                    onClick={this.timerReset}
                    >
                    Reset
                    </button>
                
                </div>
            </div>
        )
    }
}

export default Timer
