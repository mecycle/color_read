"use client";

import React, { useState } from 'react';

const colors = [
  { code: '#FF5733', name: "Red" },
  { code: '#33FF57', name: "Green" },
  { code: '#3357FF', name: "Blue" },
  { code: '#FF33A6', name: "Pink" },
  { code: '#FFFF33', name: "Yellow" },
  { code: '#FF8C33', name: "Orange" },
  { code: '#8C33FF', name: "Purple" },
  { code: '#A52A2A', name: "Brown" },
  { code: '#000000', name: "Black" },
  { code: '#7FFF00', name: "Green" },
  { code: '#8B0000', name: "Red" },
  { code: '#B0C4DE', name: "Grey" },
  { code: '#FFFFFF', name: "White" },
  { code: '#4169E1', name: "Blue" },
  { code: '#FFD700', name: "Gold" }
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const ColorGrid = () => {
  const [shuffledColors, setShuffledColors] = useState(shuffleArray([...colors]));
  const [selectedColor, setSelectedColor] = useState(null);

  const handleReorder = () => {
    setShuffledColors(shuffleArray([...shuffledColors]));
    setSelectedColor(null); // Clear the selected color when reordering
  };

  const handleClick = (color) => {
    console.log(color)
    console.log(shuffledColors)
    setSelectedColor(color);
  };

  return (
    <div style={styles.container}>
      <button onClick={handleReorder} style={styles.button}>Reorder Colors</button>
      <div style={styles.gridContainer}>
        {shuffledColors.map((color, index) => (
          <div
            key={index}
            style={{ ...styles.gridItem, backgroundColor: color.code }}
            onClick={() => handleClick(color)}
          >
            {selectedColor?.code === color?.code && (
              <span style={styles.colorName}>{color.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center'
  },
  button: {
    marginBottom: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 100px)',
    gap: '10px',
    justifyContent: 'center',
  },
  gridItem: {
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center'
  },
  colorName: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: background for better contrast
    padding: '5px 10px',
    borderRadius: '5px'
  }
};

export default ColorGrid;