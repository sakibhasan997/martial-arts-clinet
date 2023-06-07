import React from 'react';
import logo from '../../../assets/assignment-12-img/logo/logo-wide.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const user = true;


    const navLink = <>
        <li><NavLink title='Home' to='/'>Home</NavLink></li>
        <li><NavLink title='Instructors' to='/instructors'>Instructors</NavLink></li>
        <li><NavLink title='Classes' to='/classes'>Classes</NavLink></li>
        {user ?
            <>
                <li><NavLink title='Dashboard' to='/dashboard'>Dashboard </NavLink></li>

            </>
            :
            ' '
        }
    </>
    return ( 
        <>
            <div className="navbar lg:px-44 bg-white fixed z-10 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img title='Logo' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <br />
                <div className="navbar-end">

                    {!user ?
                        <>
                            <button title='LogOut' className="btn  my-btn" >Log Out</button>
                        </>
                        :
                        <Link to='/login' title='Login' className="btn my-btn">Login</Link>
                    }
                </div>
                <br />
                {
                    user && <div className='ms-5 w-[55px] h-[55px]  '>
                        <img src='' className=' cursor-pointer w-[55px] h-[45px] object-fill rounded-full bg-black' />
                    </div>

                }

            </div>
        </>
    );
};

export default Navbar;