"use client";

import { Separator } from '@/components/ui/separator';
import { Flag, Search } from 'lucide-react';
import ProfileMenu from './_components/profileMenu';
import { DropdownMenuDemo } from './_components/test';
import { Button } from '@/components/ui/button';
import Test_box from './_components/test_box';
import { useState } from 'react';



const page = () => {
    
    // const box_holder = [1]
    const [box_holder, setBox_holder] = useState([1]);

    // const add_more_box = (num: number) => {
    //     let last_index  
    // }
    
    return (
        // this div acts as body
        <div
            style={{
                // "background": "rgb(99,137,212)"
                "background": "linear-gradient(180deg, rgba(99,137,212,1) 31%, rgba(228,208,222,1) 100%)",
            }}
            className='h-full transition-all'
        >
            <nav className='flex items-center justify-between px-6 py-4 border-b border-slate-500 text-slate-100'>
                <Flag strokeWidth={2.5} className='' />
                {/* right side menu options */}
                <div className='flex items-center gap-6'>
                    Menu
                    <ProfileMenu />
                    <Button className='rounded-full bg-slate-700/45' size="icon">
                        <Search
                            className='h-4 w-4'
                            strokeWidth={2.5}
                        />
                    </Button>
                </div>
            </nav>
            <div className='flex flex-wrap p-32 w-full'>
                {/* box creator challenge */}
                {box_holder.map((box) => {
                    return <Test_box key={box} add_box={setBox_holder} num={box}/>
                })}              
            </div>
        </div>
    )
}

export default page