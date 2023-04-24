import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "../auth/Login";
import { NotFound } from "../components/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { Layout } from "../components/Layout";
import { CartPage } from "../pages/Cart/CartPage";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function AppRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRouter;
