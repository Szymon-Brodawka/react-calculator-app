import { useReducer } from "react"

const ACTIONS = 
{
  ADD_DIGIT: 'add-didgit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR_ALL: 'clear-all',
  CLEAR_DIGIT: 'clear-digit',
  EVALUATE: 'equal',
  
}

function reducer(state, action)
{
  switch(action)
  {

  }
}

function App() 
{
  [
    { previousOperand, currentOperand, operation }, 
    dispatch
  ] = useReducer(reducer, {})
  
  return (
    <div className="container mx-auto flex justify-center">
      <div className="bg-neutral-700 text-neutral-100 text-2xl grid grid-cols-4 gap-6 rounded-3xl p-5">
        <div className="flex flex-col gap-3 col-span-4 h-[8rem]">
          <p className="ml-auto">{ previousOperand } { operation }</p>
          <p className="ml-auto">{  currentOperand }</p>
        </div>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">AC</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">()</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">%</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">/</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">7</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">8</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">9</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">x</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">4</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">5</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">6</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">-</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">1</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">2</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">3</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">+</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">0</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">,</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">C</button>
        <button className="bg-sky-800 rounded-xl py-2 px-4 text-center hover:bg-sky-700">=</button>
      </div>
    </div>
  )
}

function calculate()
{
  //Get the number
  //Get the operand
  //Get next number, do calculations and show the effect on the screen
}

export default App
