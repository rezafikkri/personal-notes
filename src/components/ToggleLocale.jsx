import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function ToggleLocale() {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="border-0 bg-transparent p-0 text-body-secondary"
    >
      <small>{translate(locale, "Bahasa (id)", "Language (en)")}</small>
    </button>
  );
}
