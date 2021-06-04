import React, { useState } from 'react'

const App = () => {

  const [points, updatePoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0,4:0,5:0,6:0})

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const checkMostVotedEmpty = () => {
    const votedKeys = Object.values(points)
    
    for(var i=0;i<votedKeys.length;i++){
      if(parseInt(votedKeys[i]) > 0){
        console.log(parseInt(votedKeys[i]))
        return true
      }
    }
    return false
  }

  const randomSelect = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const vote = () => {
    const copy = {...points}
    copy[selected] += 1
    updatePoints(copy)
  }

  const getMostVotedKey = () => {
    const key = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);
    return anecdotes[key]
  }

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <Button handleClick = {randomSelect} anecdotes={anecdotes}/>
      <Vote handleClick = {vote} pointsArray={points} voteSelected={selected}/>
      <MostVotes mostVotes = {getMostVotedKey} checkEmpty = {checkMostVotedEmpty}/>
    </div>
  )
}

const Button = ({handleClick,anecdotes}) => {

  return(
    <div>
    <button onClick={handleClick}>click me!</button>
    </div>
    
  );

}

const Vote = ({handleClick,pointsArray,voteSelected}) => {
  console.log(pointsArray)
  
  return (  
    <div>
      <p>this anecdote has {pointsArray[voteSelected]} votes</p>
      <button onClick={handleClick}>Vote</button>
    </div>);
  
}

const MostVotes = ({mostVotes,checkEmpty}) => {
 
  if (checkEmpty()){
  return(
    <div>
      <h1>anecdote with the most votes</h1>
      <p>{mostVotes()}</p>
    </div>

  );
  }
  return(
    <div>not enough votes cast!</div>

  )

}

export default App