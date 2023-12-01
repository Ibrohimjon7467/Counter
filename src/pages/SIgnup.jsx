import useSignup from "../hooks/useSignup"
import { useRef } from 'react';

function Signup() {

  const displayName = useRef()
  const email = useRef()
  const password = useRef()

  const { signup, error, user } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(displayName.current.value, email.current.value, password.current.value)

    displayName.current.value = ''
    email.current.value = ''
    password.current.value = ''
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 mt-5">
      <h2 className="text-2xl mb-7">Sign up</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          <span>Name:</span>
          <input ref={displayName} type="text" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your name" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Email:</span>
          <input ref={email} type="email" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your email" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Password:</span>
          <input ref={password} type="password" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your password" />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mb-4">
          Sign up
        </button>
        {error && <p>error</p>}
      </form>
    </div>
  )
}

export default Signup