"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { type FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useWallet } from "@/providers/wallet-connect-context";
import {
  type StarknetkitConnector,
  useStarknetkitConnectModal,
} from "starknetkit";
import { useAccount, useConnect } from "@starknet-react/core";
import { toast } from "sonner";

interface Step1Props {
  setTabName: (tabName: string) => void;
}

const Step1Schema = z.object({
  acceptedTerms: z.literal(true, {
    errorMap: () => ({
      message: "You must accept the terms and privacy policy",
    }),
  }),
});

type Step1FormValues = z.infer<typeof Step1Schema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Step1: FC<Step1Props> = ({ setTabName }) => {
  const { openConnectModal, isModalOpen } = useWallet();
  const { connectors, connect, isSuccess } = useConnect();
  const { address, account } = useAccount();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as unknown as StarknetkitConnector[],
  });
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleConnect = async () => {
    const { connector } = await starknetkitConnectModal();
    try {
      if (connector) {
        await connect({ connector });
      } else {
        console.error("No connectors available");
        toast.warning(
          "No wallet connectors found. Please make sure Argent or Braavos is installed."
        );
      }
    } catch (error) {
      console.error("Wallet Connection Failed:", error);
      toast.error("Failed to connect wallet. Try again.");
    }
  };

  const WalletOptions = [
    {
      title: "MetaMask",
      icon: "/svgs/metamasks-icon.svg",
      action: handleConnect,
    },
    {
      title: "Coinbase Wallet",
      icon: "/svgs/coinbase-icon.svg",
      action: handleConnect,
    },
    {
      title: "Passkeys",
      icon: "/svgs/passkey-icon.svg",
      action: handleConnect,
    },
    {
      title: "WalletConnect",
      icon: "/svgs/wallet-connect.svg",
      action: () => {
        if (!isModalOpen) {
          openConnectModal();
        }
      },
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1FormValues>({
    resolver: zodResolver(Step1Schema),
  });

  const onSubmit = async (data: Step1FormValues) => {
    console.log("step 1 data", data);
    const selected = WalletOptions.find((w) => w.title === selectedWallet);
    if (selected) {
      await selected.action();
    } else {
      toast.warning("Please select a wallet option");
    }
  };

  useEffect(() => {
    if (isSuccess && address && account) {
      setTabName("step-2");
    }
  }, [isSuccess, address, account, setTabName]);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-start pt-10 md:w-4/5 md:mx-auto md:justify-center md:pt-12"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerVariants}
    >
      <motion.div className="w-full" variants={fadeInUp}>
        <h1 className="text-3xl font-bold text-left md:text-center lg:text-left">
          Connect Wallet
        </h1>
        <p className="text-base text-ash text-left mt-4 md:text-center lg:text-left">
          Please choose a wallet you want to connect to StarkBid. There are
          several wallet providers.
        </p>
        <p className="text-left text-ash text-sm font-normal mt-5 md:text-center lg:text-left">
          Accept{" "}
          <span className="text-purple cursor-pointer">Terms of Service</span>{" "}
          and <span className="text-purple cursor-pointer">Privacy Policy</span>
        </p>
        <div className="w-full mt-3 flex items-center justify-start gap-2">
          <input type="checkbox" {...register("acceptedTerms")} />
          <p className="text-left text-ash text-sm font-normal md:text-center">
            I read and accept
          </p>
        </div>
        {errors.acceptedTerms && (
          <p className="text-red text-xs mt-2">
            {errors.acceptedTerms.message}
          </p>
        )}
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-2 md:flex md:items-center md:justify-between my-6 gap-4 md:gap-2"
        variants={fadeInUp}
      >
        {WalletOptions.map(({ icon, title }) => (
          <motion.div
            className="flex flex-col justify-stretch items-center md:w-1/4"
            key={title}
            variants={fadeInUp}
            onClick={() => setSelectedWallet(title)}
          >
            <div
              className={`w-full border-2 border-deepGray rounded-md p-4 h-14 md:h-20 cursor-pointer flex items-center justify-center ${
                selectedWallet === title ? "border-purple" : "border-none"
              }`}
            >
              <Image
                src={icon || "/placeholder.svg"}
                width={60}
                height={36.77}
                alt="icon"
                className="w-10"
              />
            </div>
            <p className="text-xs text-center font-bold mt-2 truncate cursor-pointer">
              {title}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="w-full" variants={fadeInUp}>
        <button
          type="submit"
          className={`w-full text-white p-3 rounded-md ${
            selectedWallet
              ? "bg-purple cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedWallet}
        >
          Connect Wallet
        </button>
        <p className="text-center text-ash text-sm font-normal mt-5 pb-20">
          Can&apos;t find your wallet?{" "}
          <span className="text-purple cursor-pointer">Contact Support </span>
        </p>
      </motion.div>
    </motion.form>
  );
};

export default Step1;
