"use client";

import { ProfileSettingsForm } from "@/components/settings/profile-settings-form";

export default function ProfileSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
        <p className="text-ash text-lg">
          Manage your profile information, cover photos, and social media
          connections.
        </p>
      </div>

      <ProfileSettingsForm />
    </div>
  );
}
