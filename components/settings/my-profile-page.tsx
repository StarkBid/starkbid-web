"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import { ProfileHeader } from "./profile-header";
import { ProfileForm, formSchema } from "./profile-form";

export function MyProfilePage() {
  const [coverImage, setCoverImage] = useState("/cover_image.jpg");
  const [profileImage, setProfileImage] = useState("/profile_avatar.png");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      website: "https://",
      twitter: "",
      instagram: "",
      discord: "",
      telegram: "",
    },
  });

  const handleCoverImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Saving profile data:", values);
  };

  return (
    <div className="space-y-8">
      <ProfileHeader
        coverImage={coverImage}
        profileImage={profileImage}
        onCoverImageChange={handleCoverImageChange}
        onProfileImageChange={handleProfileImageChange}
      />

      <ProfileForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
