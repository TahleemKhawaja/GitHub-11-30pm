const DiplaySum = ({ handleSum }) => {
  const num1 = 10;
  const num2 = 20;

  return (
    <div>
      <h1>Sum</h1>
      <button onClick={() => handleSum(num1, num2)}>Add</button>
    </div>
  );
};

export default DiplaySum;
