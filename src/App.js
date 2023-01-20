import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home";
import { useContext } from "react";

// import Chats from "./components/Chats";
// import Message from "./components/Message";
// import Input from "./components/Input";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./style.scss"
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login/" />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute> <Home />
          </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
