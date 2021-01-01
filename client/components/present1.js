import React from 'react'
import {present1list as list} from '../lists'

class Present1 extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 1,
      question: `Select a button to begin! (Hot Tip: dont't use any punctuation!)`,
      answer: '',
      hint: ``,
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
      hint: ``,
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
            <h1 style={{color: '#af002d'}}>YELL HEAH U WIN!</h1>
            <h3>To Use This Code:</h3>
            <h4>Make sure your Nintendo Switch is up to date</h4>
            <h4>
              From the Ninendo Switch HOME menu, select Nintendo eShop icon
            </h4>
            <h4>Select Enter Code on the left side of the screen</h4>
            <h4>Enter the code above and hit OK!</h4>
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
        )}
      </div>
    )
  }
}

export default Present1
