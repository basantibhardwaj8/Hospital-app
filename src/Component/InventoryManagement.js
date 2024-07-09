import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    axios.get('/api/inventory')
      .then(response => setInventory(response.data))
      .catch(error => console.error(error));
  }, []);

  const addItem = () => {
    axios.post('http://localhost:3700/api/inventory', { item, quantity })
      .then(response => setInventory([...inventory, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>{item.item} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryManagement;
