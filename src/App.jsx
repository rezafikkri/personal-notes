import { Route, Routes, useNavigate } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import useAuth from "./hooks/useAuth";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  async function loginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuth(data);
  }

  function handleLogout() {
    setAuth(null);
    putAccessToken('');
    navigate("/");
  }

  if (auth === null) {
    return (
      <Routes>
        <Route path="/*" element={<LoginPage loginSuccess={loginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout onLogout={handleLogout} name={auth.name} />}>
        <Route index element={<HomePage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="/notes/new" element={<AddPage />} />
        <Route path="/archives" element={<ArchivePage />} />
      </Route>
      {/* Default route if no path match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
