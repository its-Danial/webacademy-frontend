import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ShoppingCart from "./pages/ShoppingCart";
import EmptyCart from "./components/cart/EmptyCart";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/cart" element={<EmptyCart />} />
        <Route path="/cart/:studentId" element={<ShoppingCart />} />
      </Routes>
    </Layout>
  );
}
