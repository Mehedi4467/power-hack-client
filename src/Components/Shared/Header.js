import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../Images/Logo/logo.png';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 py-2 px-10  shadow-lg">
                <div className="flex-1">
                    <Link to='/' className="normal-case text-xl">
                        <img className='w-20' src={logo} alt="power hack logo" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <p className='mr-10 font-semibold'>Paid Total : <span className='text-orange-500'>10000</span></p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10  rounded-full">
                                <i className="text-xl pt-1 fa-solid fa-user"></i>
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to='/'>Settings</Link></li>
                            <li><Link to='/'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;