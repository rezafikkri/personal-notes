import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiBrightness2 } from '@mdi/js';

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const iconTheme = theme === "light" ? mdiWhiteBalanceSunny : mdiBrightness2;
  
  return (
    <div className="position-fixed bottom-0 end-0 mb-3 me-3">
      <button
        className={`btn btn-${theme === "light" ? "secondary" : "dark"}`}
        type="button"
        onClick={toggleTheme}
      >
        <Icon path={iconTheme} size={1} />
      </button>
    </div>
  );
}
