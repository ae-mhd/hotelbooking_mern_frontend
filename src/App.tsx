import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <h1>Home Page</h1>
            <p>-12:30</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Search Page</h1>{" "}
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
