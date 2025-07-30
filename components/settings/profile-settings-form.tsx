"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Camera,
  X,
  Instagram,
  MessageCircle,
  Send,
  Info,
  Plus,
  Trash2,
  User,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

// Validation schema
const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  socialLinks: z.object({
    x: z.string().optional(),
    instagram: z.string().optional(),
    discord: z.string().optional(),
    telegram: z.string().optional(),
  }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder: string;
  color: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    id: "x",
    name: "X (Twitter)",
    icon: X,
    placeholder: "Enter your X username",
    color: "hover:text-black hover:bg-white",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    placeholder: "Enter your Instagram username",
    color: "hover:text-pink-500",
  },
  {
    id: "discord",
    name: "Discord",
    icon: MessageCircle,
    placeholder: "Enter your Discord username",
    color: "hover:text-indigo-500",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: Send,
    placeholder: "Enter your Telegram username",
    color: "hover:text-blue-500",
  },
];

export function ProfileSettingsForm() {
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isVerified] = useState(false);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      website: "",
      socialLinks: {
        x: "",
        instagram: "",
        discord: "",
        telegram: "",
      },
    },
  });

  const handleCoverPhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPG, PNG, or GIF)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPhoto(reader.result as string);
      setIsUploading(false);
      toast.success("Cover photo uploaded successfully");
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPG, PNG, or GIF)");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Avatar file size must be less than 2MB");
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
      setIsUploading(false);
      toast.success("Avatar uploaded successfully");
    };
    reader.readAsDataURL(file);
  };

  const removeCoverPhoto = () => {
    setCoverPhoto(null);
    toast.success("Cover photo removed");
  };

  const handleVerifyAccount = () => {
    toast.info("Redirecting to verification process...");
  };

  const handleSocialLink = (platformId: string) => {
    const socialLinks = form.getValues("socialLinks");
    const link = socialLinks[platformId as keyof typeof socialLinks];
    if (link && link.trim()) {
      toast.success(platformId.toUpperCase() + " linked successfully");
      // In a real app, this would handle the actual linking process
    } else {
      toast.error(
        "Please enter a valid " + platformId.toUpperCase() + " username"
      );
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Profile data:", { ...data, coverPhoto, avatar });
      toast.success("Profile updated successfully");
    } catch {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      {/* Cover Photo Section */}
      <Card className="bg-gray-900 border-gray-800 mb-20">
        <div className="relative">
          {coverPhoto ? (
            <div className="relative h-48 md:h-64 w-full">
              <Image
                src={coverPhoto}
                alt="Cover photo"
                fill
                className="object-cover"
              />

              {/* Overlay for better button visibility */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <Button
                  onClick={() =>
                    document.getElementById("cover-photo-input")?.click()
                  }
                  variant="secondary"
                  className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm"
                  disabled={isUploading}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  {isUploading ? "Uploading..." : "Change Cover Photo"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative h-48 md:h-64 w-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 flex items-center justify-center">
              <Button
                onClick={() =>
                  document.getElementById("cover-photo-input")?.click()
                }
                variant="secondary"
                className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm"
                disabled={isUploading}
              >
                <Camera className="w-4 h-4 mr-2" />
                {isUploading ? "Uploading..." : "Add Cover Photo"}
              </Button>
            </div>
          )}

          {/* Avatar Section */}
          <div className="absolute -bottom-10 left-8">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-gray-900 shadow-xl">
                {avatar ? (
                  <AvatarImage src={avatar} alt="Profile avatar" />
                ) : (
                  <AvatarFallback className="bg-gray-700 text-white">
                    <User className="w-12 h-12" />
                  </AvatarFallback>
                )}
              </Avatar>
              <Button
                size="icon"
                variant="secondary"
                className="absolute  bg-black/70 hover:bg-black/80 backdrop-blur-sm top-12 right-12 w-8 h-8  text-white  shadow-lg"
                onClick={() => document.getElementById("avatar-input")?.click()}
              >
                <Image
                  src={"/camera.png"}
                  width={100}
                  height={100}
                  alt="camera"
                  className="w-full h-full"
                />
              </Button>
            </div>
          </div>

          {/* Remove cover photo button */}
          {coverPhoto && (
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 right-4 bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm"
              onClick={removeCoverPhoto}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Hidden file inputs */}
        <input
          id="cover-photo-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleCoverPhotoUpload}
        />
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarUpload}
        />
      </Card>

      {/* Account Verification Section */}
      {!isVerified && (
        <Card className="bg-[#1C1D1F] border-gray-800 mt-8">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    Verify your account
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Verify your account now to gain more presence on StarkBid
                  </p>
                </div>
              </div>
              <Button
                onClick={handleVerifyAccount}
                className="bg-[#5B657A] text-white hover:bg-gray-600 w-full sm:w-auto whitespace-nowrap"
                size="sm"
              >
                Verify Account Now
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Profile Information Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="bg-transparent border-none">
            <CardContent className="space-y-6 p-0">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter username"
                        className="bg-transparent border-gray-700 text-white placeholder:text-gray-400 w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Please Note that this name will be displayed publicly for
                      other users to see.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        className="bg-transparent border-gray-700 text-white placeholder:text-gray-400 w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio Field */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself"
                        className="bg-transparent border-gray-700 text-white placeholder:text-gray-400 min-h-[100px] w-full"
                        {...field}
                      />
                    </FormControl>
                    <div className="flex justify-between"></div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Website Field */}
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://yourwebsite.com"
                        className="bg-transparent border-gray-700 text-white placeholder:text-gray-400 w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Social Links Section */}
          <Card className="bg-transparent border-none">
            <CardHeader className="px-0">
              <CardTitle className="text-white">
                Social Links & Connections
              </CardTitle>
              <FormDescription className="text-gray-400">
                Let’s help you build a stronger reputation by adding your
                existing social links.
              </FormDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              {socialPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className="flex items-center gap-3 border-gray-700 border rounded-lg p-2"
                >
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <platform.icon className={`h-5 w-5 text-white`} />
                  </div>
                  <div className="flex-1 w-full">
                    <Input
                      placeholder={platform.placeholder}
                      className="bg-transparent w-full border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent text-white placeholder:text-gray-400"
                      onChange={(e) => {
                        const socialLinks = form.getValues("socialLinks");
                        form.setValue("socialLinks", {
                          ...socialLinks,
                          [platform.id]: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-[#29292A]  hover:bg-transparent  text-white hover:text-white border-none"
                    onClick={() => handleSocialLink(platform.id)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Link
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Form Actions */}
          <div className="flex w-full items-center justify-center rounded-md bg-[#8C62F2] gap-4">
            <Button
              type="submit"
              className="bg-purple-600 text-white hover:bg-purple-700"
              disabled={form.formState.isSubmitting || isUploading}
            >
              {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
