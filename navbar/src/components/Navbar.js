import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/ASSET/footer_logo.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    news: false,
    advocacy: false,
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
      contact: false,
      multimedia:false
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
    { label: 'MULTIMEDIA', path: '/multimedia', hasDropdown: true, dropdownKey: 'multimedia' },
    { label: 'ADVOCACY', path: '/advocacy', hasDropdown: true, dropdownKey: 'advocacy' },
    { label: 'CONTACT', path: '/contact', hasDropdown: true, dropdownKey: 'contact' },
  ];

  const dropdownItems = {
    news: [
      { label: 'Investigative', path: '/news/investigative' },
      { label: 'Community Spotlight', path: '/news/community-spotlight' },
    ],
    advocacy: [
      { label: 'Current Campaigns', path: '/advocacy/current' },
      { label: 'Success Stories', path: '/advocacy/success' },
      { label: 'Policy', path: '/advocacy/policy' },
    ],
    multimedia: [
      { label: 'Panel Discussion', path: '/multimedia/panel-discussion' },
      { label: 'Interview', path: '/multimedia/interview' },
    ],
    contact: [
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
