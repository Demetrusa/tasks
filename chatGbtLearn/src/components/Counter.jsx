import { useState } from "react";

function Counter() {
  const [user, setUser] = useState({
    name: "Deme",
    age: 25
  });

  function changeNameToSeraf() {
    setUser(prev => ({
      ...prev,
      name: "Seraf"
    }));
  }

  return (
    <div>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={changeNameToSeraf}>
        Set Name to Seraf
      </button>

    </div>
  );
}

export default Counter;