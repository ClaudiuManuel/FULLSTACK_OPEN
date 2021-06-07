import React, { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0));
  const [maxVotes, setMax] = useState(0)

  const handleClick = () => {
    const randomValue = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomValue)
  }

  const addVote = () => {
    const copy = [...points]
    copy[selected] += 1
    if(copy[selected] > copy[maxVotes]){
      setMax(selected)
    }
    setPoints(copy) 
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <button onClick={handleClick}>next</button>
      <button onClick={addVote}>vote</button>
      <p> has {points[selected]} points</p>
      <h1>Anectode with the most votes</h1>
      {anecdotes[maxVotes]}
    </div>
  )
}

export default App;
