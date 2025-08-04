"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const AccountDetected = () => {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerVariants}
      className={`w-full h-full flex flex-col items-center justify-start px-6 pt-20 md:w-4/5 md:mx-auto md:justify-center md:pt-20 pb-20 ${nunitoSans.className}`}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-5 sm:hidden">
          <div className="w-8 h-8 bg-purple rounded-xl flex items-center justify-center">
            <Image
              src="/starkbid.png"
              alt="StarkBid"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <span className="text-white text-xl font-bold">StarkBid</span>
        </div>
      </motion.div>

      <motion.div className="w-full" variants={fadeInUp}>
        <h1 className="text-3xl font-bold text-center lg:text-4xl">
          Account Detected
        </h1>
        <p className="text-sm text-ash md:text-base mt-4 text-center">
          An account seemed to be registered on{" "}
          <span className="text-white">StarkBid</span> with the email{" "}
          <span className="text-white">mickytempo@gmail.com</span>. You can
          choose to continue with this account or register with a different
          account.
        </p>
      </motion.div>

      <motion.div className="w-full" variants={fadeInUp}>
        <Image
          src={"/avatars/main-avatar.svg"}
          width={125}
          height={125}
          alt="avatar"
          className="object-contain mx-auto mt-16"
        />
      </motion.div>

      <motion.p
        className="text-lg text-white md:text-base font-semibold mt-3 text-center"
        variants={fadeInUp}
      >
        09297...00ygr
      </motion.p>

      <motion.p
        className="text-base font-medium text-purple md:text-base mt-3 text-center"
        variants={fadeInUp}
      >
        mickytempo@gmail.com
      </motion.p>

      <motion.div className="w-full mt-5" variants={fadeInUp}>
        <button className="w-full bg-purple text-white p-3 rounded-md">
          Continue with Account
        </button>
      </motion.div>

      <motion.div className="w-full mt-5" variants={fadeInUp}>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="w-full bg-deepGray text-ash p-3 rounded-md"
        >
          Enter Manually
        </button>
      </motion.div>

      <motion.p
        className="text-left text-ash text-sm font-normal mt-5 md:text-center pb-10 lg:pb-0 "
        variants={fadeInUp}
      >
        Don&apos;t have an account?{" "}
        <span
          onClick={() => {
            router.push("/auth/signup");
          }}
          className="text-purple cursor-pointer"
        >
          Sign Up
        </span>
      </motion.p>
    </motion.div>
  );
};

export default AccountDetected;
