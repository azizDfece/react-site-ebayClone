import { Link } from 'react-router-dom'
import '../css/header.css'




function Header() {


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
                    <p className='top-header-dropdown'>Watchlist  ^
                        <div className='t-h-d'>لا يوجد اشياء</div>
                    </p>
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