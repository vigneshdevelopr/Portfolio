import React from "react";
import DrawerAppBar from "./Navbar";
import ResponsiveAppBar from "./Navbar";

function Base({ title, description, children }) {
  return (
    <div className="main-component">
      <DrawerAppBar />
      <main>
        {description}
        {children}
      </main>
    </div>
  );
}

export default Base;
