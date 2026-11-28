import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import LanguageSwitcher from "./LanguageSwitcher";
import ReleaseNotice from "./ReleaseNotice";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app-layout">
      <header className="topbar">
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        <a className="topbar-brand" href="/docs"><span className="brand-mark">A</span><span>AxonBase</span><em>Docs</em></a>
        <div className="topbar-meta"><span className="status-dot" />v1.0.0</div>
        <LanguageSwitcher />
      </header>
      <Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      {menuOpen && <button className="nav-backdrop" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
      <main className="main-content"><ReleaseNotice /><Outlet /></main>
    </div>
  );
}
