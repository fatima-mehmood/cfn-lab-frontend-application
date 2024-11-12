import React from 'react';

export default function ClearList({ setAction }) {
  // Function to clear items list
  const clearList = () => {
    setAction('clearItems');
  };

  return (
    <div style={styles.row}>
      <div style={styles.container}>
        <button onClick={clearList} style={styles.button}>
          Clear To-Do List
        </button>
      </div>
    </div>
  );
}

const styles = {
  row: {
    paddingBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1.2em',
    color: '#fff',
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
