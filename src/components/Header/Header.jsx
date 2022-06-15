import React from 'react';
import headerLogo from "../Header/bird.jpg"
const Header = () => {
    return (
        
        <header className='header'>
            <div className='all_st'>
                <div className='left_side'>
                                <img src={headerLogo} alt="Bird Logo" className='logo' />
                </div>
                <div className='centre'>
                        <nav className='tags'>
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="">All posts</a>
                        </nav>
                </div>
                <div className='buttons right_side'>
                            <button>Login</button>
                            <button>Register</button>
                </div>
                    
                   
            </div>
        </header>
        
    );
};

export default Header;