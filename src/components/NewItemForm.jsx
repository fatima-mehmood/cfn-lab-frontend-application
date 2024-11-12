import React from 'react';

export default function NewItemForm({ setAction, setTask }) {
  // Function to add new item
  const addTodoItem = (event) => {
    event.preventDefault();
    if (event.target[0].value) {
      setTask(event.target[0].value);
      setAction('addItem');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
      <div style={{ width: '100%', maxWidth: '500px', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', background: '#fff' }}>
        <form onSubmit={addTodoItem} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Add To-Do Item"
            style={{
              flex: 1,
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '8px',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#007bff',
            }}
            title="Add New To-Do Item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
