import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  
  // ახალი state ტექსტის ხილვადობისთვის
  const [isVisible, setIsVisible] = useState(true);

  const addUser = () => {
    if (name.trim() !== "") {
      setUsers([...users, name]);
      setName(""); // ინპუტის გასუფთავება დამატების შემდეგ
    }
  };

  // ფუნქცია, რომელიც ცვლის true-ს false-ით და პირიქით
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>User Manager</h2>

      <input 
        type="text" 
        placeholder="Enter name..." 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      {/* პირობითი რენდერინგი: თუ isVisible არის true, მაშინ გამოჩნდება სია */}
      {isVisible && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}

      <hr />
      
      {/* ღილაკი, რომელიც მართავს ხილვადობას */}
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide List" : "Show List"}
      </button>
    </div>
  );
}

export default Users;