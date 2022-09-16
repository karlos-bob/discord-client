import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = () => {
  return (
    <div className="min-h-screen h-full sm:bg-login bg-cover">
      <div className="container flex justify-center items-center h-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
