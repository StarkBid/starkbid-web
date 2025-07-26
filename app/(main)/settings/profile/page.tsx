import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function ProfileSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">My Profile</h1>
        <p className="text-ash text-lg">
          Manage your profile information and preferences.
        </p>
      </div>

      <Card className="bg-[#1C1D1F] border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple/20 rounded-lg">
              <User className="h-5 w-5 text-purple" />
            </div>
            <CardTitle className="text-white text-xl">Profile Settings</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-ash">Profile settings coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
} 