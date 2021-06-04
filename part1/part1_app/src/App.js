import React, { useState } from 'react'

// const App = () => {

//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => {
//     setCounter(counter+1)
//   }

//   const decreaseByOne = () => {
//     setCounter(counter-1)
//   }

//   const resetCounter = () => {
//     setCounter(0)
//   }

//   console.log('rendering...', counter)

//   return (
//     <div>

//       <Button handleClick={increaseByOne} text="increase" />

//       <Button handleClick={decreaseByOne} text="decrease" />

//       <Button handleClick={resetCounter} text="reset" />

//       <DisplayClicks counter={counter} />

//     </div>
//   )
// }

// const DisplayClicks = ({counter}) => {

//   return(

//     <div>{counter}</div>

//   );


// }



const App = () => {

  //set two separate state pieces

  //state is now an object, set click updates the entire objects
  //functions below alter the object and use setClick to update the entire object
  const [right, setRight] = useState(0)
  const [left, setLeft] = useState(0)
  const [allClicks,setAll] = useState([])


  //whenever the right is clicked the string R is added to the allClicks 
  //array
  const setRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)

  }


  //when the left button is clicked the string L is concatenated to the end 
  //of the all clicks array
  const setLeftClick = () => {

    //object spread notation, copies all properties from the clicks object
    //when a property is specified and changed, it is added to the object
    setAll(allClicks.concat('L'))
    setLeft(left+1)

  }

 
  return (
    <div>
      {left}
      
      
      <Button handleClick={setLeftClick} text={"left"}/>
      <Button handleClick={setRightClick} text={"right"} />
        
     
      {right}
      <History allClicks = {allClicks}/>
    </div>
  )
}


//example of conditional display
//if there are no clicks in the click history
//it returns a message encouraging the user to engage
//if there are clicks, it displays the history of all clicks




const History = (props) => {

  if(props.allClicks.length === 0)
  {
    return(
      <div>
        app is used by pressing the left or right buttons!
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>

  )
}



const Button = ({handleClick,text}) => {

  return (

    <button onClick={handleClick}>
      {text}
    </button>

  );


}






export default App