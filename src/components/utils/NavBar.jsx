import React from 'react';

function NavBar({ url }) {
  return (
    <div style={styles.navbar}>
      <div style={styles.container}>
        <span style={styles.brand}><b>To-Do List</b></span>
        <button style={styles.toggle} aria-controls="responsive-navbar-nav" aria-expanded="false">
          ☰
        </button>
        <div style={styles.collapse}>
          <div style={styles.nav} />
          {url && <h5 style={styles.serverEndpoint}>{`Backend Server Endpoint: ${url}`}</h5>}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#343a40',
    padding: '10px 16px',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  brand: {
    fontSize: '1.25em',
    color: '#fff',
    marginRight: 'auto',
  },
  toggle: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.25em',
    cursor: 'pointer',
    marginLeft: 'auto',
  },
  collapse: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '16px',
  },
  nav: {
    flex: 1,
  },
  serverEndpoint: {
    color: '#fff',
    marginLeft: '16px',
    fontSize: '1em',
  },
};
