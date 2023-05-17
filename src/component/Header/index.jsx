import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import './styles.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  function getLang() {
    if (navigator.languages != undefined) return navigator.languages[0];
    return navigator.language;
  }
  useEffect(() => {
    if (getLang() === 'en-GB') {
      setSelectedLanguage('USA 🇺🇸');
    }
  }, []);

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <header>
        <h1>SKYTHENA</h1>
        <ul>
          <li className="dropdown">
            <span className="dropdown" onClick={toggleDropdown}>
              {selectedLanguage}
              {!dropdownOpen ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-caret-up"></i>
              )}
            </span>
            {dropdownOpen && (
              <div className="dropdown-header-menu">
                <button
                  onClick={() => {
                    TranslateClick('en');
                    setSelectedLanguage('USA 🇺🇸');
                  }}
                >
                  USA 🇺🇸
                </button>

                <button
                  onClick={() => {
                    TranslateClick('tr');
                    setSelectedLanguage('TR 🇪🇹');
                  }}
                >
                  TR 🇪🇹
                </button>

                <button
                  onClick={() => {
                    TranslateClick('de');
                    setSelectedLanguage('DE 🇩🇪');
                  }}
                >
                  DE 🇩🇪
                </button>

                <button
                  onClick={() => {
                    TranslateClick('pt');
                    setSelectedLanguage('PT 🇧🇷');
                  }}
                >
                  PT 🇧🇷
                </button>

                <button
                  onClick={() => {
                    TranslateClick('spa');
                    setSelectedLanguage(' SPA 🇪🇸');
                  }}
                >
                  SPA 🇪🇸
                </button>
                <button
                  onClick={() => {
                    TranslateClick('jp');
                    setSelectedLanguage(' JPN 🇯🇵 ');
                  }}
                >
                  JPN 🇯🇵
                </button>
              </div>
            )}
          </li>
        </ul>
      </header>
      <div className="hero-section"></div>
    </div>
  );
};

export default Header;
