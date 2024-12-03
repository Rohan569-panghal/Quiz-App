import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';
import Header from '../Header';

const Layout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '0px',
    minHeight: '100vh',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={style}>
      <Fragment>
        <Header />
        <div style={{ margin: '0px', display: 'flex', justifyContent: 'flex-end', padding: '2px' }}>
          <label style={{ marginRight: '10px' }}>{darkMode ? 'Dark Mode' : 'Light Mode'}</label>
          <div
            onClick={toggleDarkMode}
            style={{
              cursor: 'pointer',
              width: '40px',
              height: '20px',
              backgroundColor: darkMode ? '#0096FF' : '#ccc',
              borderRadius: '34px',
              position: 'relative',
              transition: 'background-color 0.3s',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: darkMode ? '22px' : '2px',
                width: '16px',
                height: '16px',
                backgroundColor: 'white',
                borderRadius: '50%',
                transition: 'left 0.3s',
              }}
            />
          </div>
        </div>
        <main>{children}</main>
      </Fragment>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
