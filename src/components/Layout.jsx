import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="p-4" >
        <ul className="flex justify-between" >
          <li><Link to="/" >exmpel</Link></li>
          <li><Link to="/" >exmpel</Link></li>
          <li><Link to="/" >exmpel</Link></li>
          <li><Link to="/" >exmpel</Link></li>
          <li><Link to="/" >login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
