'use client';

import React from 'react';
import Image from 'next/image';

interface NFTCardImageProps {
    src: string;
    alt: string;
    isHovered?: boolean;
}

const NFTCardImage: React.FC<NFTCardImageProps> = ({ src, alt, isHovered = false }) => {
    return (
        <div className="relative aspect-square w-full">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover rounded-lg transition-opacity duration-300"
                style={{ opacity: isHovered ? 0.9 : 1 }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
            />
        </div>
    );
};

export default NFTCardImage;