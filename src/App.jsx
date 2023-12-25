import { Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuthedUser,
  getUserLogged,
  putAccessToken,
  putAuthedUser,
  removeAuthedUser
} from "./utils/network-data";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { translate } from "./utils";

export default function App() {
  const [authedUser, setAuthedUser] = useState(() => getAuthedUser());
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "id");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = translate(locale, "Aplikasi Catatan", "Notes App");
  }, [locale]);

  async function loginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    // put authed user to localstorage
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

  function toggleLocale() {
    setLocale((prevLocale) => {
      const locale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", locale);
      return locale;
    });
  }

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
  const localeContextValue = useMemo(() => ({ locale, toggleLocale }), [locale]);

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={loginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ThemeProvider>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={localeContextValue}>
    <ThemeProvider value={themeContextValue}>
      <Routes>
        <Route path="/" element={<Layout onLogout={handleLogout} name={authedUser.name} />}>
          <Route index element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          {/* Default route if no path match */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
    </LocaleProvider>
  );
}
