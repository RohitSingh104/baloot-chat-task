import React from 'react';
import '../css/footer.css';
import homeIcon from '../icon/Home.svg';
import filterIcon from '../icon/Filter.svg';
import searchIcon from '../icon/Search.svg';
import userAddIcon from '../icon/User_add.svg';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div>
                <img src={homeIcon} alt="Home-Icon" onClick={()=>alert("Home is clicked")}/>
            </div>
            <div>
                <img src={filterIcon} alt="Filter-Icon" onClick={()=>alert("Filter is clicked")}/>
            </div>
            <div>
                <img src={searchIcon} alt="Search-Icon" onClick={()=>alert("Search is clicked")}/>
            </div>
            <div>
                <img src={userAddIcon} alt="User-Add-Icon" onClick={()=>alert("UserAdd is clicked")}/>
            </div>

        </div>
    )
}

export default Footer;