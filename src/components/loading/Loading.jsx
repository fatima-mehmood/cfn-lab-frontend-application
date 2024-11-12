import React from 'react';
import CardList from '../CardList';

function Loading() {
  const list = [];
  let i = 0;
  while (i < 4) {
    list.push({ id: i });
    i += 1;
  }
  const loadData = {
    todoList: list,
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div style={{ ...styles.row, paddingTop: '10px' }}>
          <h1 style={styles.header}>Add To-Do Item</h1>
        </div>
        <div style={{ ...styles.row, paddingTop: '20px', paddingBottom: '20px' }}>
          <CardList data={{ todoList: [{ id: 99 }] }} type="loader" />
        </div>
        <div style={{ ...styles.row, paddingTop: '20px' }}>
          <hr style={styles.divider} />
        </div>
        <div style={{ ...styles.row, paddingTop: '10px' }}>
          <h1 style={styles.header}>To-Do List</h1>
        </div>
        <div style={{ ...styles.row, paddingTop: '20px', paddingBottom: '20px' }}>
          <CardList data={loadData} type="loader" />
        </div>
      </div>
    </div>
  );
}

export default Loading;

const styles = {
  container: {
    width: '100%',
    padding: '0 16px',
    margin: '0 auto',
    maxWidth: '800px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    padding: '10px 0',
  },
  header: {
    fontSize: '1.5em',
    color: '#333',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    border: 'none',
    borderTop: '1px solid #ffffff',
    margin: 0,
  },
};
