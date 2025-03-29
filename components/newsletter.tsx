"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import stars from '../public/star.png';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
        }
    };

    return (
        <div className="bg-purple bg-cover rounded-[3rem] text-white relative overflow-hidden h-auto md:h-[35vh] flex items-center px-6 sm:px-10 lg:px-[10rem] py-10">
            {/* top star */}
            <Image
                src={stars}
                height={50}
                width={150}
                alt='stars'
                className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6"
            />
            {/* bottom star */}
            <Image
                src={stars}
                height={50}
                width={150}
                alt='stars'
                className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6"
            />
            <div className="mx-auto w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Stay in the loop</h2>
                        <p className="text-base sm:text-lg opacity-90 mb-6 max-w-full md:max-w-[30rem] mx-auto md:mx-0">
                            A hauntingly beautiful NFT series where glitchy, transparent
                            pixels form eerie digital ghosts and lost memories
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-white text-black bg-opacity-25 backdrop-blur-sm px-6 py-4 placeholder-white placeholder-opacity-70 rounded-lg flex-grow border-none outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-purple font-semibold px-8 py-4 hover:bg-opacity-90 transition-all rounded-lg duration-200 w-full sm:w-auto"
                                >
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <div className="bg-white text-black bg-opacity-25 backdrop-blur-sm px-6 py-8 text-center">
                                <p className="text-xl font-semibold">Thank you for subscribing!</p>
                                <p className="mt-2 opacity-90">Stay tuned for updates on our NFT collection.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;