import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";

export default function RootLayout() {
  return (
    <div className="col-md-8 mx-auto p-4 pb-5 pb-md-0 py-md-5">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          {/* Default route if no path match */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}
