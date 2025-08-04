import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import Image from "next/image";
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

const signUpSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email address required" })
        .email("Please enter a valid email address"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

interface SignInFormProps {
    setShowAccountDetected: (show: boolean) => void;
}

const SignInForm: FC<SignInFormProps> = ({ setShowAccountDetected }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    });
    const router = useRouter();
    const onSubmit = (data: SignUpFormData) => {
        console.log("Sign In data", data)
        setShowAccountDetected(true)
    };
    return (
        <>
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className={`w-full h-full flex flex-col items-center justify-start px-6 pt-12 md:w-4/5 md:mx-auto md:justify-center md:pt-0 ${nunitoSans.className}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Logo */}
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

                <motion.div
                    className="w-full text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold lg:text-4xl">
                        Sign In
                    </h1>
                    <p className="text-base text-ash mt-4">
                        Please provide your email address to get started.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="w-full mt-6 flex flex-col">
                        <label
                            className="font-sm text-white font-normal text-left"
                            htmlFor="email-input"
                        >
                            Email Address <span className="text-purple">*</span>
                        </label>
                        <input
                            {...register("email")}
                            className={`outline-none mt-2 border-2 shadow-[#292929] placeholder:text-ash rounded-md text-white text-sm p-3 bg-transparent font-normal ${errors.email ? "border-red" : "border-[#292929]"
                                }`}
                            placeholder="Enter email address"
                            id="email-input"
                            type="email"
                        />

                        {errors.email && (
                            <span className="text-red text-xs mt-2">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <motion.div
                        className="w-full mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <button className="w-full bg-purple text-white p-3 rounded-md font-medium">
                            Sign In
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                router.push("/");
                            }}
                            className="w-full bg-[#2a2a2a] text-white p-3 rounded-md mt-4 font-medium"
                        >
                            Continue as Guest
                        </button>

                        <p className="text-center text-ash text-sm font-normal mt-6">
                            Don&apos;t have an account?{' '}
                            <span onClick={() => {
                                router.push("/auth/signup")
                            }} className="text-purple cursor-pointer">Sign Up</span>
                        </p>
                    </motion.div>
                </motion.div>
            </motion.form>
        </>
    );
}

export default SignInForm;