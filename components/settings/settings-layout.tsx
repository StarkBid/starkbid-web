"use client";

import React from "react";
import { useState, useCallback } from "react";
import { SettingsSidebar } from "./settings-sidebar";

// Define global window interface
declare global {
  interface Window {
    toggleSettingsSidebar?: () => void;
  }
}

export function SettingsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  // Use useCallback to create a stable reference that properly handles dependencies
  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  // Make toggle function available globally
  React.useEffect(() => {
    // Store the toggle function globally so navbar can access it
    window.toggleSettingsSidebar = toggleSidebar;

    return () => {
      delete window.toggleSettingsSidebar;
    };
  }, [toggleSidebar]);

  return (
    <div className="min-h-screen bg-true_black flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar Component */}
        <SettingsSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1">
            <div className="max-w-full mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
