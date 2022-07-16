import React from "react";
import '../css/header.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="user-profile">
                <img src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-20.jpg" alt="User Logo" />
            </div>
            <div className="logger-name">
                Rohit Kumar
            </div>
        </div>
    )
}
export default Header;