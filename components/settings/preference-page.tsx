"use client";

import { useState, useCallback, useEffect } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ThemeMode = "dark" | "light" | "system";

interface NotificationSettings {
  auction: boolean;
  bidding: boolean;
  portfolio: boolean;
  activity: boolean;
  system: boolean;
}

export function PreferencePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>("dark");
  const [notifications, setNotifications] = useState<NotificationSettings>({
    auction: true,
    bidding: false,
    portfolio: true,
    activity: true,
    system: true,
  });

  useEffect(() => {
    setMounted(true);
    if (theme) {
      setSelectedTheme(theme as ThemeMode);
    }
  }, [theme]);

  // Debounced notification toggle
  const handleNotificationToggle = useCallback(
    (key: keyof NotificationSettings) => {
      setNotifications((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));

      // Mock API call with debouncing
      setTimeout(() => {
        console.log(
          `${key} notification ${notifications[key] ? "disabled" : "enabled"}`
        );
      }, 300);
    },
    [notifications]
  );

  const handleThemeChange = (newTheme: ThemeMode) => {
    setSelectedTheme(newTheme);
    setTheme(newTheme);
  };

  const themeOptions = [
    {
      id: "dark" as ThemeMode,
      name: "Dark Mode",
      description:
        "More visible and eye-friendly design for low-light environments.",
      icon: Moon,
      preview: "/darkMode_preview.png",
    },
    {
      id: "light" as ThemeMode,
      name: "Light Mode",
      description:
        "Light visuals when your system is configured to light mode.",
      icon: Sun,
      preview: "/lightMode_preview.png",
    },
    {
      id: "system" as ThemeMode,
      name: "System Mode",
      description:
        "This will make use of the theme your system is currently using now.",
      icon: Monitor,
      preview: "/systemMode_preview.png",
    },
  ];

  const notificationOptions = [
    {
      key: "auction" as keyof NotificationSettings,
      title: "Auction Notification",
      description:
        "Notifies you when an auction for a watched or followed asset or project begins. Alerts you when an auction is close to its end and when the auction ends and reveals if they've won or lost.",
    },
    {
      key: "bidding" as keyof NotificationSettings,
      title: "Bidding Notification",
      description:
        "Receive Alerts when someone places a higher bid than yours.",
    },
    {
      key: "portfolio" as keyof NotificationSettings,
      title: "Portfolio & Asset Notification",
      description:
        "Notifies you when a new NFT or collectible is added to a project you follow. This also notifies you when a tracked asset's value significantly increases or decreases and also when an asset has successfully been transferred to a new owner.",
    },
    {
      key: "activity" as keyof NotificationSettings,
      title: "Social & Activity Notification",
      description:
        "Notifies a you that someone has followed their portfolio or project. Also notifies when someone comments or interacts with their listed item.",
    },
    {
      key: "system" as keyof NotificationSettings,
      title: "System & Security Notification",
      description:
        "Get Alerted you of logins from new or unrecognized devices. Informs the user when a payment or asset transfer fails. Optional alerts about feature releases, changes in fees, or scheduled maintenance.",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Preference</h1>
        <p className="text-gray-400">
          Select and manage your notification preferences to control how and
          when you receive updates to your email and in-app.
        </p>
      </div>

      {/* Interface Theme Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1">
            Interface Theme
          </h2>
          <p className="text-gray-400 text-sm">
            Customize your Sphere&apos;s account theme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themeOptions.map((themeOption) => {
            const isSelected = selectedTheme === themeOption.id;
            return (
              <div
                key={themeOption.id}
                className={cn(
                  "relative border-2 rounded-lg p-4 cursor-pointer transition-all h-72",
                  isSelected
                    ? "border-purple "
                    : "border-gray-700 hover:border-gray-600"
                )}
                onClick={() => handleThemeChange(themeOption.id)}
              >
                {/* Preview Image */}
                <div className="mb-4 h-40  rounded  overflow-hidden">
                  <Image
                    src={themeOption.preview || "/placeholder.svg"}
                    alt={`${themeOption.name} preview`}
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Theme Info */}
                <div className="flex items-center gap-2 mb-2">
                  <themeOption.icon className="h-4 w-4 text-white" />
                  <h3 className="font-medium text-white">{themeOption.name}</h3>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {themeOption.description}
                </p>

                {/* Checkmark  */}
                {isSelected && (
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-purple rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="space-y-6">
        {notificationOptions.map((option) => (
          <div
            key={option.key}
            className="flex items-start justify-between gap-4"
          >
            <div className="flex-1">
              <h3 className="font-medium text-white mb-1">{option.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {option.description}
              </p>
            </div>

            <div className="flex-shrink-0 pt-1">
              <Switch
                checked={notifications[option.key]}
                onCheckedChange={() => handleNotificationToggle(option.key)}
                className={cn(
                  "data-[state=checked]:bg-purple",
                  "data-[state=unchecked]:bg-gray-600 dark:data-[state=unchecked]:bg-gray-700",
                  "data-[state=unchecked]:border-gray-500 dark:data-[state=unchecked]:border-gray-600",
                  "border-2 transition-all duration-200",
                  "hover:data-[state=unchecked]:bg-gray-500 dark:hover:data-[state=unchecked]:bg-gray-600",
                  "focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-gray-900"
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
