import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { BrowserRouter } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { HomePage } from "../pages";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
