import React from 'react';

export default function LoaderCard() {
  return (
    <div style={{ display: 'flex', paddingBottom: '24px' }}>
      <div style={styles.card}>
        <div style={styles.cardBody}>
          <div style={styles.row}>
            <div style={{ flex: '0 0 auto' }}>
              <button style={styles.iconButton} disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </button>
            </div>
            <div style={styles.col}>
              <div style={styles.placeholder}>
                <div style={{ ...styles.placeholderLine, ...styles.large }}></div>
                <div style={{ ...styles.placeholderLine, ...styles.medium }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  cardBody: {
    padding: '16px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  col: {
    flex: 1,
    paddingLeft: '16px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: 'grey',
    cursor: 'not-allowed',
  },
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  placeholderLine: {
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    height: '1.2em',
  },
  large: {
    width: '100%',
  },
  medium: {
    width: '70%',
  },
};
