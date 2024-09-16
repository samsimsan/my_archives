"use client";

import { Separator } from '@/components/ui/separator';


const page = () => {
    return (
        <div
            style={{
                // "background": "rgb(99,137,212)"
                "background": "linear-gradient(180deg, rgba(99,137,212,1) 31%, rgba(228,208,222,1) 100%)",
            }}
            className='h-full'
        >
            <nav className='px-4 py-2 h-16'>
                <h1 className='text-white text-3xl font-bold'>S</h1>
                
            </nav>
            <Separator className='bg-gray-600 opacity-40'/>
            <main
                className='px-32 py-16'
            >

            </main>
        </div>
    )
}

export default page