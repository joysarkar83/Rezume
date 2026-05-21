import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./features/auth/auth.context";
import Protected from "./features/auth/components/Protected";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Protected>
          <Route path="/" element={<Home />} />
        </Protected>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
