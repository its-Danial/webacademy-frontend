import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Layout>
  );
}
