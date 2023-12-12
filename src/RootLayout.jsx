import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import PageNotFound from "./pages/PageNotFound";
import EditPage from "./pages/EditPage";

export default function RootLayout() {
  return (
    <div className="col-md-8 mx-auto px-4 py-5">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id/edit" element={<EditPage />} />
          {/* Default route if no path match */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}
