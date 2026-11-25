import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
  course: '',
  gender: '',
  agree: false,
};

const Form = () => {
  const [user, setuser] = useState(initialValues);
  const [errors, setErrors] = useState(null);
  const [submitted, setSubmitted] = useState(null);

  function validate(form) {
    const errors = {};
    if (!form.name.trim().length) {
      errors.name = 'Please Enter A Valid Name ';
    }
    if (!/^\S+@\S+.\S+$/.test(form.email)) {
      errors.email = 'Enter a valid Email';
    }
    if (form.password.length < 6) {
      errors.password = 'Password Length Should be 6 or More';
    }
    return errors;
  }
  function handleForm(e) {
    const { name, value, checked, type } = e.target;
    setuser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate(user);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(user);
      setuser(initialValues);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleForm}
          value={user.name}
        />
        {errors && <p>{errors.name}</p>}
        <br />
        <br />
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleForm}
          value={user.email}
        />
        {errors && <p>{errors.email}</p>}
        <br />
        <br />
        <label htmlFor="password">Enter Your Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleForm}
          value={user.password}
        />
        {errors && <p>{errors.password}</p>}
        <br />
        <br />
        <label htmlFor="gender">Select Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          id="gender"
          onChange={handleForm}
          checked={user.gender === 'male'}
          required
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          id="gender"
          onChange={handleForm}
          checked={user.gender === 'female'}
          required
        />
        Female
        <br />
        <br />
        <label htmlFor="course">Select a Course</label>
        <select
          name="course"
          id="course"
          onChange={handleForm}
          value={user.course}
          required
        >
          <option value="MERN">MERN</option>
          <option value="GIT">GIT</option>
          <option value="DS">DS</option>
        </select>
        <br />
        <br />
        <label htmlFor="agree">Agree To Terms</label>
        <input type="checkbox" name="agree" id="agree" checked={user.checked} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Form Submitted Successfully for {submitted.name}</p>}
    </div>
  );
};

export default Form;
