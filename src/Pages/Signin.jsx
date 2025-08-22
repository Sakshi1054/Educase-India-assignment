import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";

function Signin() {
  const { login } = useUser(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);

    if (!success) {
      setError("Invalid email or password");
    } else {
      setError("");
      navigate("/profile")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6">
        
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput
            text="Email Address"
            type="email"
            placeholder="Enter email address"
            required={true}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            text="Password"
            type="password"
            placeholder="Enter password"
            required={true}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full py-3 rounded-md font-medium ${
              formData.email && formData.password
                ? "bg-purple-600 text-white cursor-pointer"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={!formData.email || !formData.password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
