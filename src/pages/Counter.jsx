import { useGlobalContext } from './../hooks/useGlobalContext';
import { useRef } from 'react';

function Counter() {

    const { counter, dispatch } = useGlobalContext()

    const inputNumber = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NUMBER', payload: +inputNumber.current.value })
        inputNumber.current.value = ''
    }


    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center'>
            <h1 className=" text-8xl mb-[70px]">{counter}</h1>

            <div className='flex gap-4 mb-4'>
                <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            </div>

            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="number" className='text-sm px-3 py-3 bg-slate-200' ref={inputNumber} placeholder='Enter number' />
                <button type='submit' className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    )
}

export default Counter