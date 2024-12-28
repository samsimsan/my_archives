"use client";


import { useState } from 'react';
import { AccordionDemo } from './_components/AccordionDemo'
import DialogPopover from './_components/Dialog'

export interface EntryProps {
    heading: string;
    description: string;
}

const Accordion = () => {

    const [Entries, setEntries] = useState<EntryProps[]>([]);

    return (
        <div className=''>
            <h1 className=''>Accordions</h1>
            <div className='flex items-center flex-col w-full gap-y-4'>
                <div className='w-1/2'>
                    <AccordionDemo AllEntries={Entries}/>
                </div>
                <DialogPopover setNewEntries={setEntries} />
            </div>

        </div>
    )
}

export default Accordion