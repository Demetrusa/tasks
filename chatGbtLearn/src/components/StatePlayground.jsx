import { useState } from "react";

function StatePlayground() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Demetre");
  const [items, setItems] = useState([]);

  function increase() {
    setCount(prev => prev + 1);
  }

  function changeName() {
    setName("React Learner");
  }

  function addItem() {
    const newItem = "Item " + (items.length + 1);

    setItems(prev => [...prev, newItem]);
  }

  function reset() {
    setCount(0);
    setItems([]);
  }

  return (
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h2>State Playground</h2>

      <h3>Counter: {count}</h3>
      <button onClick={increase}>Increase</button>

      <h3>Name: {name}</h3>
      <button onClick={changeName}>Change Name</button>

      <h3>Items</h3>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default StatePlayground;