import { useState } from "react";
function ListExample() {

  const [items, setItems] = useState([]);

  function addItem() {
    const newItem = "Item " + (items.length + 1);

    setItems(prev => [...prev, newItem]);
  }

  function removeItem(indexToRemove) {
  setItems(prev =>
    prev.filter((_, index) => index !== indexToRemove)
  );
}

  return (
    <div>

      <button onClick={addItem}>
        Add Item
      </button>


    {items.map((item, index) => (
  <li key={index}>
    {item}

    <button onClick={() => removeItem(index)}>
      Delete
    </button>
  </li>
))}

    </div>
  );
}
export default ListExample;