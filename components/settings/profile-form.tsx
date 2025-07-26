"use client";

import { Twitter, Instagram, MessageCircle, Send, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(500, {
    message: "Bio must not exceed 500 characters.",
  }),
  website: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  discord: z.string().optional(),
  telegram: z.string().optional(),
});

interface ProfileFormProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function ProfileForm({ form, onSubmit }: ProfileFormProps) {
  const socialPlatforms = [
    {
      platform: "twitter" as const,
      placeholder: "Enter your X username",
      icon: Twitter,
      label: "X",
    },
    {
      platform: "instagram" as const,
      placeholder: "Enter your Instagram username",
      icon: Instagram,
      label: "Instagram",
    },
    {
      platform: "discord" as const,
      placeholder: "Enter your Discord username",
      icon: MessageCircle,
      label: "Discord",
    },
    {
      platform: "telegram" as const,
      placeholder: "Enter your Telegram username",
      icon: Send,
      label: "Telegram",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  {...field}
                  className="border-darkerGray text-white placeholder:text-gray-500"
                />
              </FormControl>
              <FormDescription className="text-xs text-gray-500">
                Please note that this name will be displayed publicly for other
                users to see.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  {...field}
                  className="border-darkerGray text-white placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Short Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little about yourself..."
                  {...field}
                  className="border-darkerGray text-white placeholder:text-gray-500 min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Website Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://"
                  {...field}
                  className="border-darkerGray text-white placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-white font-medium">Social Links & Connections</h3>
          <p className="text-gray-400 text-sm">
            Let&apos;s help you build a stronger reputation by adding your
            existing social links.
          </p>

          <div className="space-y-3">
            {socialPlatforms.map(({ platform, placeholder, icon: Icon }) => (
              <FormField
                key={platform}
                control={form.control}
                name={platform}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center border border-darkerGray rounded-lg">
                        <div className="flex items-center gap-3 px-3 py-2 flex-1">
                          {/* Icon with background container */}
                          <div className="w-8 h-8 rounded-lg bg-darkerGray flex items-center justify-center flex-shrink-0">
                            <Icon
                              className="h-4 w-4 text-white font-bold"
                              strokeWidth={2.5}
                            />
                          </div>
                          <Input
                            placeholder={placeholder}
                            {...field}
                            className="bg-transparent border-0 text-white placeholder:text-gray-500 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                        <Button
                          type="button"
                          size="sm"
                          className="bg-darkerGray hover:bg-darkGray text-white m-1 px-3"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Link
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        {/* Save Button */}
        <Button
          type="submit"
          className="w-full bg-purple hover:bg-purple text-white"
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
}

// Export the form schema for use in the main component
export { formSchema };
