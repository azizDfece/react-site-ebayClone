import { Link } from 'react-router-dom'
import '../css/header.css'

import { useEffect, useRef } from 'react'



function Header() {
    const fDdHeader = useRef(null)
    const watchList = useRef(null)
    const myebay = useRef(null)
    const thd2 = useRef(null)

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
    useEffect(() => {
        const trigger = myebay.current
        const dropdown2 = thd2.current

        if (!trigger) return

        function handledisplaydropdown() {
            dropdown2.style.display = 'block'
        }
        function handleClickoutsie(e) {

            if (dropdown2 && !dropdown2.contains(e.target)
                && !trigger.contains(e.target)) {
                dropdown2.style.display = 'none'
            }

        }

        trigger.addEventListener("mouseover", handledisplaydropdown)
        document.addEventListener('click', handleClickoutsie)

        return () => {
            trigger.removeEventListener("mouseover", handledisplaydropdown)
            document.removeEventListener("click", handleClickoutsie)
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
                    <div className='top-header-dropdown2' ref={myebay}>My ebay  ^
                        <div className="t-h-d2" ref={thd2}>
                            <p>Summary</p>
                            <p>Recent viwed</p>
                            <p>Recent viwed</p>
                            <p>Bids/Offers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="down-header">
                <div className="first-elements">
                    <img src="https://unsplash.it/100/100" alt="" className="logo" />
                    <select name="" id="" className="dropdown">
                        <option value="">تسوق حسب تصنيف</option>
                    </select>
                </div>
                <div className="midle-element">
                    <input type="text" placeholder='Search for anything' />
                    <select name="" id="" className="search-input-dropdown">
                        <option value="">All Catgory</option>
                    </select>
                </div>
                <div className="last-element">
                    <button className="praimy-btn">Search</button>
                    <a href="#">Advanced</a>
                </div>
            </div>
        </header>
    )
}



export default Header