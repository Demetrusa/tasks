import { useState } from "react";

function CubeExample() {

  const [isCubeVisible, setIsCubeVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="cube-wrapper">

      <button onClick={() => setIsCubeVisible(true)}>
        Show Cube
      </button>

      {isCubeVisible && (
        <>
          <button onClick={() => setIsRotating(prev => !prev)}>
            {isRotating ? "Stop Rotation" : "Start Rotation"}
          </button>

          <div className={`cube ${isRotating ? "rotate" : ""}`}>
            🧊
          </div>
        </>
      )}

    </div>
  );
}

export default CubeExample;