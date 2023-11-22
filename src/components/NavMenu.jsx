import React from 'react'

import { Link } from "react-router-dom";
const NavMenu = () => {
    return (
        <aside className="sm:px-4 bg-white" >
            <div className="">
                <ul className="flex text-lg gap-6 px-10 py-4" >
                    {/* Page */}
                    <li className='active:bg-blue-100'>
                        <Link to="/" className="flex items-center justify-center  gap-2 ">
                            <i className="menu-icon tf-icons bx bx-home-circle" />
                            <div data-i18n="Page 1">Page 1</div>
                        </Link>
                    </li>
                    <li >
                        <Link to="page2" className="flex items-center justify-center mb-4 ml-4 gap-2 ">
                            <i className="menu-icon tf-icons bx bx-detail" />
                            <div data-i18n="Page 2">Page 2</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>

    )
}

export default NavMenu