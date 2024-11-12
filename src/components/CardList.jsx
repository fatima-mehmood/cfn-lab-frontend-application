import React from 'react';
import ClearList from './ClearList';
import ItemCard from './ItemCard';
import LoaderCard from './loading/LoaderCard';

function CardList({
  data = { todoList: [] },
  type,
  setAction = null,
  setTask = null,
  setId = null,
}) {
  // Handle case when `data` is empty or has no items
  if (!data || data.todoList.length === 0) {
    return (
      <div style={styles.container}>
        <h3 style={styles.header}>No items in the list</h3>
      </div>
    );
  }

  // Map over todoList to render appropriate cards based on type
  const listCards = data.todoList.map((item) => {
    const dataObjStr = JSON.stringify(item);
    if (type === 'todoItem') {
      return (
        <React.Fragment key={item.id}>
          <ItemCard
            jsonData={dataObjStr}
            setAction={setAction}
            setTask={setTask}
            setId={setId}
          />
        </React.Fragment>
      );
    }
    if (type === 'loader') {
      return (
        <React.Fragment key={item.id}>
          <LoaderCard />
        </React.Fragment>
      );
    }
    return <div key={item.id} />;
  });

  return (
    <div style={styles.flexCol}>
      {listCards}
      {type === 'todoItem' && (
        <ClearList setAction={setAction} />
      )}
    </div>
  );
}

export default CardList;

const styles = {
  container: {
    width: '100%',
    padding: '10px 0',
    textAlign: 'center',
  },
  header: {
    fontSize: '1.2em',
    color: '#333',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
};
