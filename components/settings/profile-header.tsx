"use client";

import type React from "react";
import Image from "next/image";
import { Camera, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  coverImage: string;
  profileImage: string;
  onCoverImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProfileImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ProfileHeader({
  coverImage,
  profileImage,
  onCoverImageChange,
  onProfileImageChange,
}: ProfileHeaderProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Edit Profile</h1>

      {/* Cover Photo Section  */}
      <div className="relative">
        <div className="h-48 bg-black rounded-xl overflow-hidden relative">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt="Cover"
            fill
            className="object-cover rounded-xl"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-true_black/40"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <label htmlFor="cover-upload">
            <Button
              variant="secondary"
              className="bg-white/90 text-gray-900 hover:bg-white cursor-pointer"
              asChild
            >
              <span>Change Cover Photo</span>
            </Button>
          </label>
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            onChange={onCoverImageChange}
            className="hidden"
          />
        </div>

        {/* Profile Avatar  */}
        <div className="absolute -bottom-12 left-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-gray-900">
              <AvatarImage src={profileImage || "/placeholder.svg"} />
              <AvatarFallback className="bg-red-500 text-white text-2xl">
                U
              </AvatarFallback>
            </Avatar>
            <label htmlFor="profile-upload">
              <Button
                size="icon"
                variant="secondary"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white text-gray-900 hover:bg-gray-100 cursor-pointer"
                asChild
              >
                <span>
                  <Camera className="h-4 w-4" />
                </span>
              </Button>
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={onProfileImageChange}
              className="hidden"
            />
          </div>
        </div>
      </div>

      <div className="pt-8">
        {/* Verification Alert */}
        <div className="bg-deepGray rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-white font-medium">Verify your account</h3>
            <p className="text-gray-400 text-sm mt-1">
              Verify your account now to gain more presence on StarkBid.
            </p>
          </div>
          <Button className="bg-[#5B657A] hover:bg-gray-600 text-white">
            Verify Account Now
          </Button>
        </div>
      </div>
    </div>
  );
}
