import { useState } from 'react';

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked} 
          onChange={handleOnChange} 
        />
        {label}
      </label>

    </div>
  );
};

export default Checkbox;
