"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const notifications = [
  {
    id: 1,
    user: "Mark Megan",
    action: "just bid a token of",
    amount: "0.030 ETH",
    item: "Monkey Mode",
    time: "11 hours ago",
    avatar: "/notification_avatar.png",
    image: "/notification_img.png",
    unread: true,
  },
  {
    id: 2,
    type: "transaction",
    message: "Your withdraw transaction has been approved and executed",
    details:
      "Your 0.030 ETH NFT purchase transaction has been approved and executed for HazzleOQ asset",
    time: "11 hours ago",
    unread: true,
    hasTransactionDetails: true,
  },
  {
    id: 3,
    user: "Lois Griffin",
    action: "just minted",
    amount: "0.82 ETH",
    item: "Game dayOW",
    time: "11 hours ago",
    avatar: "/notification_avatar.png",
    unread: false,
  },
];

export function NotificationsPopover() {
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter(
    (notifications) => notifications.unread
  ).length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-fit h-fit relative cursor-pointer">
          <Image
            src="/svgs/notification.svg"
            alt="notification"
            width={24}
            height={24}
            quality={90}
          />
          {unreadCount > 0 && (
            <div className="min-w-[18px] h-[18px] rounded-full bg-red absolute -top-2 -right-2 flex items-center justify-center px-1">
              <span className="text-white text-xs font-bold leading-none">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-96 p-0 bg-deepGray border-darkerGray"
        align="end"
      >
        <div className="p-4 border-b border-darkerGray">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">Notifications</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 text-sm bg-darkerGray"
            >
              <Check className="h-4 w-4 mr-1" />
              Mark all as read
            </Button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "p-4 border-b border-deepGray hover:bg-darkerGray cursor-pointer",
                notification.unread && "bg-darkGray"
              )}
            >
              {notification.user ? (
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={notification.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>{notification.user[0]}</AvatarFallback>
                      </Avatar>
                      {notification.unread && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300">
                        <span className="text-white font-medium">
                          {notification.user}
                        </span>{" "}
                        {notification.action}{" "}
                        <span className="text-purple-400 font-medium">
                          {notification.amount}
                        </span>{" "}
                        for the asset{" "}
                        <span className="text-white font-medium">
                          {notification.item}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        • {notification.time}
                      </p>
                    </div>
                  </div>

                  {notification.image && (
                    <div className="ml-11">
                      <div className="w-full h-24  rounded-lg overflow-hidden">
                        <Image
                          src={notification.image || "/placeholder.svg"}
                          alt="NFT preview"
                          width={300}
                          height={120}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <Image
                          src="/svgs/notification.svg"
                          alt="notification"
                          width={16}
                          height={16}
                          quality={90}
                        />
                      </div>
                      {notification.unread && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {notification.details}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        • {notification.time}
                      </p>
                    </div>
                  </div>

                  {/* Transaction Details Button */}
                  {notification.hasTransactionDetails && (
                    <div className="ml-11">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:text-purple-300 text-sm p-0 h-auto"
                      >
                        View Transaction Details
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
