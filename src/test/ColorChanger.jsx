import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('Purple');

  function handleColorChange(event) {
    const newColor = event.target.value;
    setColor(newColor);
  }

  return (
    <div style={{ backgroundColor: color }}>
      <label>
        Background Color : {color}
      <input type="text" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
}

export default ColorChanger;