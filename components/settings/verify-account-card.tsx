import Image from "next/image";
import { Button } from "@/components/ui/button";

export function VerifyAccountCard() {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="relative h-24 w-full">
        <Image
          src="/verify-shield.png"
          alt="Verify Account"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-true_black px-4 py-3">
        <div className="text-center text-white mb-3">
          <div className="font-semibold text-sm mb-1">Verify Your Account</div>
          <p className="text-white/90 text-xs leading-relaxed">
            Verify your account now to gain more presence on StarkBid.
          </p>
        </div>

        <Button
          size="sm"
          className="w-full bg-darkGray text-white hover:bg-darkerGray font-medium text-sm"
        >
          Create Now
        </Button>
      </div>
    </div>
  );
}
