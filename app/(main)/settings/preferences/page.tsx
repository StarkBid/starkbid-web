import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function PreferencesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Preference</h1>
        <p className="text-ash text-lg">
          Customize your experience and notification settings.
        </p>
      </div>

      <Card className="bg-[#1C1D1F] border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple/20 rounded-lg">
              <Settings className="h-5 w-5 text-purple" />
            </div>
            <CardTitle className="text-white text-xl">Application Preferences</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-ash">Preferences settings coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
} 