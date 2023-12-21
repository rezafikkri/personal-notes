import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const [authedUser, setAuthedUser] = useState(null);

  if (authedUser === null) {
    return (
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
