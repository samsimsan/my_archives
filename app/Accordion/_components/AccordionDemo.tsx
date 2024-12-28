import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { EntryProps } from "../page";

interface AccordionProps {
    AllEntries: EntryProps[];
}

export function AccordionDemo({ AllEntries }: AccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {AllEntries.length > 0 ? (
                AllEntries.map((entry, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{entry.heading}</AccordionTrigger>
                        <AccordionContent>
                            <pre className="w-full">{entry.description}</pre>
                        </AccordionContent>
                    </AccordionItem>
                ))
            ) : (
                <></>
            )}
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
