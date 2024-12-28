
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from '@/components/ui/separator';
import { Dispatch, SetStateAction, useState } from 'react';
import { EntryProps } from '../page';

interface DiallogPopoverProps {
    setNewEntries: Dispatch<SetStateAction<EntryProps[]>>;
}

const DialogPopover = ({
    setNewEntries,
}: DiallogPopoverProps) => {

    // const [entries, setEntries] = useState<string[]>([]);
    const [AccordionHeading, setAccordionHeading] = useState<string>("");
    const [AccordionDescription, setAccordionDescription] = useState<string>("");

    const handleSubmit = () => {
        if (AccordionHeading.trim() !== "" && AccordionDescription.trim() !== "") {
            setNewEntries((prevEntries) => (
                [
                    ...prevEntries,
                    {
                        heading: AccordionHeading,
                        description: AccordionDescription
                    }
                ]
            ));
            setAccordionHeading("");
            setAccordionDescription("");
        };
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='border-2'>
                        Enter a new Accordion
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Accordion</DialogTitle>
                        <DialogDescription>
                            Please enter the below details and click submit
                        </DialogDescription>
                    </DialogHeader>
                    <Separator />
                    <div className='grid gap-4'>
                        <Label htmlFor='AccHeading'>Accordion Heading:</Label>
                        <Input
                            value={AccordionHeading}
                            onChange={(e) => setAccordionHeading(e.target.value)}
                            id='AccHeading'
                            placeholder='Is it accessible?'
                            className='focus-visible:ring-1 focus-visible:ring-blue-900'
                        />
                        <Label htmlFor='AccDesc'>Accordion Description:</Label>
                        <textarea
                            value={AccordionDescription}
                            onChange={(e) => setAccordionDescription(e.target.value)}
                            id='AccDesc'
                            placeholder='Yes. It adheres to the WAI-ARIA design pattern.'
                            className='focus-visible:ring-1 focus-visible:ring-blue-900'
                        />
                        <DialogClose asChild>
                            <Button onClick={handleSubmit} className='bg-blue-600 hover:bg-blue-800 active:bg-blue-900'>Submit</Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default DialogPopover