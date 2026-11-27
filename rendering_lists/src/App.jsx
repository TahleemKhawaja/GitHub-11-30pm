// import { useState } from 'react';
import Accordian from './components/Accordian';
const App = () => {
  // const data = [
  //   { id: 1, name: 'A', age: 20 },
  //   { id: 2, name: 'B', age: 21 },
  //   { id: 3, name: 'C', age: 22 },
  //   { id: 4, name: 'D', age: 20 },
  //   { id: 5, name: 'E', age: 23 },
  //   { id: 6, name: 'F', age: 21 },
  // ];
  // const [users, setUsers] = useState([]);
  // function handleUser(name) {
  //   setUsers((prev) =>
  //     prev.includes(name)
  //       ? prev.filter((user) => user !== name)
  //       : [...prev, name],
  //   );
  // }

  return (
    <div>
      <Accordian />
      {/* {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          <button onClick={() => handleUser(item.name)}>
            {users.includes(item.name) ? 'Remove' : 'Add'}
          </button>
        </div>
      ))}
      {users.length > 0 && <p>Someone is saved</p>} */}
      {/* {users.map((saved) => (
        <p>{saved}</p>
      ))} */}
      {/* {data
        .filter((item) => item.id % 2 === 0)
        .map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.age}</p>
          </div>
        ))} */}
    </div>
  );
};

export default App;
