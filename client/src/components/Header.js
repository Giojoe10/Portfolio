import React from "react";

function Header() {
    return (
        <div className="p-5 bg-primary   text-4xl font-semibold">
            <a href="/" className="flex justify-between">
                <h1 className="text-secondary">G</h1>
                <h1 className="text-white">M</h1>
                <h1 className="text-tertiary">B</h1>
            </a>
        </div>
    );
}

export default Header;
