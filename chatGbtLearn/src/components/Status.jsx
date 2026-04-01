
import { useState } from "react";

function Status() {
  const [online, setOnline] = useState(false);

  return (
    <div>
      <h2>
        {online ? "User is Online" : "User is Offline"}
      </h2>

      <button onClick={() => setOnline(prev => !prev)}>
        Toggle
      </button>
    </div>
  );
}

export default Status;