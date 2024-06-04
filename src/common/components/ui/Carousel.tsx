'use client'

import Image from './ImageFallback';
import { ReactElement, useState } from 'react';

export function Carousel({id, imageCount}: {id: string, imageCount: number}) {
    const [index, setIndex] = useState(0);

    //TODO: Add number of carousel pictures as field in database

    let images: ReactElement[] = [];

    function goPrevious() {
        let temp = index;

        if (temp > 0) temp--;
        else temp = imageCount-1;

        setIndex(temp);
    }
    
    function goNext() {
        let temp = index;

        if (temp < imageCount-1) temp++;
        else temp = 0;
        
        setIndex(temp);
    }
    
    function enlarge() {
    
    }

    //Render all images
    for (let i = 0; i < imageCount; i++) {
        images.push(
            <Image
                className=""
                src={`/images/${id}/carousel/${i}.png`}
                height={512}
                width={512}
                alt="Image carousel"
                onClick={enlarge}
            />
        );
    }
    
    return (
        <div className="group border-4 rounded-3xl grid w-max relative">
            <Image
                className="absolute transform top-1/2 -translate-y-1/2 left-5 transition-all duration-200 ease-in-out group-hover:opacity-100 opacity-0"
                src='/assets/carousel-prev.png'
                width={32}
                height={6}
                alt='Previous picture'
                onClick={goPrevious}
            />

            {images[index]}
            
            <Image
                className="absolute transform top-1/2 -translate-y-1/2 right-5 transition-all duration-200 ease-in-out group-hover:opacity-100 opacity-0"
                src='/assets/carousel-next.png'
                width={32}
                height={6}
                alt='Next picture'
                onClick={goNext}
            />
        </div>
    );
}