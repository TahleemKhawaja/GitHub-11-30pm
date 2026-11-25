import { useState } from 'react';

const Profile = () => {
  const [username, setUserName] = useState({
    name: 'Aaqib',
    address: 'Srinagar',
    age: 26,
  });
  function handleAddress() {
    setUserName((prev) => ({ ...prev, address: 'Delhi' }));
  }
  function handleAge() {
    setUserName((prev) => ({ ...prev, age: prev.age + 1 }));
  }
  return (
    <div>
      <h1>{username.name}</h1>
      <p>{username.address}</p>
      <p>{username.age}</p>
      <button onClick={handleAddress}>Move To Delhi</button>
      <button onClick={handleAge}>Birthday</button>
    </div>
  );
};

export default Profile;
