import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> Give Feedback </h1>
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0)
    return <p> No feedback given </p>
  else {
    const allClicks = props.good + props.neutral + props.bad
    const averageClicks = (props.good - props.bad)/(allClicks);
    const positiveClicks = (props.good / allClicks) * 100 + "%";
  
    return (
      <div>
        <table>
          <tbody>
            <tr><td><Statistic text="good" value={props.good}></Statistic></td></tr>
            <tr><td><Statistic text="neutral" value={props.neutral}></Statistic></td></tr>
            <tr><td><Statistic text="bad" value={props.bad}></Statistic></td></tr>
            <tr><td><Statistic text="all" value={allClicks}></Statistic></td></tr>
            <tr><td><Statistic text="average" value={averageClicks}></Statistic></td></tr>
            <tr><td><Statistic text="positive" value={positiveClicks}></Statistic></td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const Statistic = (props) => (
  <p>{props.text} {props.value}</p>
)

export default App
