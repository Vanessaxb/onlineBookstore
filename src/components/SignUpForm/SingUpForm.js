import { useState } from "react";
import { signUp } from "../../utilities/users-service";

//SignUpForm.jsx <-> users-service.js <-> users-api.js <-Internet-> server.js (Express) <-> Routes

function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        error: '' //to clear the error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);

      // copy the form data
      const userFormData = {...formData}

      // delete the extra properties
      delete userFormData.confirm
      delete userFormData.error

      //calling user service signup function
      const user = await signUp(userFormData)
      console.log('User', user);
      setUser(user)

      console.log(userFormData);

    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: 'Sign Up Failed - Try Again'
      });
    }
  };

  return (
    
      <div className="AuthFormContainer">
        <form autoComplete="off" onSubmit={handleSubmit} className="AuthForm">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          {/* <div className="AuthButton"> */}
          <button disabled={disable} type="submit" >Sign Up</button>
          {/* </div> */}
        </form>
     
      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm;