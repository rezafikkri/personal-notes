import { Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuthedUser,
  getUserLogged,
  putAccessToken,
  putAuthedUser,
  removeAuthedUser
} from "./utils/network-data";
import { useMemo, useState } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";

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
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
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

  function toggleTheme() {
    setTheme((prevTheme) => {
      const theme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return theme;
    });
  }

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  if (authedUser === null) {
    return (
      <ThemeContextProvider value={themeContextValue}>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={loginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ThemeContextProvider>
    );
  }

  return (
    <ThemeContextProvider value={themeContextValue}>
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
    </ThemeContextProvider>
  );
}
