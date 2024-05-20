import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  // Static JSON data representing users
  const usersData = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
    { id: 3, username: "user3", password: "password3" },
  ];

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});

  function handleChange(e) {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usersData.find(
      (user) =>
        user.username === creds.username && user.password === creds.password,
    );
    if (!user) {
      setError({ message: "Invalid username or password" });
    } else {
      setError({});
      login(user);
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-around bg-[#333333] py-10">
        <div className="text-voip-gray flex flex-col text-center">
          <h2 className="mb-1 text-[64px] font-bold">VoIP</h2>
          <p className="text-[36px] text-base">VoIP - ADMIN</p>
        </div>
        <div className="mx-4 w-96 rounded bg-white p-6 px-6 py-8 shadow-lg">
          <div className="flex flex-col text-center">
            <h2 className="text-voip-blue mb-1 text-4xl font-bold">
              Welcome Back!
            </h2>
            <p className="text-base ">Sign in to continue to VoIP - ADMIN</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-2 flex flex-col p-2">
              <label className="mb-2 font-bold" htmlFor="username">
                Username
              </label>
              <input
                className={`focus:border-voip-blue rounded border p-2 text-base placeholder-gray-400 focus:outline-none  ${
                  error.message ? "border-red-500" : ""
                }`}
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                value={creds.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2 flex flex-col p-2">
              <label className="mb-2 font-bold" htmlFor="password">
                Password
              </label>
              <input
                className={`focus:border-voip-blue rounded border p-2 text-base placeholder-gray-400 focus:outline-none  ${
                  error.message ? "border-red-500" : ""
                }`}
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={creds.password}
                onChange={handleChange}
              />
            </div>
            {error && (
              <div>
                {error.message && (
                  <p className="text-red-500">{error.message}</p>
                )}
              </div>
            )}
            <input className="k_btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
