"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FormSchema = z.object({
    firstName: z.string().min(2, { message: "First name should be more than 2 letters" }),
    lastName: z.string(),
    emailAddress: z.string().email({ message: "Please enter a valid email address: with @ and a proper domain" }),
    message: z.string()
});

const ContactFormSection = () => {

    const [FormData, setFormData] = useState<z.infer<typeof FormSchema>>();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            emailAddress: "",
            message: ""
        }
    });

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        setFormData(values);
    }

    return (
        <div className="mx-auto px-4 md:w-1/2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name={"firstName"}
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="formlabel">First Name</FormLabel>
                                <FormControl>
                                    <Input className="formInput" placeholder={"Hello!..."} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"lastName"}
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="formlabel">Last Name</FormLabel>
                                <FormControl>
                                    <Input className="formInput" placeholder={"Last name here!"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"emailAddress"}
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="formlabel">Email</FormLabel>
                                <FormControl>
                                    <Input className="formInput" placeholder={"abc@mail.com"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"message"}
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="formlabel">Message</FormLabel>
                                <FormControl>
                                    <Input className="formInput" placeholder={"I want to build something..."} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button size={"lg"} type="submit" className="w-full text-lg px-8">Submit</Button>
                </form>
            </Form>
            {FormData && (
                <div className="overflow-auto m-4 mt-16 ring-1 ring-offset-8 ring-gray-500 rounded-sm p-4 bg-gray-950 text-gray-300">
                    <pre>{JSON.stringify(FormData, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default ContactFormSection