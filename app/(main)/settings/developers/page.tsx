"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type VerificationStatus = "pending" | "accepted" | "none";

export default function DevelopersPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("pending");
  const [userEmail, setUserEmail] = useState("user@example.com"); // Mock current user email

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setUserEmail(email);
    setVerificationStatus("pending");
    setIsSubmitting(false);
    setEmail("");
  };

  const getStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case "pending":
        return (
          <Badge 
            className={cn(
              "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
              "hover:bg-yellow-500/30"
            )}
          >
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case "accepted":
        return (
          <Badge 
            className={cn(
              "bg-green-500/20 text-green-400 border-green-500/30",
              "hover:bg-green-500/30"
            )}
          >
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Accepted
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStatusIcon = (status: VerificationStatus) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-400" />;
      case "accepted":
        return <CheckCircle2 className="h-5 w-5 text-green-400" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Developers</h1>
        <p className="text-ash text-lg">
          Get to access your API to display, list, buy and sell NFTs.
        </p>
      </div>

      {/* Email Verification Card */}
      <Card className="bg-[#1C1D1F] border-gray-800">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple/20 rounded-lg">
                <Mail className="h-5 w-5 text-purple" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">Verify email address</CardTitle>
                <p className="text-ash text-sm mt-1">
                  Verify your email address to get access to our API key.
                </p>
              </div>
            </div>
            {verificationStatus !== "none" && getStatusBadge(verificationStatus)}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Current Status Section */}
          {verificationStatus !== "none" && (
            <div className="p-4 bg-[#272729] rounded-lg border border-gray-700">
              <div className="flex items-center gap-3">
                {getStatusIcon(verificationStatus)}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">Current Email:</span>
                    <span className="text-ash">{userEmail}</span>
                  </div>
                  <p className="text-sm text-ash mt-1">
                    {verificationStatus === "pending" 
                      ? "We've sent a verification email. Please check your inbox and follow the instructions."
                      : "Your email has been verified and you have access to the developer API."
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  "bg-[#272729] border-gray-700 text-white placeholder:text-gray-500",
                  "focus:border-purple focus:ring-purple/20",
                  "h-12"
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className={cn(
                  "bg-purple hover:bg-purple/90 text-white font-medium h-12",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "flex-1 sm:flex-none sm:w-auto sm:px-8"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Verifying...
                  </>
                ) : (
                  "Verify email address"
                )}
              </Button>

              {verificationStatus === "accepted" && (
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "border-gray-700 text-ash hover:text-white hover:bg-gray-800 h-12",
                    "flex-1 sm:flex-none sm:w-auto sm:px-6"
                  )}
                >
                  Create API Key
                </Button>
              )}
            </div>
          </form>

          {/* Help Text */}
          <div className="text-sm text-ash space-y-2">
            <p>
              • You'll receive a verification email with instructions to confirm your email address
            </p>
            <p>
              • Once verified, you'll gain access to our developer API and documentation
            </p>
            <p>
              • API keys can be generated after email verification is complete
            </p>
          </div>
        </CardContent>
      </Card>

      {/* API Information Card (shown when verified) */}
      {verificationStatus === "accepted" && (
        <Card className="bg-[#1C1D1F] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-xl">API Access</CardTitle>
            <p className="text-ash">
              Your email has been verified. You now have access to our developer tools.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#272729] rounded-lg">
                <h4 className="text-white font-medium mb-2">API Documentation</h4>
                <p className="text-ash text-sm mb-3">
                  Learn how to integrate StarkBid into your application
                </p>
                <Button variant="outline" size="sm" className="border-gray-700 text-ash hover:text-white">
                  View Docs
                </Button>
              </div>
              <div className="p-4 bg-[#272729] rounded-lg">
                <h4 className="text-white font-medium mb-2">Generate API Key</h4>
                <p className="text-ash text-sm mb-3">
                  Create and manage your API keys for secure access
                </p>
                <Button size="sm" className="bg-purple hover:bg-purple/90">
                  Get Started
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
