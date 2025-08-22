import FormInput from "../Components/FormInput";
import { useState } from "react";
import { useUser } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { signup } = useUser();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    agency: "", 
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(form); 
    navigate("/profile"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto">
        
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Create your PopX account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
          <FormInput
            text="Full Name"
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <FormInput
            text="Phone Number"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />

          <FormInput
            text="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />

          <FormInput
            text="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />

          <FormInput
            text="Company Name"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />

          <div className="flex flex-col">
            <label className="text-sm font-medium text-black mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={form.agency === "Yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={form.agency === "No"}
              onChange={handleChange}
            />{" "}
              No
              </label>
            </div>
          </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-medium rounded-md mt-6 hover:bg-purple-700 transition"
        >
          Create Account
        </button>
        </form>

      </div>
    </div>
  );
}

export default Signup;