import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import './App.css'
const Context=createContext()
function App() {
 return(
  <Counter/>
 )
}
function Counter(){
 
  const[count,setCount]=useState(0)
  return(<> 
    {count}
    <Context.Provider value={{setCount}}>
    <Increase/>
    <Decrease/>
    </Context.Provider>
  </>
  )
}
function Increase(){
const {setCount}=useContext(Context)

function increase(){
setCount(c=>c+1)}
    return(
    <>
    <button onClick={increase}>Inc</button>
    </>
    )
}
    
function Decrease(){
const {setCount}=useContext(Context)
   function decrease(){
setCount(count=>count-1)
}
  
    return(
    <>
    <button onClick={decrease}>Dec</button>
    </>
    )
}
  
export default App
