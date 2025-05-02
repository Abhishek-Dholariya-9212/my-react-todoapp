import React, {useState} from 'react'

export default function SimpleCrud() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
  
    const handleAddOrUpdate = () => {
      if (input.trim() === '') return;
  
      if (editIndex !== null) {
        const updated = [...items];
        updated[editIndex] = input;
        setItems(updated);
        setEditIndex(null);
      } else {
        setItems([...items, input]);
      }
      setInput('');
    };
  
    const handleEdit = (index) => {
      setInput(items[index]);
      setEditIndex(index);
    };
  
    const handleDelete = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h2>Simple CRUD App</h2>
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item"
        />
        <button onClick={handleAddOrUpdate}>
            {editIndex !== null ? 'Update' : 'Add'}
        </button>

        <ul>
            {items.map((item, index) => (
            <li key={index}>
                {item}{' '}
                <button onClick={() => handleEdit(index)}>Edit</button>{' '}
                <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}