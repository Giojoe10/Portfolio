import React, { useContext } from "react";

function Header() {
  return (
    <div className="p-5 bg-primary text-4xl font-semibold flex justify-between">
      <a href="/" className="flex">
        <h1 className="text-secondary">G</h1>
        <h1 className="text-white">M</h1>
        <h1 className="text-tertiary">B</h1>
      </a>
      <div>
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={() => {
          }}
        />
        <label for="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    </div>
  );
}
export default Header;
