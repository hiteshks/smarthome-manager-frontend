import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // redirect to dashboard/homepage
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div
      className="flex items-center justify-center px-4 md:px-8"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div
        className="backdrop-blur-lg bg-white/10 border border-gray-200 shadow-md rounded-2xl p-6 md:p-10 w-full text-center flex flex-col justify-center"
        style={{ maxWidth: "1000px", minHeight: "500px" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome <span className="text-blue-600">Back</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto w-full text-left"
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
