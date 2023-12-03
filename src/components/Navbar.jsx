import useLogout from '../hooks/useLogout';
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from './../hooks/useGlobalContext';

function Navbar() {

    const { user } = useGlobalContext()
    const { logout, error } = useLogout()

    if (error) {
        alert("Log out error")
    }

    return (
        <div className='flex items-center justify-between bg-gray-400 p-4 nav'>
            <Link to="/" className='text-2xl'>Counter</Link>
            <nav className='flex items-center gap-[10px]'>
                <NavLink to="/">Home</NavLink>
                <span>|</span>
                <NavLink to="/about">About</NavLink>
                <span>|</span>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className='flex items-center gap-4'>
                <p className='text-xs bg-gray-300 px-2 py-1 rounded'>Welcome <span className='font-bold'>{user.displayName}</span> !</p>
                <button onClick={logout} className="bg-slate-900 logout hover:bg-slate-700 text-white font-bold py-1 px-2 rounded text-[10px]">Log out</button>
            </div>
        </div>
    )
}

export default Navbar