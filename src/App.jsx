import { Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuthedUser,
  getUserLogged,
  putAccessToken,
  putAuthedUser,
  removeAuthedUser
} from "./utils/network-data";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const [authedUser, setAuthedUser] = useState(getAuthedUser());
  const navigate = useNavigate();

  async function loginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    putAuthedUser(data);
    setAuthedUser(data);
  }

  function handleLogout() {
    setAuthedUser(null);
    putAccessToken("");
    removeAuthedUser();
    navigate("/");
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path="/*" element={<LoginPage loginSuccess={loginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout onLogout={handleLogout} name={authedUser.name} />}>
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
