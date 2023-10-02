/** @format */
// import logo from "../../assets/images/logo.png";
//import img from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
const Nav = () => {
    const links = (
        <>
            <li className='text-sm font-semibold '>
                <Link to='/'>Home</Link>
            </li>
            <li className='text-sm font-semibold '>
                <Link to='/ourprotfolio'>Our Protfolio</Link>
            </li>
            <li className='text-sm font-semibold '>
                <Link to='/ourteam'>Our Team</Link>
            </li>
            <li className='text-sm font-semibold '>
                <Link to='/contactsus'> Contacts Us</Link>
            </li>
            <li className='text-sm font-semibold bg-[#F63E7B] rounded text-white'>
                <Link to='/login'> Login</Link>
            </li>
        </>
        //  {user ? (
        //         <>
        //             {/* <span>{user?.displayName}</span> */}
        //             <li>
        //                 <Link>Logout</Link>
        //             </li>
        //         </>
        //     ) : (
        //         <>
        //             <li>
        //                 <Link to='/login'>LogIn</Link>
        //             </li>
        //         </>
        //     )}
    );
    return (
        <div>
            <div className='navbar bg-[#FFF8F5] p-4 px-8'>
                <div className='navbar-start'>
                    <div className='dropdown  '>
                        <label
                            tabIndex={0}
                            className='btn btn-ghost lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-l dropdown-content mt-3 z-[1] p-2 shadow  bg-[#FFF8F5] rounded-box w-52'>
                            {links}
                        </ul>
                    </div>

                    <Link
                        to='/'
                        className='w-1/4'>
                        <img
                            src={logo}
                            alt='logo'
                        />
                    </Link>
                </div>
                <div className='navbar-end hidden lg:flex '>
                    <ul className='menu menu-horizontal px-1'>{links}</ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
