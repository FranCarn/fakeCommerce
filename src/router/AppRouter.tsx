import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "../auth/Login";
import { NotFound } from "../components/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
