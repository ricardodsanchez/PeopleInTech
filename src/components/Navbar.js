import React from 'react';
import Search from './Search';

const Navbar = ({ onSearchChange, winWidth, onMapClick, onLogoClick }) => {
  return (
    <div className="header-items flex flex-wrap justify-between">
      <h1
        onClick={onLogoClick}
        id="title"
        className="relative ma0 pa0 fl-l pointer"
      >
        <svg className="w2 h2 mr2 v-top" viewBox="0 0 24 24">
          <path d="M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z" />
        </svg>
        <span className="fw3">People</span>
        <span className="fw7 custom--text-primary"> in Tech</span>
      </h1>
      {winWidth > 760 ? <Search onSearchChange={onSearchChange} /> : null}

      <a
          href="https://github.com/ricardodsanchez/PeopleInTech"
          title="Repository"
        >
          <svg
          
            className="repo w2 h2"
            viewBox="0 0 12 16"
            version="1.1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            />
          </svg>
        </a>

    </div>
  );
};

export default Navbar;
