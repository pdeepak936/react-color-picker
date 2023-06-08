import React, { useState, useCallback } from "react";
const ColorPicker = () => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

  const handleColorChange = useCallback(
    (event) => {
      setColor({
        ...color,
        [event.target.name]: event.target.value
      });
    },
    [color]
  );

  const backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: backgroundColor
        }}
      />
      <div>
        <lable htmlFor="red">Red</lable>
        <input
          type="range"
          min="0"
          max="255"
          name="red"
          value={color.red}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <lable htmlFor="green">Green</lable>
        <input
          type="range"
          min="0"
          max="255"
          name="green"
          value={color.green}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <lable htmlFor="blue">Blue</lable>
        <input
          type="range"
          min="0"
          max="255"
          name="blue"
          value={color.blue}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
