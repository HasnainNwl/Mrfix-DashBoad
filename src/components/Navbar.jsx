import React, { useState } from 'react';
const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [appDropdownOpen, setAppDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleAppDropdown = () => {
        setAppDropdownOpen(!appDropdownOpen);
    };


    return (



        <>
            <nav className="flex pt-1 px-5 justify-between items-center bg-white">
                <div className="flex px-5 items-center justify-center mb-4 ml-4 gap-2 pt-3">

                    <svg className='cursor-pointer lg:block hidden' width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>icon</title>
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                <stop stopColor="#5A8DEE" offset="0%" />
                                <stop stopColor="#699AF9" offset="100%" />
                            </linearGradient>
                            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                                <stop stopColor="#FDAC41" offset="0%" />
                                <stop stopColor="#E38100" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g id="Pages" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
                                <g id="Login" transform="translate(519.000000, 244.000000)">
                                    <g id="Logo" transform="translate(148.000000, 42.000000)">
                                        <g id="icon" transform="translate(0.000000, 4.000000)">
                                            <path d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z" id="Combined-Shape" fill="#4880EA" />
                                            <path d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z" id="Combined-Shape2" fill="url(#linearGradient-1)" />
                                            <rect id="Rectangle" fill="url(#linearGradient-2)" x={0} y={0} width="7.68181818" height="7.68181818" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h1 className="font-bold lg:block hidden text-3xl cursor-pointer text-gray-500">Frest</h1>
                    <a className="lg:hidden inline-block py-2 px-4 no-underline px-0 xl:me-6" href="javascript:void(0)">
                        <i className="bx bx-menu bx-sm" />
                    </a>

                </div>

                <ul className='flex items-center lg:mx-5 sm:mx-2 gap-5'>
                    <li className="navbar-search-wrapper me-2 xl:me-0">
                        <a className="inline-block py-2 px-4 no-underline search-toggler" href="javascript:void(0);">
                            <i className="bx bx-search bx-sm" />
                        </a>
                    </li>
                    <li className="dropdown-shortcuts navbar-dropdown relative me-2 xl:me-0">
                        <a onClick={toggleAppDropdown} className="inline-block py-2 px-4 no-underline inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1 hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <i className="bx bx-grid-alt bx-sm" />
                        </a>
                        {appDropdownOpen && (
                            <div className="absolute left-0 z-50 float-left hidden list-reset py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-end py-0">
                                {/* ... (your existing dropdown content) */}
                            </div>
                        )}
                    </li>

                    <li className="relative group">
                        <a href="javascript:void(0);" className="inline-block py-2 px-4 no-underline" onClick={toggleDropdown}>
                            <i className="bx bx-bell bx-sm" />
                        </a>
                        {isDropdownOpen && (
                            <ul className="absolute left-0 z-50 mt-2 bg-white border border-gray-300 rounded py-2 px-4">
                                <li className="py-2">
                                    <a href="#">Notification 1</a>
                                </li>
                                <li className="py-2">
                                    <a href="#">Notification 2</a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <a className="py-2" href="javascript:void(0);" data-bs-toggle="dropdown">
                            <img src="src/assets/images/2.png" className="rounded-full w-8 h-auto" alt="User Avatar" />
                        </a>
                    </li>
                </ul>



            </nav>








        </>




    );
}

export default Navbar;


