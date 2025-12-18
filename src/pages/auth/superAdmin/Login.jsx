import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SuperAdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const SuperAdminLogin = () => {
    navigate("/super-admin");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the form submission logic here (API call, validation, etc.)
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="min-h-screen relative bg-primary overflow-hidden flex flex-col justify-center">
      <img
        src="/form-bg-image.png"
        alt="Flower"
        className="absolute left-48 h-[80vh] w-4/5 opacity-40 scale-[1.2] z-0"
      />
      {/* LEFT FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 text-white">
        {/* Optional flower image */}
        <div className="relative z-10 h-full flex flex-col justify-between pl-32 py-24 max-w-2xl">
          {/* Logo */}
          <img
            src="/heartsy-logo.png"
            alt="logo"
            className="w-24"
          />
        </div>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="bg-white w-full max-w-sm py-4 h-[50vh] rounded-xl flex flex-col justify-center items-center mx-auto relative z-20">
        <div className="w-full px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Hi, Welcome! 👋</h1>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 p-2 outline-none focus:border-primary"
              required
              tabIndex={0} // Ensure the field is focusable
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="w-full border-b bg-transparent border-gray-300 p-2 outline-none focus:border-primary"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 text-gray-500"
              >
                {showPassword ? <Eye size={18} /> :<EyeOff size={18} />}
              </button>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="accent-primary"
                />
                Remember me
              </label>
              <a href="https://your-website.com" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-medium transition"
              onClick={SuperAdminLogin}
            >
              Login
            </button>

            {/* Divider */}
            <p className="text-center text-xs text-gray-400">Or Continue with</p>

            {/* Microsoft */}
            <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className="w-4 h-4"
              />
              Microsoft
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
