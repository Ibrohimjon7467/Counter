import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex items-center justify-between bg-gray-400 h-16 px-4'>
            <Link to="/" className='text-2xl'>Counter</Link>
            <nav className='flex items-center gap-[10px]'>
                <NavLink to="/">Counter</NavLink>
                <span>|</span>
                <NavLink to="/about">About</NavLink>
                <span>|</span>
                <NavLink to="/contact">Contact</NavLink>
                <Link to="/login"><button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 ml-6 rounded text-xs">Log in</button></Link>
            </nav>
        </div>
    )
}

export default Navbar