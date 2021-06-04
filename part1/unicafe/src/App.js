
import React, { useState } from 'react'
import reactDOM from 'react-dom'

const App = () => {

  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good+1)
  }

  const clickNeutral = () => {
    setNeutral(neutral+1)
  }

  const clickBad = () => {
    setBad(bad+1)
  }

  const calculateAverage = () => {
    return ((good+((-1)*(bad)))/(calculateTotal()))
  }

  const calculatePositive = () => {
    return (good/(calculateTotal())) * 100

  }

  const calculateTotal = () => {
    return good+bad
  }

  const returnGood = ()=> {
    return good
  }

  const returnBad = () => {
    return bad
  }

  const returnNeutral = () => {
    return neutral
  }

  if(calculateTotal()){
  return (

    <div>

      <h1>Give your feedback</h1>
        <Button text="good" handleClick={clickGood} />
        <Button text="neutral" handleClick={clickNeutral}/>
        <Button text="bad" handleClick={clickBad} />
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Stats text="good" statFunction={returnGood}/>
          <Stats text="neutral" statFunction={returnNeutral}/>
          <Stats text="bad" statFunction={returnBad} />
          <Stats text="average" statFunction={calculateAverage} />
          <Stats text="good" statFunction={calculatePositive}/>
        </tbody>
      </table>
    </div>
  );
  }

  return(
    <div>
       <h1>Give your feedback</h1>
      <Button text="good" handleClick={clickGood} />
      <Button text="neutral" handleClick={clickNeutral}/>
      <Button text="bad" handleClick={clickBad} />
      <h1>Statistics</h1>
      <p>no ratings yet</p>     

    </div>



  )
}

const Button = ({text,handleClick}) => {

  return(
    
    <button onClick={handleClick}>{text}</button>
    
  );

}

const Stats = ({text,statFunction}) => {
  
  return(
    <tr>
    <td>{text}</td>
    <td>{statFunction()}</td>
    </tr>
    

  );
  
}

export default App;
