import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaBookOpen, FaHome, FaIdCard, FaUserGraduate, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useQueries from '../Hooks/useQueries';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {

    const [cart] = useQueries();
    const { user } = useAuth();

    // TODO
    const [isAdmin] = useAdmin();

    const [isInstructors] = useInstructor();

    return (
        <div>
            <Helmet>
                <title>Martial Arts | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open max-w-[1600px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 py-20 w-80 h-full bg-[#2f6661] text-white">
                        {/* <li className=''><Link to='/dashboard/myclasses'> <FaHome /> Student Home</Link></li> */}

                        {
                            isAdmin ? <>
                                <li className='my-5'><NavLink to='/dashboard/manageClass'> <FaBook /> Manage Classes
                                    {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                </NavLink></li>
                                <li><NavLink to='/dashboard/allStudents'><FaUsers></FaUsers> Manage Users</NavLink></li>
                            </>
                                : <>
                                    {/* <li className='my-5'><NavLink to='/dashboard/myclasses'> <FaBook /> My Selected Classes
                                        <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink></li>
                                    <li><NavLink to='/'><FaIdCard /> My Enrolled Classes</NavLink></li> */}
                                </>
                        }
                        {
                            isInstructors ? <>
                                <li className='my-5'><NavLink to='/dashboard/manageClass'> <FaBook /> Instructors Classes
                                    {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                </NavLink></li>
                                <li><NavLink to='/dashboard/allStudents'><FaUsers></FaUsers>  Instructors</NavLink></li>
                            </> : <>
                                {/* <li className='my-5'><NavLink to='/dashboard/myclasses'> <FaBook /> My Selected Classes
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to='/'><FaIdCard /> My Enrolled Classes</NavLink></li> */}
                            </>
                        }
                        {/* {
                            user ? <>
                                <li className='my-5'><NavLink to='/dashboard/myclasses'> <FaBook /> My Selected Classes
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to='/'><FaIdCard /> My Enrolled Classes</NavLink></li>
                            </> : <></>
                        } */}

                        {
                            !isAdmin && !isInstructors ? <>
                                <li className='my-5'><NavLink to='/dashboard/myclasses'> <FaBook /> My Selected Classes
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to='/'><FaIdCard /> My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/'><FaWallet /> Payment</NavLink></li>
                            </> : <></>
                        }



                        <div className='divider'>OR</div>
                        <li><Link title='Home' to='/'><FaHome /> Home</Link></li>
                        <li><Link title='Instructors' to='/allinstructors'><FaUserGraduate /> Instructors</Link></li>
                        <li><Link title='Classes' to='/classes'><FaBookOpen /> Classes</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;