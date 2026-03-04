import { useState } from "react";

function App() {
  const [items, setItems] = useState(0);

  return (
    <div>
      <h2>Cart Items: {items}</h2>

      <button onClick={() => setItems(items + 1)}>
        Add Item
      </button>

      <button onClick={() => setItems(0)}>
        Clear Cart
      </button>
    </div>
  );
}

export default App;