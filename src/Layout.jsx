import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function Layout() {
  return (
    <div className="col-md-8 mx-auto px-4 py-5">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
