import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="m-auto mt-44 w-1/3 h-80 rounded flex flex-col items-center justify-center gap-6 shadow-slate-400 bg-slate-100 shadow">
      <button
        className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
      <div className="text-center text-">
        <h2>You are not registered yet, please press the button</h2>
      </div>
      <Link to="/home/login/register">
        <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
          Register
        </button>
      </Link>

      <Link to="/dashboard">
        <button>Succesful login</button>
      </Link>
    </div>
  );
};

export default Login;
