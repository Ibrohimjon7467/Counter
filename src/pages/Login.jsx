import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 mt-5">
      <h2 className="text-2xl mb-7">Log in</h2>
      <form className="flex flex-col gap-5">
        <label className="flex flex-col gap-3">
          <span>Email:</span>
          <input type="email" className="bg-slate-200 px-3 py-2 text-xs" placeholder="Enter your email" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Password:</span>
          <input type="password" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your password" />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mb-4">
          Log in
        </button>
      </form>
      <p className="text-xs">
        If you don't have an account, please &nbsp; <Link to="/signup" ><button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded text-xs">Sign up</button></Link>
      </p>
    </div>
  )
}

export default Login