import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function VerificationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Verification</h1>
        <p className="text-ash text-lg">
          Verify your identity and enhance your account security.
        </p>
      </div>

      <Card className="bg-[#1C1D1F] border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple/20 rounded-lg">
              <Shield className="h-5 w-5 text-purple" />
            </div>
            <CardTitle className="text-white text-xl">Account Verification</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-ash">Verification settings coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}
function page() {
  return <div>verification page</div>;
}

export default page;
