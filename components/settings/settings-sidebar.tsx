"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Wallet, Shield, Code, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { VerifyAccountCard } from "./verify-account-card";

const navigation = [
  {
    name: "My Profile",
    href: "/settings/profile",
    icon: User,
  },
  {
    name: "Preference",
    href: "/settings/preference",
    icon: Settings,
  },
  {
    name: "Wallet",
    href: "/settings/wallet",
    icon: Wallet,
  },
  {
    name: "Verification",
    href: "/settings/verification",
    icon: Shield,
  },
  {
    name: "Developers",
    href: "/settings/developers",
    icon: Code,
  },
];

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsSidebar({ isOpen, onClose }: SettingsSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-deepGray border-r border-darkerGray transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-16 md:pt-0">
          <div className="p-4">
            <h2 className="text-ash text-lg font-semibold mb-4">Settings</h2>

            {/* Navigation Menu */}
            <nav className="space-y-1 mb-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[#2B2B2B] text-ash"
                        : "text-ash hover:bg-[#2B2B2B] hover:text-white"
                    )}
                    onClick={onClose}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Verify Account Card */}
            <VerifyAccountCard />
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}
