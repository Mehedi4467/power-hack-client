import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../Images/Logo/logo.png';
const Header = ({ totalBill }) => {


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
                        <p className='mr-10 font-semibold'>Paid Total : <span className='text-orange-500'>{totalBill || '00'} &#2547;</span></p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10  rounded-full">
                                {
                                    totalBill ? <i onClick={() => localStorage.removeItem('accessToken')} className="text-xl mt-[6px] fa-solid fa-right-from-bracket"></i> : <i className="text-xl mt-[6px] fas fa-sign-in"></i>
                                }


                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;