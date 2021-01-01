import React from 'react'
import {present2list as list} from '../lists'

class Present1 extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 1,
      question: `Select a button to begin! (Hot Tip: dont't use any punctuation!)`,
      answer: '',
      hint: '',
      successes: 0,
      win: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hint = this.hint.bind(this)
  }

  handleClick(e) {
    this.setState({
      selected: e.target.name,
      question: list[e.target.name].question,
      hint: '',
      answer: '',
    })
  }

  handleChange(e) {
    this.setState({
      answer: e.target.value,
    })
  }

  hint() {
    this.setState({
      hint: list[this.state.selected].hint,
    })
  }

  handleSubmit() {
    let answer = this.state.answer.toLowerCase()
    if (this.state.successes === 16) {
      this.setState({
        win: true,
      })
    }

    if (answer === list[this.state.selected].answer) {
      if (!list[this.state.selected].success) {
        this.setState((prevState) => {
          return {
            answer: '',
            successes: prevState.successes + 1,
          }
        })
      }
      list[this.state.selected].success = true
    }
  }

  render() {
    return (
      <div className="indiv-present">
        <div className="all-buttons">
          {Object.keys(list).map((element) => {
            return (
              <div key={element} className="indiv-present">
                <button
                  id={element}
                  type="button"
                  name={element}
                  className={`quizbutton${
                    this.state.selected === `${element}` ? '-selected' : ''
                  }`}
                  style={
                    list[`${element}`].success === true
                      ? {backgroundColor: '#58c6ce'}
                      : {backgroundColor: '#353535'}
                  }
                  onClick={(e) => {
                    this.handleClick(e)
                  }}
                >
                  {list[element].char}
                </button>
              </div>
            )
          })}
        </div>

        {this.state.win ? (
          <div className="won">
            <h1 style={{color: '#af002d', marginBottom: '2px'}}>
              YELL HEAH U WIN!
            </h1>
            <h4>C0J9-TRMR-8TC8-8KRH</h4>
            <h3>To Use This Code:</h3>
            <h5>Make sure your Nintendo Switch is up to date</h5>
            <h5>
              From the Ninendo Switch HOME menu, select the Nintendo eShop icon
            </h5>
            <h5>Select Enter Code on the left side of the screen</h5>
            <h5>Enter the code above and hit OK!</h5>
          </div>
        ) : (
          <div className="quiz-field">
            <label>{this.state.question}</label>
            <label style={{fontSize: '15px'}}>
              {this.state.hint}
              <span style={{color: '#d9dedc'}}>.</span>
            </label>
            <input
              name="name"
              value={this.state.answer}
              onChange={(e) => {
                this.handleChange(e)
              }}
              autoComplete="off"
            />
            <div className="buttons">
              <button
                type="submit"
                className="submitbutton"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
              <button type="submit" className="hintbutton" onClick={this.hint}>
                Hint
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Present1
