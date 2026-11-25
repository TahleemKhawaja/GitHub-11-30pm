// import { useState } from 'react';
import Form from './Form';

const App = () => {
  // const [user, setUser] = useState({
  //   username: '',
  //   password: '',
  //   remember: false,
  //   gender: '',
  // });
  // const [errors, setErrors] = useState(null);

  // function validate(form) {
  //   const errors = {};
  //   if (!form.username.trim()) {
  //     errors.username = 'Please Enter a Valid Username';
  //   }
  //   if (form.password.length <= 6) {
  //     errors.password = 'Password Should not be less than 6 characters';
  //   }
  //   return errors;
  // }

  // function handleUser(event) {
  //   console.log(
  //     event.target.name,
  //     event.target.value,
  //     event.target.type,
  //     event.target.checked,
  //   );

  //   const { name, value, checked, type } = event.target;
  //   setUser((prev) => ({
  //     ...prev,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const newErrors = validate(user);
  //   setErrors(newErrors);
  // }
  return (
    <div>
      <Form />
      {/* <form action="" onSubmit={handleSubmit}>
        <label htmlFor="user">Enter Your Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.name}
          onChange={handleUser}
          required
        />
        {errors && <p>{errors.username}</p>}
        <input
          type="password"
          value={user.password}
          name="password"
          id="password"
          onChange={handleUser}
        />
        {errors && <p>{errors.password}</p>}
        <input
          type="checkbox"
          name="remember"
          id="check"
          onChange={handleUser}
          checked={user.remember}
          required
        />{' '}
        Remember Me
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleUser}
          required
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleUser}
          required
        />
        Female
        <p>{user.username}</p>
        <p>{user.remember ? 'Yes' : 'No'}</p>
        <p>{user.gender}</p>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default App;
