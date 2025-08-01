/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});
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
    hasTransactionDetails: true,
  },
];

export function NotificationsPopover() {
  const [open, setOpen] = useState(false);
  const [notificationsList, setNotificationsList] = useState(notifications);

  const unreadCount = notificationsList.filter(
    (notification) => notification.unread
  ).length;

  const markAllAsRead = () => {
    setNotificationsList(prev => 
      prev.map(notification => ({ ...notification, unread: false }))
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="w-fit h-fit relative cursor-pointer">
          <Image
            src="/svgs/notification.svg"
            alt="notification"
            width={20}
            height={20}
            quality={90}
            className="md:w-6 md:h-6"
          />
          {unreadCount > 0 && (
            <div className="min-w-[16px] md:min-w-[18px] h-[16px] md:h-[18px] rounded-full bg-red absolute -top-1 md:-top-2 -right-1 md:-right-2 flex items-center justify-center px-1">
              <span className="text-white text-[10px] md:text-xs font-bold leading-none">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={`p-0 border-0 z-[9999] bg-[#1C1D1F] rounded-xl w-[calc(100vw-48px)] sm:w-[531px] max-w-[531px] h-[calc(100vh-140px)] sm:h-[561px] max-h-[561px] ${nunitoSans.className}`}
        style={{ 
          border: "4px solid #292929"
        }}
        align="end"
        sideOffset={5}
        alignOffset={0}
        avoidCollisions={true}
        collisionPadding={24}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-7 pt-5 pb-5 bg-[#1C1D1F] gap-2">
          <h3 className="text-white font-bold text-base sm:text-3xl flex-shrink-0">Notifications</h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-gray-300 text-xs sm:text-sm h-8 sm:h-11 bg-[#272729] rounded-[10px] px-2 sm:px-7 py-1.5 sm:py-2.5 gap-1 sm:gap-1.5 flex-shrink-0"
            onClick={markAllAsRead}
          >
            <Image
              src="/check.png"
              alt="checkmark"
              width={14}
              height={14}
              className="sm:w-6 sm:h-6 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm whitespace-nowrap">Mark all as read</span>
          </Button>
        </div>

        {/* Notifications List */}
        <div 
          className="overflow-y-auto scrollbar-hide" 
          style={{ 
            height: "calc(min(561px, calc(100vh - 120px)) - 84px)",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {notificationsList.map((notification, index) => (
            <div
              key={notification.id}
              className="hover:bg-gray-800/30 cursor-pointer relative px-3 sm:px-7 py-3 sm:py-5 bg-[#1C1D1F] border-t border-[#292929] first:border-t-0"
            >
              {/* Purple dot indicator for unread notifications */}
              {notification.unread && (
                <div className="absolute w-2 h-2 sm:w-2 sm:h-2 bg-[#8C62F2] rounded-full left-1 sm:left-3 top-5 sm:top-9" />
              )}

              {notification.user ? (
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex gap-2 sm:gap-3 items-start pl-3 sm:pl-0">
                    <div className="relative flex-shrink-0">
                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                        <AvatarImage
                          src={notification.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback className="text-xs">{notification.user[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 min-w-0 pr-1">
                      <p className="text-xs sm:text-sm text-gray-300 break-words leading-relaxed">
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
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        • {notification.time}
                      </p>
                    </div>
                  </div>

                  {notification.image && (
                    <div className="ml-8 sm:ml-11 mr-1">
                      <div className="w-full h-16 sm:h-24 rounded-lg overflow-hidden">
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

                  {/* Transaction Details Button */}
                  {notification.hasTransactionDetails && (
                    <div className="ml-8 sm:ml-11 mr-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white font-normal hover:text-gray-300 text-xs h-6 sm:h-[26px] rounded-sm px-2 sm:px-2 gap-1 sm:gap-2 border border-[#29292A] w-auto max-w-full"
                      >
                        <span className="whitespace-nowrap truncate">View Transaction Details</span>
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex gap-2 sm:gap-3 items-start pl-3 sm:pl-2">
                    <div className="flex-1 min-w-0 pr-1">
                      <p className="text-xs sm:text-sm text-white font-medium break-words leading-relaxed">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 sm:mt-2 break-words leading-relaxed">
                        {notification.details}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        • {notification.time}
                      </p>
                    </div>
                  </div>

                  {/* Transaction Details Button */}
                  {notification.hasTransactionDetails && (
                    <div className="ml-5 sm:ml-11 mr-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:text-gray-300 text-xs h-6 sm:h-[26px] bg-[#29292A] rounded-sm px-2 sm:px-2 gap-1 sm:gap-2 border border-[#29292A] w-auto max-w-full"
                      >
                        <span className="whitespace-nowrap truncate">View Transaction Details</span>
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