import React from "react";
import "../Styles/Form.scss";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="form-container">
      <div className="detail-container flex justify-center items-center">
        <p className="plan-detail text-center text-white font-medium px-14">
          Try it free 7 days
          <span className="font-normal">then $20/mo. thereafter</span>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form text-center">
        <div>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            required
          />
        </div>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            required
          />
        </div>

        <div>
          <input
            className="input"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          />
        </div>

        <div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            required
          />
        </div>

        <button className="btn-signup py-3 px-8 mt-2 mb-2 text-white font-semibold">
          Claim your free trial
        </button>
        <p className="term px-5">
          By clicking the button, you are agreeing to our &nbsp;
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
