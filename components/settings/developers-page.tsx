"use client";

import { Button } from "@/components/ui/button";

export function DevelopersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Developers</h1>
        <p className="text-gray-400">
          Get to access your API to display, list, buy and sell NFTs.
        </p>
      </div>

      <div className=" border border-darkerGray rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-medium mb-2">
              Verify email address
            </h3>
            <p className="text-gray-400 text-sm">
              verify your email address to to access our API key.
            </p>
          </div>

          <div className="flex items-center gap-3 ml-6">
            <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
              Pending
            </span>
            <Button
              variant="secondary"
              className="bg-darkerGray hover:bg-darkGray text-white border-0"
            >
              Create
            </Button>
            <Button className="bg-purple hover:bg-purple-700 text-white">
              Verify email address
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
