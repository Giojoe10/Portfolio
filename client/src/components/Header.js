import React, { useContext } from "react";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const [darkMode, setDarkMode] = useDarkMode()
  const handleMode = () => setDarkMode(!darkMode)

  return (
    <div className="p-5 bg-dark-primary text-4xl font-semibold flex justify-between">
      <a href="/" className="flex">
        <h1 className="text-dark-secondary">G</h1>
        <h1 className="text-white">M</h1>
        <h1 className="text-dark-tertiary">B</h1>
      </a>
      <div>
        {/* TODO: Change this icon to something simpler */}
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          checked={darkMode}
          onClick={() => {
          }}
        />
        <label for="toggle" className="toggle--label" onClick={handleMode}>
          <span className="toggle--label-background"></span>
        </label>
      </div>
    </div>
  );
}
export default Header;
