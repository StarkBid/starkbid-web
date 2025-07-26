"use client";

import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VerificationStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "pending";
  buttonText: string;
  buttonVariant?: "default" | "secondary" | "outline";
}

export function VerificationPage() {
  const verificationSteps: VerificationStep[] = [
    {
      id: "username",
      title: "Create username",
      description:
        "Perform your first verification by adding a username in my profile.",
      status: "completed",
      buttonText: "Completed",
      buttonVariant: "secondary",
    },
    {
      id: "email",
      title: "Verify email address",
      description: "verify your email address to strengthen your security.",
      status: "pending",
      buttonText: "Verify email address",
    },
    {
      id: "profile",
      title: "Add a profile and cover image",
      description: "Add a cover and profile or an avatar in my profile page.",
      status: "pending",
      buttonText: "Go to my profile",
    },
    {
      id: "share",
      title: "Share your profile link",
      description: "Share your profile link to friends and family.",
      status: "pending",
      buttonText: "Share profile link",
    },
    {
      id: "assets",
      title: "Own 2 assets",
      description: "Purchase or own 2 assets on StarkBid.",
      status: "pending",
      buttonText: "Explore NFTs",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Verification</h1>
        <p className="text-gray-400">
          Perform the following process and requirements below to get a
          verification badge and enjoy your StarkBid experience. A verification
          badge is placed next to person&apos;s username or wallet.
        </p>
      </div>

      <div className="space-y-4">
        {verificationSteps.map((step) => (
          <div
            key={step.id}
            className=" border border-darkerGray rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {/* Status indicator - only green background for completed checkmark */}
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center",
                      step.status === "completed"
                        ? "bg-green-500"
                        : "bg-gray-600"
                    )}
                  >
                    {step.status === "completed" ? (
                      <Check className="h-4 w-4 text-white" />
                    ) : (
                      <Clock className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-white font-medium">{step.title}</h3>
                  {step.status === "pending" && (
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded">
                      Pending
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm ml-9">{step.description}</p>
              </div>

              <div className="ml-4 flex items-center gap-2">
                {step.status === "completed" && (
                  <div className="bg-green rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
                <Button
                  variant={step.buttonVariant || "default"}
                  className={cn(
                    step.status === "completed"
                      ? "bg-gray-600 hover:bg-gray-700 text-white"
                      : "bg-purple hover:bg-purple text-white"
                  )}
                  disabled={step.status === "completed"}
                >
                  {step.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
