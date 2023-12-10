import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function RootLayout() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
