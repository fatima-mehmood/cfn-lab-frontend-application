import React, { useState } from 'react';

export default function ItemCard({ jsonData, setAction, setTask, setId }) {
  const [editorMode, setEditorMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const todoItemData = JSON.parse(jsonData);

  const deleteItemMethod = () => {
    setId(todoItemData.id);
    setAction('removeItem');
  };

  const changeStatusMethod = () => {
    setId(todoItemData.id);
    setAction('changeItemStatus');
  };

  const enableEditor = () => {
    setEditorMode(true);
  };

  const disableEditor = () => {
    setEditorMode(false);
  };

  const confirmEdits = (event) => {
    event.preventDefault();
    const taskValue = event.target.task.value;
    if (taskValue) {
      setId(todoItemData.id);
      setTask(taskValue);
      setAction('editItem');
      setEditorMode(false);
    }
  };

  return (
    <div style={{ paddingBottom: '24px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
      {editorMode ? (
        <form onSubmit={confirmEdits}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              name="task"
              defaultValue={todoItemData.task}
              placeholder="Task Details"
              style={{ flex: 1, padding: '8px', fontSize: '16px' }}
            />
            <button type="submit" style={{ marginLeft: '8px' }}>✔️</button>
            <button type="button" onClick={disableEditor} style={{ marginLeft: '8px' }}>❌</button>
          </div>
        </form>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={changeStatusMethod}
            style={{ background: 'none', border: 'none', fontSize: '24px', color: todoItemData.status ? 'green' : 'gray' }}
          >
            {todoItemData.status ? '✔️' : '⭕'}
          </button>
          <span style={{ flex: 1, paddingLeft: '12px', fontSize: '20px' }}>{todoItemData.task}</span>
          <button onClick={enableEditor} style={{ background: 'none', border: 'none', fontSize: '24px', marginLeft: '8px' }}>✏️</button>
          <button onClick={() => setShowModal(true)} style={{ background: 'none', border: 'none', fontSize: '24px', color: 'red', marginLeft: '8px' }}>🗑️</button>
        </div>
      )}

      {showModal && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
          <h4>Delete Item</h4>
          <p>Are you sure you want to delete the to-do item "{todoItemData.task}"?</p>
          <button onClick={() => setShowModal(false)} style={{ marginRight: '8px' }}>No</button>
          <button onClick={deleteItemMethod}>Yes</button>
        </div>
      )}
    </div>
  );
}
