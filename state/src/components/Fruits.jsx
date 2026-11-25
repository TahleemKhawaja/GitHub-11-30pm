import { useState } from 'react';

const data = ['apple', 'banana', 'cherry', 'dragon fruit', 'fig', 'grapes'];

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  function handleAddFruit() {
    const item = data[Math.floor(Math.random() * data.length)];
    setFruits((prev) => [...prev, item]);
  }
  function handleRemoveFruit(item) {
    setFruits((prev) => prev.filter((_, index) => index !== item));
  }
  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <h1>{fruit}</h1>
          <button onClick={() => handleRemoveFruit(index)}>Remove Fruit</button>
        </div>
      ))}
      <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  );
};

export default Fruits;
