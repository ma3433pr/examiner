import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Drawer from "../Drawer/Drawer";

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="app">

      <Header
        onMenu={() => setDrawerOpen(true)}
      />

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <main className="page">
        <Outlet />
      </main>
      <footer
  style={{
    textAlign: "center",
    fontSize: "11px",
    color: "#9ca3af",
    padding: "18px 0",
    userSelect: "none",
  }}
>
  Examiner • نسخه آزمایشی
</footer>
    </div>
  );
}