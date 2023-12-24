import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function PageNotFound() {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="text-center">
      <h1 className="text-body">404</h1>
      <p className="text-body">{translate(locale, "Halaman tidak ditemukan", "Page not found")}</p>
    </section>
  );
}
