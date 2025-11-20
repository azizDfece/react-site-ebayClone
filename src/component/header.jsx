import { Link } from 'react-router-dom'
import '../css/header.css'

import { useEffect, useRef } from 'react'



function Header() {
    const fDdHeader = useRef(null)
    const watchList = useRef(null)

    useEffect(() => {
        const trigger = watchList.current
        const dropdown = fDdHeader.current

        if (!trigger) return


        function handledropdwn1() {

            dropdown.style.display = "block"
        }
        function handleClickOutside(e) {
            console.log(e.target);
            if (dropdown && !dropdown.contains(e.target)
                && !trigger.contains(e.target)) {
                dropdown.style.display = 'none'
            }

        }


        trigger.addEventListener("click", handledropdwn1)
        document.addEventListener("click", handleClickOutside)

        return () => {
            trigger.removeEventListener("click", handledropdwn1)
            document.removeEventListener('click', handleClickOutside)
        }

    }, [])

    return (


        <header>
            <div className="top-header">
                <div className="left-top-header">
                    <p><span>Hi </span>
                        <a href="#">Sign in</a> <span>or </span>
                        <a href="#">register</a></p>
                    <a href="#" className='links'>Daily Deals</a>
                    <a href="#" className=''>Brand Outlet</a>
                    <a href="#" className=''>Gift Cards</a>
                    <a href="#" className=''>Help & Contact</a>
                </div>
                <div className="right-top-header">
                    <a href="#">Ship to</a>
                    <a href="#">Sell</a>
                    <div className='top-header-dropdown' ref={watchList}>Watchlist  ^
                        <div className='t-h-d' ref={fDdHeader}>لا يوجد اشياء</div>
                    </div>
                    <p className='top-header-dropdown2'>My ebay  ^</p>
                </div>
            </div>

            <div className="down-header">
                <div className="first-elements">
                    <img src="https://unsplash.it/100/100" alt="" className="logo" />
                    <select name="" id="" className="dropdown">
                        <option value="">تسوق حسب التصنيف</option>
                    </select>
                </div>
                <div className="midle-element">
                    <input type="text" />
                    <select name="" id="" className="search-input-dropdown">
                        <option value="">All Catgory</option>
                    </select>
                </div>
            </div>
        </header>
    )
}



export default Header