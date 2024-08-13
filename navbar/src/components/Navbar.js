import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/ASSET/Africa by graphicsgarageproject.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    news: false,
    advocacy: false,
    interviews: false,
    contact: false,
  });

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen({
      news: false,
      advocacy: false,
      interviews: false,
      contact: false,
    });
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'NEWS', path: '/news', hasDropdown: true, dropdownKey: 'news' },
    { label: 'ADVOCACY', path: '/advocacy', hasDropdown: true, dropdownKey: 'advocacy' },
    { label: 'INTERVIEWS', path: '/interviews', hasDropdown: true, dropdownKey: 'interviews' },
    { label: 'CONTACT', path: '/contact', hasDropdown: true, dropdownKey: 'contact' },
  ];

  const dropdownItems = {
    news: [
      { label: 'Latest News', path: '/news/latest' },
      { label: 'Documentaries & Videos', path: '/news/documentaries' },
      { label: 'Podcasts', path: '/news/podcasts' },
      { label: 'Press Releases', path: '/news/press-releases' },
    ],
    advocacy: [
      { label: 'Current Campaigns', path: '/advocacy/current' },
      { label: 'Success Stories', path: '/advocacy/success' },
      { label: 'Get Involved', path: '/advocacy/get-involved' },
    ],
    interviews: [
      { label: 'Expert Interviews', path: '/interviews/expert' },
      { label: 'Panel Discussions', path: '/interviews/panel' },
      { label: 'Webinars', path: '/interviews/webinars' },
      { label: 'Live Events', path: '/interviews/live' },
    ],
    contact: [
      { label: 'Contact Form', path: '/contact/form' },
      { label: 'Newsletter Sign-up', path: '/contact/newsletter' },
    ],
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img src={logo} alt="logo" className="logo" />

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Main Navigation */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.label} className="nav-item">
              <Link to={item.path} className="nav-links" onClick={closeMenu}>
                {item.label}
              </Link>
              {item.hasDropdown && (
                <>
                  <span
                    onClick={() => toggleDropdown(item.dropdownKey)}
                    className="dropdown-toggle"
                  >
                    ▼
                  </span>
                  <ul
                    className={`dropdown-menu ${
                      dropdownOpen[item.dropdownKey] ? 'active' : ''
                    }`}
                  >
                    {dropdownItems[item.dropdownKey].map((dropdownItem) => (
                      <li key={dropdownItem.label} className="dropdown-item">
                        <Link
                          to={dropdownItem.path}
                          className="dropdown-links"
                          onClick={closeMenu}
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
