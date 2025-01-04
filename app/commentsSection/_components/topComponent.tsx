import React, { useRef, useState } from 'react'
import { useAlldataContext } from '../_provider/dataProvider'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const TopComponent = () => {

    const { AllComments } = useAlldataContext();
    const [signOutClicked, setsignOutClicked] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleSignout = () => {
        setsignOutClicked(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        };
        timerRef.current = setTimeout(() => setsignOutClicked(false), 2000);
    }

    return (<>
        <section className='flex justify-between items-center text-center'>
            <div>
                <h1 className='font-black text-gray-800 text-5xl'>{AllComments.totalComments}</h1>
                <p className=' text-gray-400/70 font-medium'>comments</p>
            </div>
            <div>
                <Button onClick={handleSignout} variant="outline" className='bg-transparent hover:bg-white/50 active:bg-gray-300 sm:text-lg sm:px-10 sm:py-6 border-2 border-gray-300 text-gray-700 font-semibold'>Sign Out</Button>
                <p className={`${signOutClicked ? "text-gray-400" : "text-transparent"} text-xs mt-2 transition duration-150 `}>
                    This is just placeholder!
                </p>
            </div>
        </section>
        <Separator className='my-4 bg-gray-200 h-[2px] rounded-md' />
    </>
    )
}

export default TopComponent