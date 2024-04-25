"use client"

import Image from "next/image";
import { useState } from "react";

const DataURL= "data:image/jpeg;base64,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"

export const Description = () => {
    const [ state , setState ] = useState(false)

    const handleClick = () =>{
        setState(!state)
    }

    return (
        <section className="p-8 rounded-lg flex gap-9 justify-center">
            <button onClick={ handleClick} className={`bg-transparent border-none cursor-pointer`}>
                <div className="relative inset-0 rounded-lg shadow-lg w-60 h-60 bg-blue-500 shadow-blue-500/90 ">
                    <Image 
                        src="/Images/description.jpg"
                        alt="Amor"
                        className={`object-cover rounded-lg ${state ? 'bg-red-600 border-violet-neon border-2 rounded-lg' : ''}`}
                        fill
                        placeholder="blur"
                        blurDataURL={DataURL}
                    />
                </div>
         </button>
            <div className="flex flex-col justify-center w-96">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Description</h2>
                <p className="text-lg leading-relaxed text-text-color">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Sed, esse? Impedit dolore doloremque delectus quisquam magnam a dolorem officia eos, 
                    minus error similique iste alias odit porro aliquam quae repellendus.
                </p>
            </div>
        </section>
    );
};

