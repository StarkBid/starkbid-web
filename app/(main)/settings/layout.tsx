import Footer from "@/components/landing-page/Footer";
import React from "react";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="min-h-screen bg-[#101213] flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <div className="px-4 py-8 lg:px-8">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 