import React, { useEffect, useState } from 'react';
import PageError from './errorPages/PageError';
import Loading from './loading/Loading';
import useFetch from '../hooks/useFetch';
import CardList from './CardList';
import NewItemForm from './NewItemForm';

export default function HomePage() {
  const [action, setAction] = useState('allItems');
  const [task, setTask] = useState('');
  const [id, setId] = useState('');

  const queryParams = {
    id: `${id}`,
    task: `${task}`,
  };

  // Initializing API Call with a useFetch function
  const {
    data: itemData,
    success: callSuccess,
    loading: callLoading,
  } = useFetch(action, JSON.stringify(queryParams));

  // Function to re-update query parameters fetch list of items
  useEffect(() => {
    if (!callLoading && action !== 'allItems') {
      setAction('allItems');
      setTask('');
      setId('');
    }
  }, [callLoading]);

  if (callLoading) {
    return <Loading />;
  }
  if (!callSuccess) {
    if (!itemData.success) {
      console.error(`The following errors were encountered:\nError -> ${itemData.error}\n`);
      return <PageError errorMessage={`The following errors were encountered:\nError -> ${itemData.error}\n`} />;
    }
    return <PageError errorMessage="Oops! Something went wrong" />;
  }
  if (!itemData.todoList) {
    return (
      <div style={styles.centerContainer}>
        <pre>
          <h1 style={styles.titleColor}>Action Successful</h1>
        </pre>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div style={styles.row}>
          <h1 style={styles.header}>Add To-Do Item</h1>
        </div>
        <div style={styles.row}>
          <NewItemForm setAction={setAction} setTask={setTask} />
        </div>
        <div style={styles.row}>
          <hr style={styles.hr} />
        </div>
        <div style={styles.row}>
          <h1 style={styles.header}>To-Do List</h1>
        </div>
        <div style={{ ...styles.row, paddingBottom: '20px' }}>
          <CardList data={itemData} type="todoItem" setAction={setAction} setTask={setTask} setId={setId} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    paddingTop: '20px',
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  titleColor: {
    color: '#333',
  },
  header: {
    fontSize: '2em',
    color: '#333',
    textAlign: 'center',
  },
  hr: {
    width: '100%',
    color: '#ffffff',
  },
};
