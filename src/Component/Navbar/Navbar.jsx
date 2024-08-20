import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { setSearchQuery  } from "../../Redux/moviesSlice";
import { useDispatch } from 'react-redux';
import './Navbar.scss';

function Navbar() {
    const [activeLink, setActiveLink] = useState('/');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const handleSearchChange = (e)=>{
        const value = e.target.value;
        setQuery(value);
        if (value) {
            dispatch(setSearchQuery(value));
        }
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbarWrapper container">
                    <div className="nav-left">
                        <Link to="/" className="logo">MovieDB</Link>
                        <button className="menu-toggle" onClick={toggleMenu}>
                            <span className="menu-icon">☰</span>
                        </button>
                    </div>
                    <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className={`nav-link ${activeLink === "/" ? "active" : ""}`} onClick={() => setActiveLink('/')}>Popular</Link>
                        <Link to="/top-rated" className={`nav-link ${activeLink === "/top-rated" ? "active" : ""}`} onClick={() => setActiveLink('/top-rated')}>Top Rated</Link>
                        <Link to="/upcoming" className={`nav-link ${activeLink === "/upcoming" ? "active" : ""}`} onClick={() => setActiveLink('/upcoming')}>Upcoming</Link>
                        <div className="search-container" id='searchForDesktop'>
                            <input type="text" placeholder="Movie Name" className="search-input" value={query} onChange={ handleSearchChange }/>
                            <button className="search-btn">Search</button>
                        </div>
                    </div>

                </div>
            </nav>
            <div className="search-container" id='searchForMobile'>
                <input type="text" placeholder="Movie Name" className="search-input"  value={query} onChange={ handleSearchChange }/>
                <button className="search-btn">Search</button>
            </div>
        </>
    );
}

export default Navbar;
