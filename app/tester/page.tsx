

import { Flag, Search } from 'lucide-react';
import ProfileMenu from './_components/profileMenu';
import { Button } from '@/components/ui/button';
import Card from './_components/card';
import AddCards from './_components/addcards';



const page = () => {
    
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
            {/* container for the cards */}
            <section className='flex items-center gap-2 mx-40 my-20'>
                <Card /> 
                <AddCards />
            </section>
        </div>
    )
}

export default page