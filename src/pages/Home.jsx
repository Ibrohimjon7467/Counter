import { useState, useRef } from "react"
import { useReducer } from "react"

const changeState = (state, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state += 1
    case 'DECREMENT':
      return state -= 1
    default:
      return state
  }
}

function Home() {

  const [count, setCount] = useState(0)

  const inputNumber = useRef()

  const [state, dispatch] = useReducer(changeState, 0)

  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
      <h1 className=" text-8xl mb-[70px]">{state}</h1>
      <div className='flex gap-4 mb-4'>
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
    </div>
  )
}

export default Home